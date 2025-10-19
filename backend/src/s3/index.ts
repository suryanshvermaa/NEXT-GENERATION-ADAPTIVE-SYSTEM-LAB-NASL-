import {
	DeleteObjectCommand,
	GetObjectCommand,
	PutObjectCommand,
} from "@aws-sdk/client-s3";
import s3client from "../config/s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import "dotenv/config";

const Bucket = process.env.S3_BUCKET;

const getKeyFromUrl = (imageUrlOrKey: string): string => {
	if (!imageUrlOrKey) return "";

	// If it already looks like a key (no scheme and no host), just normalize and return
	const looksLikeKey = !/^https?:\/\//i.test(imageUrlOrKey);
	if (looksLikeKey) {
		return imageUrlOrKey.replace(/^\/+/, "");
	}

	try {
		const u = new URL(imageUrlOrKey);
		// Path without leading slash
		let path = u.pathname.replace(/^\/+/, "");

		// If path-style URL, it starts with '<bucket>/'
		if (Bucket && path.startsWith(`${Bucket}/`)) {
			return path.slice(Bucket.length + 1);
		}

		// If virtual-hosted–style URL, bucket is part of hostname
		// e.g., '<bucket>.s3.amazonaws.com' or '<bucket>.minio.local'
		const hostStartsWithBucket = Bucket && u.hostname.toLowerCase().startsWith(`${Bucket}`.toLowerCase() + ".");
		if (hostStartsWithBucket) {
			return path;
		}

		// Fallback: if we can locate '/<bucket>/' anywhere in the path, strip it
		if (Bucket) {
			const idx = path.toLowerCase().indexOf(`${Bucket}`.toLowerCase() + "/");
			if (idx >= 0) {
				return path.slice(idx + Bucket.length + 1);
			}
		}

		return path;
	} catch {
		// Not a URL; return as-is sans leading slash
		return imageUrlOrKey.replace(/^\/+/, "");
	}
};

export const uploadImageURL = async (imageName: string): Promise<string> => {
	return new Promise(async (resolve, reject) => {
		const putImageCommand = new PutObjectCommand({
			Bucket,
			Key: `nasl/${Date.now().toString() + imageName}`,
		});
		const signedUrl = await getSignedUrl(s3client, putImageCommand, {
			expiresIn: 60 * 5,
		});
		if (!signedUrl) reject("signed url not found");
		resolve(signedUrl);
	});
};

export const signedUrl = async (
	imageUrl: string,
	time: number
): Promise<string> => {
	return new Promise(async (resolve, reject) => {
		const imageKey = getKeyFromUrl(imageUrl);
		if (!imageKey) return reject(new Error("Invalid imageUrl, could not derive object key"));

		const getImageCommand = new GetObjectCommand({
			Bucket,
			Key: imageKey,
		});
		const signedImageUrl = await getSignedUrl(s3client, getImageCommand, {
			expiresIn: 60 * time,
		});
		if (!signedImageUrl) reject("signed url not found");
		resolve(signedImageUrl);
	});
};

export const deleteImage = async (imageUrl: string): Promise<boolean> => {
	return new Promise(async (resolve, reject) => {
		try {
			const imageKey = getKeyFromUrl(imageUrl);
			if (!imageKey) return reject(new Error("Invalid imageUrl, could not derive object key"));

			const deleteImageCommand = new DeleteObjectCommand({
				Bucket,
				Key: imageKey,
			});
			await s3client.send(deleteImageCommand);
			resolve(true);
		} catch (error) {
			reject(error);
		}
	});
};
