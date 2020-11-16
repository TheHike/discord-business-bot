//require
const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const mysql = require('mysql');

//mudaveis
const token = '';
const prefix = '!';
const comandos = require("./scripts/commandsReader")(prefix);

bot.on('ready', () => {
    console.log('Ready!');
    bot.user.setActivity(`INSTAGRAM -> contas_baratass`);
})

bot.on("message", (msg) =>{
      if(!msg.author.bot){
        console.log(`${msg.author.username}: ${msg.content}`);

        const args = msg.content.split(" ");
        if(comandos[args[0]]) comandos[args[0]](bot,msg);
      }

});

function gay (){
  setInterval(function(){
    var d = new Date();
      var n=d.toLocaleTimeString().toString();
      const shop = bot.channels.cache.find(channel => channel.name === "loja");
      if(n == "01:00:00")
      {
        let embed = new Discord.MessageEmbed()
        .setColor('#0x57AB97')
        .setImage("https://api.nitestats.com/v1/shop/image")
        .setTimestamp();
        shop.send(embed);
      }
  },1000);
  };

  gay();

console.log(comandos);

bot.login(token);
