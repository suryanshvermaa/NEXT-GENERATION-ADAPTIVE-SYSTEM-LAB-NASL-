import {
	DeleteObjectCommand,
	GetObjectCommand,
	PutObjectCommand,
} from "@aws-sdk/client-s3";
import s3client from "../config/s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import "dotenv/config";

const Bucket = process.env.S3_BUCKET;

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
		const imageKey = imageUrl ? imageUrl.split("/").slice(7).join("/") : "";
		if (!imageKey) return reject(new Error("Invalid imageUrl, could not derive object Key"));

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
			const imageKey = imageUrl ? imageUrl.split("/").slice(7).join("/") : "";
			if (!imageKey) return reject(new Error("Invalid imageUrl, could not derive object Key"));

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
