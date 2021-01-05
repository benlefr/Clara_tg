const Discord = require("discord.js")
const client = new Discord.Client();

client.on('ready', () => {
    
    console.log("client is ready");
})






client.on('message', message =>{
    if(message.author.bot) return;
    if(message.author.id === "369907060038565899" || message.author.tag === "Clara#6724")
    {
        
	const Response = Math.floor(Math.random() * 11);
	    
        message.reply("TG")
    }
if (message.content ==="version bot début"){
message.channel.send("1")
}
 if (message.content === "sondage"){  
const exampleEmbed = {
	color: 0xff007f,
	title: 'Mute Clara ?',	
	
	fields: [
		{

                        name: '🔇',

                        value: 'Muuute',

                        inline: false,

                },{

                        name: 'Oui',

                        value: '✅',

                        inline: true,

                },
		
		{
			name: 'Non',
			value: '❌',
			inline: true,
		}
	],
	
	
	
};

message.channel.send({ embed: exampleEmbed }).then(m=>{
	m.react('✅'),
	m.react('❌'),
	const filter = (reaction, user) => reaction.emoji.name === '✅',
	const collector = message.createReactionCollector(filter, { time: 15000 }),
	collector.on('collect', r => m.channel.send(`Collected ${r.emoji.name}`)),
	collector.on('end', collected => m.channel.send(`Collected ${collected.size} items`))
	

});

}
})
client.login(process.env.TOKEN)

