const TelegramBot = require('node-telegram-bot-api');
const webAppUrl = 'https://superlative-sorbet-f86e37.netlify.app';


const token = '6674800063:AAFOfcgdoNYAz-E6SKbHTkGKMRoNVCVcIFQ';
const bot = new TelegramBot(token, {polling: true});


bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if(text === '/start'){
        await bot.sendMessage(chatId, "The button is on the bottom. Please fill the form", {
            reply_markup: {
                keyboard: [
                    [{text: 'Fill the form', web_app: {url: webAppUrl}}]
                ]
            }
        });
        await bot.sendMessage(chatId, "The button is on the bottom. Make an order", {
            inline_markup: {
                inline_keyboard: [
                    [{text: 'Make an order', web_app: {url: webAppUrl}}]
                ]
            }
        });
    }
});