const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '6436974779:AAEzVQkbZ4V7KehdGKO9uFcwhHjIDKMEtQE'
const bot = new TelegramBot(TOKEN, {polling: true})
bot.on('message', msg =>{
    bot.sendMessage(msg.chat.id, `Hello, i-am your ffirst bot. I saying : "Hi, ${msg.from.first_name}"`)
})