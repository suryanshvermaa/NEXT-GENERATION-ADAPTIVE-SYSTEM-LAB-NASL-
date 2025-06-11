import { PutObjectCommand } from "@aws-sdk/client-s3";
import s3client from "../config/s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import "dotenv/config";


export const getUploadImageURL=async(imageName: string):Promise<string>=>{
    return new Promise(async(resolve,reject)=>{
        const putImageCommand=new PutObjectCommand({
            Bucket: process.env.S3_BUCKET!,
            Key: `nasl/${Date.now().toString()+imageName}`,
        })
        const signedUrl=await getSignedUrl(s3client,putImageCommand,{expiresIn:60*100});
        if(!signedUrl) reject("signed url not found");
        resolve(signedUrl)
    })
}
