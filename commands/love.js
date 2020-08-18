module.exports = {
  name: 'love',
  description: 'display love',
  execute(message, args){
    const responses = [`Here you go sugar ❤️! https://gph.is/g/ZdxNGvP`,`What about this beauty 🥰? https://giphy.com/gifs/mzCaF5hyBS77i`,`Love for pizza can be hypnotizing 😵 https://giphy.com/gifs/3osxYBdM2Hl6PXTwRi`,`Pizza brings us all together 👨‍👩‍👧‍👦! https://giphy.com/gifs/l0MYLKyHXiWknu6L6`,`Just imagine the yummy taste 🤤 https://giphy.com/gifs/l0MYB44WrDc0K4wGk`,`I hope someone loves you as much as we love pizza 😍 https://giphy.com/gifs/5Ynni4pZUNrfJA1Rob`,`Here is a cute puss with a pizza mustache 🐱 https://giphy.com/gifs/3osxYpRxjzvPOtwfF6`,`You've been very good lately ${message.author}. Have a slice of joy 🥰 https://giphy.com/gifs/DOlsI4bO3N9zW`];
    const respond = () => responses[Math.floor(Math.random() * responses.length)]
    message.channel.send(respond());
  }
}
