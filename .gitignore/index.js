const Discord = require("discord.js")
const client = new Discord.Client();

client.on('ready', () => {
    
    console.log("client is ready");
})




client.on('messageReactionAdd', (reaction, user) => {
  if(reaction.message.author.bot) 
  {
  	reaction.message.send('test')
  }

	
    
  
});

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
	m.react('❌')

});

}
})
client.login(process.env.TOKEN)
