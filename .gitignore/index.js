const Discord = require("discord.js")
const client = new Discord.Client();

client.on('ready', () => {
    
    console.log("client is ready");
})
client.on('message', message =>{
    if(message.author.bot) return;
    if(message.author.id === "369907060038565899" || message.author.tag === "Clara#6724")
    {
        message.channel.send("TG Clara ")
        message.reply("TG")
    }
if (message.content ==="version bot début"){
message.channel.send("1")
}
})
client.login(process.env.TOKEN)
