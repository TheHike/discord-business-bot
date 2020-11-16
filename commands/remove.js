module.exports = (bot, msg, prefix) =>{
    let Discord = require('discord.js');
    const mysql = require('mysql');
    const args = msg.content.slice(prefix).split(/ +/);
    const teste = command = args.shift();
  
    var id = args[0];
    var quantidade = 0;
  
  if(id == null)
  {
      return msg.reply("O ID não pode estar vazio")
  }
  if(quantidade == null)
  {
      return msg.reply("Tens que escolher um número de créditos para retirar")
  }
  var connection = mysql.createConnection({
    host: '185.113.141.220',
    user: 'tugaelit_discord',
    password: 'R(goyfd]%;no',
    database: 'tugaelit_discord'
  });

  
      if(msg.member.roles.cache.get('765722570111844392'))
     {
            //query insert database
            connection.query("UPDATE `users` SET money = ? WHERE userid = ?", [quantidade,id], (err, rows) => {
                if(err)
                {
                    console.log(err);                      
                }
                else
                {
                    msg.reply("Créditos removidos com sucesso");
                }
            });          
     }
     else
     {
         msg.reply('Não tens __permissão__ para usar!');
     }
  };
  
  
  