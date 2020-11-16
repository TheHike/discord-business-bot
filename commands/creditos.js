module.exports = (bot, msg, prefix) =>{
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


    var id = msg.author.id;
    console.log(id);

   //query insert database
     connection.query("SELECT * FROM `users` WHERE userid = ?", [id], (err, rows) => {

      if(rows.length < 1 || rows[0].money == 0){
        return msg.reply("Não tens créditos")
      }

      
      else
      {
        var creditos = rows[0].money;      
        if(err)
        {
            console.log(err);                      
        }
        else
        {
            let embed = new Discord.MessageEmbed()
            .setColor('#0x57AB97')
              .setTitle("💸 SISTEMA DE CRÉDITOS")
              .setFooter(msg.author.tag, msg.author.avatarURL)
              .setThumbnail('https://cdn.discordapp.com/attachments/765706793988653066/766349273201115186/Accounts_Payable-512.png')
              .addField('Créditos Disponiveis: ', creditos + ' créditos' )
              .setTimestamp();
            msg.channel.send(embed);
        }       
      }
    });    
};
