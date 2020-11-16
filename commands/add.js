module.exports = (bot, msg, prefix) =>{
    let Discord = require('discord.js');
    const mysql = require('mysql');
    const args = msg.content.slice(prefix).split(/ +/);
    const teste = command = args.shift();
    var creditos;
    var id = args[0];
    var quantidade = args[1];


    var connection = mysql.createConnection({
      host: '',
      user: '',
      password: '',
      database: ''
    });


    if(msg.member.roles.cache.get('765722570111844392'))
     {
            
        connection.query("SELECT * FROM `users` WHERE userid = ?" , [id],  (err, rows) => { //checka se ta na db
            if(!rows[0]){
               //NAO ESTA NA DB, LOGO ACRESCENTA 
               connection.query("INSERT INTO `users` (userid,money) VALUES (?,?)", [id,quantidade],  (err,rows) => {
                let embed = new Discord.MessageEmbed()
                .setColor('#0x57AB97')
                  .setTitle("💸 SISTEMA DE CRÉDITOS")
                  .setFooter(msg.author.tag, msg.author.avatarURL)
                  .setThumbnail('https://cdn.discordapp.com/attachments/765706793988653066/766349273201115186/Accounts_Payable-512.png')
                  .addField('Utilizador:', id)
                  .addField('Créditos:', quantidade)
                  .addField('Message:', '**CRÉDITOS** adicionados com sucesso')
                  .setTimestamp();
                msg.channel.send(embed);
              });
            }else{
               //SE ESTIVER NA DB, VAI DAR UPDATE COM O GUITO
              connection.query("UPDATE `users` SET money = ? WHERE userid = ?", [Number(rows[0].money) + Number(quantidade),id], (err,rows) => {
                let embed = new Discord.MessageEmbed()
                .setColor('#0x57AB97')
                  .setTitle("💸  SISTEMA DE CRÉDITOS")
                  .setFooter(msg.author.tag, msg.author.avatarURL)
                  .setThumbnail('https://cdn.discordapp.com/attachments/765706793988653066/766349273201115186/Accounts_Payable-512.png')
                  .addField('Utilizador:', id)
                  .addField('Créditos:', quantidade)
                  .addField('Mensagem:', 'Créditos adicionados com sucesso')
                  .setTimestamp();
                msg.channel.send(embed);
              });
            }
        })          
     }
     else
     {
         msg.reply('Não tens __permissão__ para usar!');
     }
};
