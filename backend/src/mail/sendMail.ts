import { mailForCreateUserByAdmin } from ".";
import getMailTransporter from "../config/mail";

export const sendMailToCreatedUser=async(email:string,password:string)=>{
    const transporter=await getMailTransporter();
    const mailOptions={
        from:process.env.NODEMAILER_EMAIL,
        to:email,
        subject:"Your NASL-Lab Account Has Been Created",
        html:mailForCreateUserByAdmin(email,password)
    };
    await transporter.sendMail(mailOptions);
}