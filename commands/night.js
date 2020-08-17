module.exports = {
  name: 'night',
  description: 'display night',
  execute(message, args){
    const taggedUser = message.mentions.users.first();
    message.channel.send(`Good Night ${taggedUser}! May your dreams be full of 🍕***pizza***! https://gph.is/2ILP1Gd `)
  }
}
