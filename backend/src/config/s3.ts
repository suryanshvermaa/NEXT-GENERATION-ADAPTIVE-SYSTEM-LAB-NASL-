import { S3Client } from "@aws-sdk/client-s3";
import "dotenv/config";

const s3client = new S3Client({
	region: process.env.S3_REGION!,
	endpoint: process.env.S3_ENDPOINT!,
	credentials: {
		accessKeyId: process.env.ACCESS_KEY_ID!,
		secretAccessKey: process.env.SECRET_ACCESS_KEY!,
	},
	forcePathStyle: true,
});

export default s3client;
