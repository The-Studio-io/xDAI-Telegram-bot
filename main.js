const Telegraf = require("telegraf");

const botKey = require("./default");
const bot = new Telegraf(botKey);


bot.start((req) => {
    // if (req.message.chat.type != 'private') {
    // };
    console.log(req.message.text);
    var arr = req.message.text.split(" ");
    console.log(arr);
    req.reply('start');
});

bot.help((req) => {
    // if (req.message.chat.type != 'private') {
    // };
    console.log(req.message);
    req.reply('help');
});

bot.startPolling();