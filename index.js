//Set-Location -Path C:\Users\irogo\Desktop\pizzaJoe

const Discord = require('discord.js');
//const { prefix } = require('./config.json');
//const { prefix, token } = require('./config.json');
const client = new Discord.Client();
const prefixes = ["p!","joe"];

function catchError (error, message) {
	message.channel.send(`Error, try again!`);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
  if(message.member.hasPermission(['SEND_MESSAGES', 'VIEW_CHANNEL'])) {
		if(message.author.bot) return;

		let thereIsPrefix = false;
		// For each element of prefixes
		for (i=0; i<prefixes.length; i++){
    // if message starts with prefix
    // Note that here is not 《!》 unlinke before
    if (message.content.toLowerCase().startsWith(prefixes[i])) {
    thereIsPrefix = true;
    // remove prefix
    message.content = message.content.slice(0 + prefixes[i].length );

    // we did our job, so we exit loop
    break;
    }
}

			try {

			  	//console.log(message.content);
			    if(message.content.startsWith(`help`)) {
			      	message.channel.send(`Here are the available commands: p!help, p!pizza?, p!pizza @user`);
			    }
					else if(message.content.startsWith(`pizza?`)) {
			      	message.channel.send("Yes, pizza! but do you even pizza bro?!")
			    }
					else if(message.content.startsWith(`pizza`)){
			      	const taggedUser = message.mentions.users.first();
			      	message.channel.send(`You baked ${taggedUser.username} a :pizza: pizza. Enjoy!`);
			    }
					else if(command === 'pizza') {
						message.channel.send(`Stop pinging Pizza Joe you :poop:!`)
					}

			} catch (error) {
						catchError(error, message);
											}
	}

});

client.login(process.env.TOKEN);
