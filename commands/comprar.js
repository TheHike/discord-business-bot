module.exports = (bot, msg, prefix) =>{
    let Discord = require('discord.js');
    const mysql = require('mysql');
    const args = msg.content.slice(prefix).split(/ +/);
    const teste = command = args.shift();
    var d = new Date();

    var connection = mysql.createConnection({
      host: '185.113.141.220',
      user: 'tugaelit_discord',
      password: 'R(goyfd]%;no',
      database: 'tugaelit_discord'
    });


      const logs = bot.channels.cache.find(channel => channel.name === "logs");
      

    var id = msg.author.id;
    var nome = msg.author;
    var creditos = args[0];  
    let item = args[1];
    let restante;

    function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 

    if(isNumber(creditos) == false)
    {
        return msg.reply("Não introduziste um número de créditos válido!")
    }

    if(creditos < 200)
    {
      return msg.reply("Por favor coloca o número certo na conta. Tentares burlar o sistema pode colocar os teus créditos em risco.")
    }

    if(item == null)
    {
      return msg.reply("Tens que escolher algo para comprar!")
    }

    let gay = [];
    gay = args;
    gay.splice([0],[1]);
    let pila = gay.join(' ');

    connection.query("SELECT * FROM `users` WHERE userid = ? AND `money` >= ?" , [id,creditos],  (err, rows) => { //checka se ta na db
        if(!rows.length)
        {
            let embed = new Discord.MessageEmbed()
            .setColor('#FF0000')
              .setTitle("❌ SISTEMA DE CRÉDITOS")
              .setFooter(msg.author.tag, msg.author.avatarURL)
              .setThumbnail('https://cdn.discordapp.com/attachments/765706793988653066/766349273201115186/Accounts_Payable-512.png')
              .addField('Erro:', 'Não tens créditos suficientes!')
              .setTimestamp();
            msg.channel.send(embed);
        }
        else
        {
          connection.query("INSERT INTO `encomendas` (userid,item,status) VALUES (?,?,?)", [id,pila,'unfinished'],  (err,rows) => {
            
          });
            restante = Number(rows[0].money) - Number(creditos);
            connection.query("UPDATE `users` SET money = ? WHERE userid = ?", [Number(rows[0].money) - Number(creditos),id], (err,rows) => {
                let embed = new Discord.MessageEmbed()
                .setColor('#0x57AB97')
                  .setTitle("💸 SISTEMA DE CRÉDITOS")
                  .setFooter(`Balance: ${restante} 💰`)
                  .setThumbnail('https://cdn.discordapp.com/attachments/765706793988653066/766349273201115186/Accounts_Payable-512.png')
                  .addField('Utilizador:', nome)
                  .addField('Créditos Gastos:', creditos)
                  .addField('Messagem:', `Compraste o item **__${pila}__** com **Sucesso**\n`)
                  .setTimestamp();
                msg.channel.send(embed);
            });

            
            let embed = new Discord.MessageEmbed()
            .setColor('#0x57AB97')
              .setThumbnail('https://cdn.discordapp.com/attachments/765706793988653066/766349273201115186/Accounts_Payable-512.png')
              .setDescription(`**__NOVA COMPRA ✅:__** \n\n **Utilizador** - ${nome} \n\n **Item** - ${pila} \n\n **Data da Compra** - ${d.toLocaleDateString()} \n\n **Créditos Gastos pelo Utilizador** - ${creditos} \n\n **Créditos que Sobram ao Utilizador** - ${restante} \n\n\**Status** - ❌`)
              .setTimestamp();
            logs.send(embed);
        }
    });
};