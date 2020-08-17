module.exports = {
  name: 'joe',
  description: 'display joe',
  execute(message, args){
    const responses = [`What's up you beautiful bastard?`,`Hello ${message.author}, how can I help?`,`Is it me that you want ${message.author}?`,`${message.author} stop pinging Pizza Joe 🍕 you 💩!`,`May the 🧀cheese be with you, young ${message.author}`];
    const respond = () => responses[Math.floor(Math.random() * responses.length)]
    message.channel.send(respond());
  }
}
