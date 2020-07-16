//Set-Location -Path C:\Users\irogo\Desktop\pizzaJoe

const Discord = require('discord.js');
const client = new Discord.Client();
const prefixes = ["p!", "joe"];

const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

function catchError(error, message) {
  console.log(`command error`);
}

client.once('ready', () => {
  console.log('Ready!');
  client.user.setActivity('p!help | version 1.0.3', {
    type: 'PLAYING'
  });
});

client.on('message', message => {
  if (message.member.hasPermission(['SEND_MESSAGES', 'VIEW_CHANNEL'])) {
    if (message.author.bot) return;

    let thereIsPrefix = false;
    // For each element of prefixes
    for (i = 0; i < prefixes.length; i++) {
      // if message starts with prefix
      // Note that here is not 《!》 unlinke before
      if (message.content.toLowerCase().startsWith(prefixes[i])) {
        thereIsPrefix = true;
        // remove prefix
        message.content = message.content.slice(0 + prefixes[i].length);

        // we did our job, so we exit loop
        break;
      }
    }

    let args = message.content.substring(prefixes[i]).split(" ");

    try {

      switch (args[0]) {
        case 'help':
            client.commands.get('help').execute(message, args);
        break;
        case 'update':
            client.commands.get('update').execute(message, args);
        break;
        case 'pizza':
            client.commands.get('pizza').execute(message, args);
        break;
        case 'morning':
            client.commands.get('morning').execute(message, args);
        break;
        case 'night':
            client.commands.get('night').execute(message, args);
        break;
        case 'joe':
            client.commands.get('joe').execute(message, args);
        break;
        case 'love':
            client.commands.get('love').execute(message, args);
        break;
        case 'vote':
            client.commands.get('vote').execute(message, args);
        break;
        case 'Iwantpizza':
            client.commands.get('iwantpizza').execute(message, args);
        break;
      }

    } catch (error) {
      catchError(error, message);
    }
  }

});

client.login(process.env.TOKEN);

//process.env.TOKEN
