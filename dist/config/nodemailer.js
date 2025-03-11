import * as nodemailer from 'nodemailer';
import { env } from './env.js';
export const mailer = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: String(env.MAILER_MAIL),
        pass: String(env.MAILER_PASS)
    }
});
