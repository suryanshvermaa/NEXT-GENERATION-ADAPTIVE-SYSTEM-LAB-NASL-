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
			expiresIn: 60 * 100,
		});
		if (!signedUrl) reject("signed url not found");
		resolve(signedUrl);
	});
};

export const signedUrl = async (imageUrl: string): Promise<string> => {
	return new Promise(async (resolve, reject) => {
		const getImageCommand = new GetObjectCommand({
			Bucket,
			Key: imageUrl,
		});
		const signedImageUrl = await getSignedUrl(s3client, getImageCommand, {
			expiresIn: 60 * 2,
		});
		if (!signedImageUrl) reject("signed url not found");
		resolve(signedImageUrl);
	});
};

export const deleteImage = async (imageUrl: string): Promise<boolean> => {
	return new Promise(async (resolve, reject) => {
		try {
			const deleteImageCommand = new DeleteObjectCommand({
				Bucket,
				Key: imageUrl,
			});
			await s3client.send(deleteImageCommand);
			resolve(true);
		} catch (error) {
			reject(error);
		}
	});
};
