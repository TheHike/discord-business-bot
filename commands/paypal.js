module.exports = (bot, msg, prefix) =>{
    let Discord = require('discord.js');

    const paypal = msg.guild.emojis.cache.find(emoji => emoji.name == 'paypal');


    return msg.reply(`${paypal} - Para pagar por paypal envia o dinheiro para **__snowhpgamer@gmail.com__**`)


};

