module.exports = (bot, msg, prefix) =>{
    let Discord = require('discord.js');

    const paypal = msg.guild.emojis.cache.find(emoji => emoji.name == 'paypal');


    return msg.reply(`Para pagar por multibanco usa , guarda SEMPRE um comprovativo \n **Entidade:** 21800 \n **Referência:** 776 306 827`)


};

