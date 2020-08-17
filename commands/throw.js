module.exports = {
  name: 'throw',
  description: 'display throw',
  execute(message, args){
    const taggedUser = message.mentions.users.first();
    message.channel.send(`Pizza Joe 🍕 did ${message.author} a favour and threw pizza in ${taggedUser}'s 😵face! That is 1 more to your collection. Your move 🤡${taggedUser}.`)
  }
}
