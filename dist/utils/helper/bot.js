import { bot } from "../../config/bot.js";
import 'colors';
export const sendMessage = async (data) => {
    await bot.telegram.sendMessage(data.username, data.text);
    console.log('Message sended'.green);
};
