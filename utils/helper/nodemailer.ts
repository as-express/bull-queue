import { mailer } from "../../config/nodemailer.js";
import 'colors'
import { IMail } from "../../public/interfaces/mail.js";

export const sendMail = async(data: IMail) => {
    await mailer.sendMail({
        from: 'Astify Queue-app',
        to: data.email,
        subject: '',
        text: data.text,
    })

    console.log(`Mail send success to ${data.email}`.green)
}