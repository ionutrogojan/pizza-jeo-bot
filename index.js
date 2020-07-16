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
        case "help":
            client.commands.get('help').execute(message, args);
        break;
      }
      //console.log(message.content);
      if (message.content.startsWith(`pizza?`)) {
        message.channel.send("Always Pizza! https://gph.is/2ferErB")
      } else if (message.content.startsWith(`morning`)) {
        const taggedUser = message.mentions.users.first();
        message.channel.send(`Good Morning ${taggedUser.username}! You should have some :pizza: ***pizza***! https://giphy.com/gifs/3orieNTh5JZFPYZXR6 `)
      } else if (message.content.startsWith(`night`)) {
        const taggedUser = message.mentions.users.first();
        message.channel.send(`Good Night ${taggedUser.username}! May your dreams be full of :pizza: ***pizza***! https://gph.is/2ILP1Gd `)
      } else if (message.content.startsWith(`pizza`)) {
        const taggedUser = message.mentions.users.first();
        message.channel.send(`You baked ${taggedUser.username} a :pizza: pizza. Enjoy!`)
      } else if (message.content.startsWith(`joe`)) {
        message.channel.send(`Stop pinging Pizza Joe you :poop:!`)
      } else if (message.content.startsWith(`love`)) {
        message.channel.send(`Here you go sugar :heart:! https://gph.is/g/ZdxNGvP`)
      } else if (message.content.startsWith(` you're a dummy`)) {
        message.channel.send(`No, U! https://i.imgur.com/mUBjN1a.jpg`)
      } else if (message.content.startsWith(` I want pizza`)) {
        message.channel.send(`Me too! https://gph.is/19iU3Rq`)
      } else if (message.content.startsWith(`vote`)) {
        message.channel.send(`You are an amazing pizza lover! https://top.gg/bot/723293726515921027/vote`)
      }


    } catch (error) {
      catchError(error, message);
    }
  }

});

client.login(process.env.TOKEN);

//process.env.TOKEN
