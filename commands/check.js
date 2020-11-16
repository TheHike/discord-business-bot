module.exports = (bot, msg, prefix) =>{
    let Discord = require('discord.js');
    const mysql = require('mysql');
    const args = msg.content.slice(prefix).split(/ +/);
    const teste = command = args.shift();

    var connection = mysql.createConnection({
      host: '',
      user: '',
      password: '',
      database: ''
    });


    let id = args[0];


    function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 

    if(isNumber(id) == false)
    {
        return msg.reply("Não introduziste um número de encomenda válido!")
    }
    else
    {
      connection.query("SELECT * FROM `encomendas` WHERE `id` = ? and `status` = ?" , [id , 'unfinished'], (err, rows) => { 
        console.log(rows)
        if(rows.length < 1)
        {
          msg.reply("Não existe nenhuma encomenda com esse ORDER ID")
        }
        else
        {
          let embed = new Discord.MessageEmbed()
          .setColor('#FF0000')
            .setTitle("💸 ENCOMENDAS")
            .setThumbnail('https://cdn.discordapp.com/attachments/765706793988653066/766349273201115186/Accounts_Payable-512.png')
            .addField('Utilizador:', rows[0].userid)
            .addField('Item:', rows[0].item)
            .addField('Status:', `❌`)
            .setTimestamp();
          msg.channel.send(embed);
        }

      });
    }

};

