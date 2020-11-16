module.exports = (bot, msg, prefix) =>{
    let Discord = require('discord.js');
    const mysql = require('mysql');
    const args = msg.content.slice(prefix).split(/ +/);
    const teste = command = args.shift();
    let cor = Math.floor(Math.random() * 16777214) + 1;


    var tipo = args[0];

    if(tipo == "cliente")
    {
        
    let embed = new Discord.MessageEmbed()
    .setColor(cor)
    .setThumbnail('https://cdn.discordapp.com/attachments/765706793988653066/766349273201115186/Accounts_Payable-512.png')
    .setFooter(msg.author.tag, msg.author.avatarURL)
    .setDescription(`**__AJUDA__** \n\n **!comprar**  - Compra qualquer item da loja! \n ex: !comprar [creditos] [nome do item] \n\n **!creditos**  - Vê quantos créditos tens na nossa loja! \n\n **!metodos**  - Vê quais são os nossos métodos de pagamentos! \n\n **!check**  - Vê qual o estado da tua encomenda! \n ex: !check [order id] \n`)
    .setTimestamp();
    return msg.channel.send(embed);

    }
    else if(tipo == "staff")
    {
        let embed = new Discord.MessageEmbed()
        .setColor(cor)
        .setThumbnail('https://cdn.discordapp.com/attachments/765706793988653066/766349273201115186/Accounts_Payable-512.png')
        .setFooter(msg.author.tag, msg.author.avatarURL)
        .setDescription(`**__AJUDA__** \n\n **!add**  - Adiciona créditos a alguém do discord! \n ex: !add [discord id] [creditos] \n\n **!remove**  - Remove os créditos de alguém! \n ex: !remove [discord id] \n\n **!encomendas**  - Vê quais são as encomendas por realizar! \n\n **!check**  - Vê qual o estado da tua encomenda! \n ex: !check [order id] \n\n **!finish**  - Acaba a encomenda de alguma pessoa! \n ex: !finish [order id]`)
        .setTimestamp();
        return msg.channel.send(embed);
    }
    else if(tipo == null)
    {
        return msg.reply("Que tipo de ajuda precisas? Se fores um cliente, então digita **!help cliente**")
    }
    
};
