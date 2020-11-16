module.exports = (bot, msg, prefix) =>{
    let Discord = require('discord.js');

    const paysafecard = msg.guild.emojis.cache.find(emoji => emoji.name == 'paysafecard');


    return msg.reply(`${paysafecard} - Para pagar por paysafecard deves criar uma conta Skrill ( Nao necessitas de cartao de crédito etc ) e seguir os passos do **!skrill** . Se tiveres problemas abre ticket ou envia dm no instagram!`)


};

