const {
	MessageEmbed
} = require("discord.js")
const config = require(`${process.cwd()}/botconfig/config.json`)
var ee = require(`${process.cwd()}/botconfig/embed.json`)
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const { MessageButton, MessageActionRow } = require('discord.js')
const { handlemsg } = require(`${process.cwd()}/handlers/functions`)
module.exports = {
	name: "developer",
	description: "Shows Information about the Developer",
	run: async (client, interaction, cmduser, es, ls, prefix, player, message) => {
		//things u can directly access in an interaction!
		const { member, channelId, guildId, applicationId, commandName, deferred, replied, ephemeral, options, id, createdTimestamp } = interaction; 
		const { guild } = member;
		
		try {	
			let button_public_invite = new MessageButton().setStyle('LINK').setLabel(client.la[ls].cmds.info.developer.buttons.invite).setURL("https://discord.com/api/oauth2/authorize?client_id=734513783338434591&permissions=8&scope=bot%20applications.commands")
			let button_support_dc = new MessageButton().setStyle('LINK').setLabel(client.la[ls].cmds.info.developer.buttons.dc).setURL("https://discord.gg/corgi")
			let button_invite = new MessageButton().setStyle('LINK').setLabel(client.la[ls].cmds.info.developer.buttons.botlist).setURL(`https://botlist.corgi.eu`)
			const allbuttons = [new MessageActionRow().addComponents([button_public_invite, button_support_dc, button_invite])]
			interaction?.reply({embeds: [new MessageEmbed()
				.setColor(es.color)
				.setFooter(client.getFooter(es))
				.setTimestamp()
				.setThumbnail("https://cdn.discordapp.com/avatars/760227928843223060/df7b527a701d9a1ab6d73213576fe295.webp?size=1024")
				.setTitle(client.la[ls].cmds.info.developer.title)
				.setURL("https://corgi.eu")
				.setDescription(client.la[ls].cmds.info.developer.description)],
components: allbuttons
			}).catch(error => console.log(error));
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
 * Bot Coded by S7NX#6966 | https://discord.gg/corgi
 * @INFO
 * Work for corgi Development | https://corgi.eu
 * @INFO
 * Please mention him / corgi Development, when using this Code!
 * @INFO
 */
