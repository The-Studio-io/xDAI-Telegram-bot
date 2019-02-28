const Telegraf = require("telegraf");

const botKey = require("./default");
const bot = new Telegraf(botKey);

bot.start((req) => {
    if (req.message.chat.type == 'private') {
        let text = 'Hey! Nice to meet you. I can help you send xDAI tips here on telegram.\n';
            text += 'Try - "/help" to get the list of all the commands.';
        req.reply(text);
    } else {
        let text = "Hey! Nice to meet you all. Someone said xDAI? Well I can help you with that.";
            text = 'Try - "/help" to get list of all the things I can do.';
        req.reply(text);
    }
});

bot.help((req) => {
    let text = "Here are all the services I provide:-\n";
        text += '1. /tip - To tip anyone in a group\n';
        text += '2. /balance - To check your balance\n';
        text += '3. /deposit - To deposit more xDAI\n';
        text += '4. /withdraw - To withdraw xDAI to different address\n\n';
        text += 'Any problem? Reach us out - @XYZ';
    req.reply(text);
});

// Command to tip users in group
bot.command('tip', (req) => {
    if (req.message.chat.type != 'private') {
        let msgSlice = req.message.text.split(" ");
        // username of user to tip them
        let username = msgSlice[1];
        // xDAI quantity to tip in USD
        let xDAIQty;
        // getting xDAI quantity from message
        if (msgSlice[2] > 0) {
            xDAIQty = msgSlice[2];
        } else if (msgSlice[2] == 'penny') {
            xDAIQty = 0.01;
        } else if (msgSlice[2] == 'nickel') {
            xDAIQty = 0.05;                
        } else if (msgSlice[2] == 'dime') {
            xDAIQty = 0.1;                
        } else if (msgSlice[2] == 'quarter') {
            xDAIQty = 0.25;                
        } else if (msgSlice[2] == 'dollar') {
            xDAIQty = 1;                
        } else {
            var text = 'command should be in this format.\n';
            text += '/tip <@username> <xDAI_Amount>/penny/nickel/dime/quarter/dollar';
            req.reply(text);
        }
        if (xDAIQty) {
            /*
             * Get User ID from Username (yet to figure out how to do it, anyone knows?)
             * Get Address from User ID and send xDAI
            */
            req.reply(`Sent ${xDAIQty}xDAI to ${username}`);
        }
    } else {
        req.reply('This command can only be used in groups.');
    }
});

// Command to get user's balance
bot.command('balance', (req) => {
    if (req.message.chat.type == 'private') {
        let userID = req.message.chat.id;
        /*
         * Check Users balance with user ID 
        */
        req.reply("You've 1.4xDAI in your wallet.");
    } else {
        req.reply('This command can only be used in personal msgs. try - @xDAITestBot');
    }
});

// Command to get user's address to deposit more xDAI
bot.command('deposit', (req) => {
    if (req.message.chat.type == 'private') {
        let userID = req.message.chat.id;
        /*
         * get User's address with user ID 
        */
        req.reply("Your address to deposit xDAI - 0xa7615CD307F323172331865181DC8b80a2834324");
    } else {
        req.reply('This command can only be used in personal msgs. try - @xDAITestBot');
    }
});

// Command to withdraw xDAI
bot.command('withdraw', (req) => {
    if (req.message.chat.type == 'private') {
        let userID = req.message.chat.id;
        /*
         * get User's address with user ID 
        */
        req.reply("This feature is coming soon. Stay tuned!");
    } else {
        req.reply('This command can only be used in personal msgs. try - @xDAITestBot');
    }
});

bot.startPolling();
