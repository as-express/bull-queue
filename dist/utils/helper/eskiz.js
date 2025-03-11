import { env } from '../../config/env.js';
import fetch from 'node-fetch';
const authenticate = async () => {
    try {
        const res = await fetch('https://my.eskiz.uz/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: env.MAILER_MAIL, password: env.MAILER_PASS }),
        });
        if (!res.ok) {
            throw new Error(`Authentication failed. Status: ${res.status}, Message: ${await res.text()}`);
        }
        const data = await res.json();
        return data.access_token;
    }
    catch (error) {
        throw new Error(`Error during authentication: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
};
export const sendSMS = async (arg) => {
    try {
        const token = await authenticate();
        const res = await fetch('https://my.eskiz.uz/api/send-sms/single', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                client_id: 6171,
                count: 1,
                nik_id: '4546',
                phone: arg.phone,
                sending: 'Astify',
                text: `${arg.text}`,
            }),
        });
        if (!res.ok) {
            throw new Error(`SMS sending failed. Status: ${res.status}, Message: ${await res.text()}`);
        }
        const data = await res.json();
        console.log('SMS sent:', data);
    }
    catch (error) {
        throw new Error(`Error during SMS sending: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
};
