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
 if (message.content === "sondage"){  
const exampleEmbed = {
	color: 0x0099ff,
	title: 'Some title',
	url: 'https://discord.js.org',
	author: {
		name: 'Some name',
		icon_url: 'https://i.imgur.com/wSTFkRM.png',
		url: 'https://discord.js.org',
	},
	description: 'Some description here',
	thumbnail: {
		url: 'https://i.imgur.com/wSTFkRM.png',
	},
	fields: [
		{
			name: 'Regular field title',
			value: 'Some value here',
		},
		{
			name: '\u200b',
			value: '\u200b',
			inline: false,
		},
		{
			name: 'Inline field title',
			value: 'Some value here',
			inline: true,
		},
		{
			name: 'Inline field title',
			value: 'Some value here',
			inline: true,
		},
		{
			name: 'Inline field title',
			value: 'Some value here',
			inline: true,
		},
	],
	image: {
		url: 'https://i.imgur.com/wSTFkRM.png',
	},
	timestamp: new Date(),
	footer: {
		text: 'Some footer text here',
		icon_url: 'https://i.imgur.com/wSTFkRM.png',
	},
};

channel.send({ embed: exampleEmbed });

      }
})
client.login(process.env.TOKEN)
