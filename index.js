//Set-Location -Path C:\Users\irogo\Desktop\pizzaJoe

const Discord = require('discord.js');
const client = new Discord.Client();
const prefixes = ["p!","joe"];

const GphApiClient = require('giphy-js-sdk-core');
giphy = GphApiClient("50gX3p6ftixGW7J948mGpPeQSE4RvD16");

function catchError (error, message) {
	message.channel.send(`Be more specific, I'm to cool to solve that :sunglasses:!`);
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
					else if(message.content.startsWith(`joe`)) {
						message.channel.send(`Stop pinging Pizza Joe you :poop:!`)
					}
					else if(message.content.startsWith(`gif`)) {
						giphy.search('gifs', {"q:" "pizza"})
								.then((response) => {
										var totalResponses = response.data.lenght;
										var responseIndex = Math.floor((Math.random() * 10) + 1) % totalResponses;
										var responseFinal = response.data[responseIndex];

										message.channel.send(`Here you go sugar :heart:!`, {
											files: [responseFinal.images.fixed_height.url]
										})
								})
					}

			} catch (error) {
						catchError(error, message);
											}
	}

});

client.login(process.env.TOKEN);
