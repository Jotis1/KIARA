const Discord = require('discord.js');
const Jaja = new Discord.MessageEmbed()
.setColor("RED")
.setDescription("Introduce el link de una imagen.")
module.exports = {
    nombre: "imagembed",
    alias: "ime",
    
    run: async(client, message, args) => {
        message.delete().catch()
        if(args.length < 1) return message.channel.send(Jaja).then(msg => msg.delete({timeout: 5000}));
        const embed = new Discord.MessageEmbed()
        .setColor("ORANGE")
        .setImage(args[0])
        
        message.channel.send(embed)

    }
}