module.exports = {
  name: 'throw',
  description: 'display throw',
  execute(message, args){
    const taggedUser = message.mentions.users.first();
    message.channel.send(`Pizza Joe :pizza: did ${message.author.username} a favour and threw pizza in ${taggedUser.username}'s face! Your move :clown: ${taggedUser.username}.`)
  }
}
