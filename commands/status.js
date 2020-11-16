module.exports = (bot, msg, prefix) =>{
    let Discord = require('discord.js');
    const mysql = require('mysql');
    const args = msg.content.slice(prefix).split(/ +/);
    const teste = command = args.shift();

    let gay = [];
    gay = args;
    let pila = gay.join(' ');

    if(pila == null)
    {   
        return msg.reply("Precisas de escolher algum status..")
    }
    else
    {
        bot.user.setActivity(`${pila}`);
    }
    

};

