import { createTransport } from "nodemailer";
import "dotenv/config";


const requireEnv = (key: string): string => {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Missing required environment variable: ${key}`);
    }
    return value;
};

const getMailTransporter = () => {
    const user = requireEnv("NODEMAILER_EMAIL");
    const rawPass = requireEnv("NODEMAILER_PASSWORD");

    // Gmail app passwords are often copied with spaces; Gmail expects no whitespace.
    const pass = rawPass.replace(/\s+/g, "");

    // Use explicit SMTP settings (STARTTLS) to avoid networks blocking SMTPS (465).
    const transporter = createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user,
            pass,
        },
    });
    return transporter;
};

export default getMailTransporter;