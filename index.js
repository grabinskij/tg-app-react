const TelegramBot = require('node-telegram-bot-api');
const webAppUrl = 'https://google.com';


const token = '6524114848:AAEoLjR1HKzbKiuHAK04chZlk_1K95xbjnA';
const bot = new TelegramBot(token, {polling: true});


bot.on('message', async (msg) => {
    // const congratMsg = msg.text;
    const chatId = msg.chat.id;
    const text = msg.text;

    if(text === '/start'){
        // await bot.sendMessage(chatId, "The button is on the bottom. Please fill the form", {
        //     reply_markup: {
        //         inline_keyboard: [
        //             [{text: 'Fill the form'}]
        //         ]
        //     }
        // });
        await bot.sendMessage(chatId, "The button is on the bottom. Please fill the form", {
            reply_markup: {
                inline_keyboard: [
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