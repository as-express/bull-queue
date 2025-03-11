import { bot } from "../../config/bot.js";
import { ITelegram } from "../../public/interfaces/bot.js";
import 'colors'

export const sendMessage = async(data: ITelegram) => {
   await bot.telegram.sendMessage(data.username, data.text)
   console.log('Message sended'.green)
}