module.exports = (bot, msg, prefix) =>{
    let Discord = require('discord.js');
    let cor = Math.floor(Math.random() * 16777214) + 1;

    const paypal = msg.guild.emojis.cache.find(emoji => emoji.name == 'paypal');
     const csgo = msg.guild.emojis.cache.find(emoji => emoji.name == 'csgo');
    const paysafecard = msg.guild.emojis.cache.find(emoji => emoji.name == 'paysafecard');
    const skrill = msg.guild.emojis.cache.find(emoji => emoji.name == 'skrill');

    let embed = new Discord.MessageEmbed()
    .setColor(cor)
    .setThumbnail('https://cdn.discordapp.com/attachments/765706793988653066/766349273201115186/Accounts_Payable-512.png')
    .setFooter(msg.author.tag, msg.author.avatarURL)
    .setDescription(`**__Métodos de Pagamento:__** \n\n ${paypal} PAYPAL ** - snowhpgamer@gmail.com \n\n **${paysafecard} PAYSAFECARD** \n\n **${skrill} SKRILL** - tiagojsmachado@hotmail.com \n\n **${csgo} SKINS DE CSGO - **[Clica Aqui](https://pay.skins.cash/donation/tug4elite)**`)
    .setTimestamp();
msg.channel.send(embed);


};

