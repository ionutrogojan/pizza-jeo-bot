const Discord = require("discord.js");

module.exports = {
  name: 'update',
  description: 'display update',
  execute(message, args){
    const helpEmbed = new Discord.MessageEmbed()
      .setColor('#fe9801')
      .setTitle('Pizza Joe version update')
      //.setURL('https://www.youtube.com/watch?v=lpvT-Fciu-4')
      .setDescription("**CURRENT VERSION UPDATE**\n \n + Optimized commands\n + Added Pizza Joe to top.gg\n + `p!update` - useful information\n \n - `p!pizza?` -non required anymore\n - `Joe you're a dummy` - Pizza Joe's feelings were hurt\n \n *Thank you everyone who supports and invited Pizza Joe to their servers, it means a lot. New features are comming in the next update.*\n \n **USEFUL LINKS**\n [INVITE ME](https://discord.com/oauth2/authorize?client_id=723293726515921027&permissions=412736&scope=bot) | [SUPPORT](https://discord.com/invite/tEaZ2c7)")
      .setFooter(`Pizza Joe is the best!`)
    message.channel.send(helpEmbed);
  }
}
