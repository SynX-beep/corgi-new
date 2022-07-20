const {
	MessageEmbed, MessageButton, MessageActionRow
} = require("discord.js")
const config = require(`${process.cwd()}/botconfig/config.json`);
var ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const { handlemsg } = require(`${process.cwd()}/handlers/functions`)
module.exports = {
  name: "invite",
  category: "🔰 Info",
  aliases: ["add"],
  usage: "invite",
  description: "Gives you an Invite link for this Bot",
  type: "bot",
  run: async (client, message, args, cmduser, text, prefix) => {
    
    let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
    try {
      let user = message.mentions.users.first() || client.user;
      if(user) {
        if(!user.bot) return interaction?.reply({ephemeral: true, content: "<:no:833101993668771842> You can't Invite a Normal user! **IT MUST BE A BOT**"})
        let button_public_invite = new MessageButton().setStyle('LINK').setLabel(`Invite`).setURL(`https://discord.com/oauth2/authorize?client_id=${user.id}&permissions=8&scope=bot`)
        let button_invite = new MessageButton().setStyle('LINK').setLabel("Invite " + user.username + "with Slash").setURL(`https://discord.com/api/oauth2/authorize?client_id=${user.id}&permissions=8&scope=bot%20applications.commands`)
        let button_support_dc = new MessageButton().setStyle('LINK').setLabel("Website").setURL("corgi.cf")

        //array of all buttons
        const allbuttons = [new MessageActionRow().addComponents([button_public_invite, button_support_dc, button_invite])]
        message.reply({ 
          embeds: [new MessageEmbed()
            .setColor(ee.color)
            .setTitle(`Invite: __**${user.tag}**__`)
            .setDescription(`||[*Click here for an Invitelink without Slash Commands*](https://discord.com/api/oauth2/authorize?client_id=${user.id}&permissions=8&scope=bot)||`)
            .setURL(`https://discord.com/api/oauth2/authorize?client_id=${user.id}&permissions=8&scope=bot%20applications.commands`)
            .setFooter(client.getFooter(`${user.username} | powered by corgi.cf`, "https://cdn.discordapp.com/avatars/934903628832059422/726bef0b2d795128f15b65f16e24071b.png"))],
          components: allbuttons
        });
      }
    } catch (e) {
      console.log(String(e.stack).grey.bgRed)
      return message.reply({embeds: [new MessageEmbed()
        .setColor(es.wrongcolor)
        .setFooter(client.getFooter(es))
        .setTitle(client.la[ls].common.erroroccur)
        .setDescription(eval(client.la[ls]["cmds"]["info"]["color"]["variable2"]))
      ]});
    }
  }
}
/**
 * @INFO
 * Bot Coded by S7NX#6969 | https://discord.gg/milrato
 * @INFO
 * Work for Milrato Development | https://corgi.cf
 * @INFO
 * Please mention him / Milrato Development, when using this Code!
 * @INFO
 */
