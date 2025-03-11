import { mailer } from "../../config/nodemailer.js";
import 'colors';
export const sendMail = async (data) => {
    await mailer.sendMail({
        from: 'Astify Queue-app',
        to: data.email,
        subject: '',
        text: data.text,
    });
    console.log(`Mail send success to ${data.email}`.green);
};
