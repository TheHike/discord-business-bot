module.exports = (bot, msg, prefix) =>{
    let Discord = require('discord.js');

    const skrill = msg.guild.emojis.cache.find(emoji => emoji.name == 'skrill');


    return msg.reply(`${skrill} - Para pagar por skrill basta enviares o dinheiro para **__tiagojsmachado@hotmail.com__**`)


};

