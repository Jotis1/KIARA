const Discord = require('discord.js');
module.exports = {
    nombre: "poll",
    alias: "p",
    
    run: async(client, message, args) => {
        message.delete().catch()
        
        const error = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription("El comando funciona así: `t!p --Mañana queréis vídeo --Sí! --No >:c --Como quieras`")
        const contenido = message.content.split('--')
        const Pregunta = contenido[1]
        const Opción1 = contenido[2]
        const Opción2 = contenido[3]
        const Opción3 = contenido[4]

        if(!Pregunta) return message.channel.send(error).then(msg=>msg.delete({ timeout: 40000 }))
        if(!Pregunta) return message.channel.send(error).then(msg=>msg.delete({ timeout: 40000 }))
        
       
        const embed = new Discord.MessageEmbed()
        .setTitle(`¡${message.author.username} ha iniciado una encuesta!`)
        .setDescription(`Pregunta: ${Pregunta}`)
        .addField('Opción 1:', "`"+Opción1+"`", inline = false)
        .addField('Opción 2:', "`"+Opción2+"`", inline = false)
        .addField('Opción 3:', "`"+Opción3+"`", inline = false)
        .setColor(`YELLOW`)
        
        const msg = await (await message.channel.send(embed))
        msg.react('1️⃣')
        msg.react('2️⃣')
        msg.react('3️⃣')
        

        
    }
}