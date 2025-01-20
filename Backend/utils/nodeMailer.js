
import nodemailer from 'nodemailer';
import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});
export const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.FROM_MAIL,
        pass: process.env.MAIL_PASS,
    },
});