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


    let id = args[0];

    if(msg.member.roles.cache.get('765722570111844392'))
    {

    function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 

    if(isNumber(id) == false)
    {
        return msg.reply("Não introduziste um número de encomenda válido!")
    }
    else
    {
      connection.query("SELECT * FROM `encomendas` WHERE `id` = ?" , [id], (err, rows) => { 
        console.log(rows)
        if(rows.length < 1)
        {
          msg.reply("Não existe nenhuma encomenda com esse ORDER ID")
        }
        else
        {
            connection.query("UPDATE `encomendas` SET `status` = ? WHERE `id` = ?", ['finished', id], (err, rows) => {

                msg.reply("Encomenda terminada com sucesso!")
            });
        }

      });
    }
    }
    else
    {
        msg.reply('Não tens __permissão__ para usar!');

    }
};

