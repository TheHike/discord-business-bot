module.exports = (bot, msg, prefix) => {
    let Discord = require('discord.js');
    const mysql = require('mysql');
    const args = msg.content.slice(prefix).split(/ +/);
    const teste = command = args.shift();
    
    var connection = mysql.createConnection({
      host: '185.113.141.220',
      user: 'tugaelit_discord',
      password: 'R(goyfd]%;no',
      database: 'tugaelit_discord'
    });


      if(msg.member.roles.cache.get('765722570111844392'))
      {

      let gay = [];
    connection.query("SELECT * FROM `encomendas` WHERE `status` = ?" , ['unfinished'], (err, rows) => { 

        if(!rows)
        {
            return msg.reply("Não há encomendas pendentes neste momento");
        }

        let embed = new Discord.MessageEmbed()
        .setColor('#fffff')
        .setThumbnail('https://cdn.discordapp.com/attachments/765706793988653066/766349273201115186/Accounts_Payable-512.png')
        .setFooter(msg.author.tag, msg.author.avatarURL)
        .setDescription(`As encomendas ativas são:`)
        .setTimestamp();


        for (let index = 0; index < rows.length; index++) {
            console.log(rows[index].id)
            gay[index] = rows[index].id;
            embed.addField(`ORDERID: ` , gay[index])
        }   

    msg.channel.send(embed);
    


    });
      }
      else
      {
        msg.reply('Não tens __permissão__ para usar!');
      }
};

