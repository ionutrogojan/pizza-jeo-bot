const Discord = require("discord.js");

module.exports = {
  name: 'help',
  description: 'display help',
  execute(message, args){
    const helpEmbed = new Discord.MessageEmbed()
      .setColor('#fe9801')
      .setTitle('Pizza Joe commands list')
      .setURL('https://www.youtube.com/watch?v=lpvT-Fciu-4')
      .setDescription("🍕 **HERE ARE THE AVAILABLE COMMANDS** 🍕 \nPizza Joe will answer to `p!`\n \n `p!help` - display commands list\n \n `p!vote` - Vote link to support Pizza Joe\n `p!update` - Display the current version features and changes\n `p!morning @user` - Pizza Joe will say Morning\n`p!night @user` - Pizza Joe will say Good Night\n `p!pizza @user` - Bake someone a pizza (requires @user)\n `p!joe` - Ping Pizza Joe\n `p!love` - Pizza Joe will love you back\n `p!throw` - Pizza Joe will throw pizza at someone (requires @user)\n \n🥤 **USEFUL LINKS** 🥤\n[INVITE ME](https://discord.com/oauth2/authorize?client_id=723293726515921027&permissions=412736&scope=bot) | [SUPPORT](https://discord.com/invite/tEaZ2c7)")
      .setFooter(`Pizza Joe is the best!`)
    message.channel.send(helpEmbed);
  }
}
