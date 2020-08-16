const Discord = require("discord.js");

module.exports = {
  name: 'update',
  description: 'display update',
  execute(message, args){
    const helpEmbed = new Discord.MessageEmbed()
      .setColor('#fe9801')
      .setTitle('Pizza Joe version update')
      //.setURL('https://www.youtube.com/watch?v=lpvT-Fciu-4')
      .setDescription("**CURRENT VERSION UPDATE**\n \n This is a small update that improves Pizza Joe :pizza: \n The update is aimed to the known issue that allowed Pizza Joe :pizza: to respond to commands without his prefix.\n \n + `p!throw` - throw pizza in other's faces\n \n - `p!Iwantpizza?` - farewell to your wishes\n \n **ROADMAP**\n + pizza count - check how many pizzas you baked\n + Further optimisation of current and future commands\n \n *Thank you everyone who supports and invited Pizza Joe to their servers, it means a lot. New features are comming in the next update.*\n \n **USEFUL LINKS**\n [INVITE ME](https://discord.com/oauth2/authorize?client_id=723293726515921027&permissions=412736&scope=bot) | [SUPPORT](https://discord.com/invite/tEaZ2c7)")
      .setFooter(`Pizza Joe is the best!`)
    message.channel.send(helpEmbed);
  }
}
