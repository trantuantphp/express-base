import TelegramBot from 'node-telegram-bot-api';

export const sendMessageTelegram = (bot_token, chat_id, message) => {
    const bot = new TelegramBot(bot_token, { polling: false });
    try {
        bot.sendMessage(chat_id, message, { parse_mode: 'HTML' });
    } catch (error) {
        console.log(
            'Something went wrong when trying to send a Telegram notification: ',
            error,
        );
    }
};
