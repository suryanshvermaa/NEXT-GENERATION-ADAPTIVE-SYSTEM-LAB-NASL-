import { createTransport } from "nodemailer";
import "dotenv/config";


const getMailTransporter =async ()=>{
    const transporter=await createTransport({
        service:'gmail',
        auth:{
            user:process.env.NODEMAILER_EMAIL!,
            pass:process.env.NODEMAILER_PASSWORD!
        }
    });
    return transporter;
}

export default getMailTransporter;