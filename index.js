//Set-Location -Path C:\Users\irogo\Desktop\pizzaJoe

const Discord = require('discord.js');
const { prefix } = require('./config.json');
//const { prefix, token } = require('./config.json');
const client = new Discord.Client();

function catchError (error, message) {
	message.channel.send(`Error, try again!`);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
  if(message.member.hasPermission(['SEND_MESSAGES', 'VIEW_CHANNEL'])) {

			try {

			  	//console.log(message.content);
			    if(message.content.startsWith(`${prefix}help`)) {
			      	message.channel.send(`Here are the available commands: p!help, p!pizza?, p!pizza @user`);
			    }
					else if(message.content.startsWith(`${prefix}pizza?`)) {
			      	message.channel.send("Yes, pizza! but do you even pizza bro?!")
			    }
					else if(message.content.startsWith(`${prefix}pizza`)){
			      	const taggedUser = message.mentions.users.first();
			      	message.channel.send(`You baked ${taggedUser.username} a :pizza: pizza. Enjoy:pizzablob:!`);
			    }

			} catch (error) {
						catchError(error, message);
											}
	}

});

client.login(process.env.TOKEN);
