import { mailForCreateUserByAdmin } from ".";
import getMailTransporter from "../config/mail";
import nodemailer from "nodemailer";
import "dotenv/config";

export const sendMailToCreatedUser=async(email:string,password:string)=>{
    if (!email) {
        throw new Error("sendMailToCreatedUser: email is required");
    }

    if (!password) {
        throw new Error("sendMailToCreatedUser: password is required (refusing to email a blank password)");
    }

    // Basic heuristic: prevent accidentally emailing a bcrypt hash
    if (password.startsWith("$2a$") || password.startsWith("$2b$") || password.startsWith("$2y$")) {
        throw new Error("sendMailToCreatedUser: refusing to email a hashed password");
    }

    const transporter = getMailTransporter();
    const mailOptions:nodemailer.SendMailOptions={
        from:process.env.NODEMAILER_EMAIL,
        to:email,
        subject:"Your NASL-Lab Account Has Been Created!",
        html:mailForCreateUserByAdmin(email,password)
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (err: any) {
        // Don't leak secrets; provide actionable guidance.
        const hint = "Email delivery failed. If you see ECONNREFUSED :465, switch to port 587 (STARTTLS) and ensure outbound SMTP is allowed. Also verify NODEMAILER_EMAIL and a Gmail App Password in NODEMAILER_PASSWORD (no spaces).";
        const details = err?.message ? ` (${err.message})` : "";
        throw new Error(hint + details);
    }
}