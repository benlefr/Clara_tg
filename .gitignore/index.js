const Discord = require("discord.js")
const client = new Discord.Client();

client.on('ready', () => {
    
    console.log("client is ready");
})
client.on('message', message =>{
    if(message.author.bot) return;
    if(message.author.id === "314820739683319808")
    {
        message.reply("TG")
    }
})
client.login(process.env.TOKEN)
