module.exports = (bot, msg, prefix, ) =>{
  let Discord = require('discord.js');
  let cor = Math.floor(Math.random() * 16777214) + 1;
  let request = require('request');


 
  let embed = new Discord.MessageEmbed()
  .setColor(cor)
  .setImage("https://api.nitestats.com/v1/shop/image")
  .setTimestamp();
msg.channel.send(embed); 


};

