module.exports = {
  name: 'joe',
  description: 'display joe',
  execute(message, args){
    message.channel.send(`${message.author.username} stop pinging Pizza Joe :pizza: you :poop:!`)
  }
}
