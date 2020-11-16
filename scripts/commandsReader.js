const fs = require("fs");
const dir = "./commands/"; //pasta onde vai ter os comandos

module.exports = (prefix) =>{

    var commands = {};

    const scripts = fs.readdirSync(dir);
    scripts.forEach(script=> {
            commands[prefix + script.split(".")[0]] = require("../" + dir + script);
    });

    return commands;
}