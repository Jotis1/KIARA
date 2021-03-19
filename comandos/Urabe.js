const Discord = require('discord.js');

module.exports = {
    nombre: "urabe",
    alias: ["m", "u"],
    
    run: async(client, message, args) => {
        message.react("🇺")
        message.react("🇷")
        message.react("🇦")
        message.react("🇧")
        message.react("🇪")
       


        const embed = new Discord.MessageEmbed()
        .setAuthor(`Autor : Alex_senpai` , "https://cdn.discordapp.com/avatars/610625566772822016/844796b9bd53ce4dd5d822d059c1e18b.webp?size=4096")
        .setTitle("La wafle de Alex")
        .setColor("RED")
        .setImage("https://tenor.com/view/cute-mysterious-girlfriend-x-in321go-counting-anime-gif-15454614")
        .setDescription(`Mikoto urabe tiene un vinculo especial con <@610625566772822016>.`)
        .setFooter("Mikoto Urabe", "https://media.discordapp.net/attachments/812001121153318952/812353305777799228/3ff29bde670aa2a4733b84914426e8ef.png?width=1202&height=676", { dynamic: true})

        message.channel.send(embed)

    }
}