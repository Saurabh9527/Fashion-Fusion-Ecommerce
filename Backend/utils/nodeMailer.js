
import nodemailer from 'nodemailer';
export const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'jdean4193@gmail.com',
        pass: 'hdyuxzkcrfsfkphv',
    },
});