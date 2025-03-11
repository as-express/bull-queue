import { Worker } from "bullmq";
import { sendMail } from "../../utils/helper/nodemailer.js";
import { sendMessage } from "../../utils/helper/bot.js";
import { redis } from "../../config/redis.js";
import { sendSMS } from "../../utils/helper/eskiz.js";

new Worker(
    "mailQueue",
    async (job) => {
        const { email, phone, telegram, message } = job.data;
        console.log(`Processing: ${email}, ${telegram}`, `${phone}`);

        if (email) await sendMail({ email, text: message });
        if (telegram) await sendMessage({ username: telegram, text: message });
        if(phone) await sendSMS({phone: phone, text: message})

        console.log(`Job success: ${email}, ${telegram}, ${phone}`);
    },
    { connection: redis }
);

console.log("Worker started");
