module.exports = {
  name: 'pizza',
  description: 'display pizza',
  execute(message, args){
    const taggedUser = message.mentions.users.first();
    message.channel.send(`You baked ${taggedUser.username} a :pizza: pizza. Enjoy!`)
  }
}
