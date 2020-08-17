module.exports = {
  name: 'morning',
  description: 'display morning',
  execute(message, args){
    const taggedUser = message.mentions.users.first();
    message.channel.send(`Good Morning ${taggedUser}! You should have some 🍕***pizza***! https://giphy.com/gifs/3orieNTh5JZFPYZXR6 `)
  }
}
