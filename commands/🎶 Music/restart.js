const {
  MessageEmbed
} = require(`discord.js`);
const config = require(`${process.cwd()}/botconfig/config.json`);
const ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const {
  createBar,
  format
} = require(`${process.cwd()}/handlers/functions`);
const { handlemsg } = require(`${process.cwd()}/handlers/functions`);
    module.exports = {
  name: `restart`,
  category: `🎶 Music`,
  aliases: [`replay`],
  description: `Restarts the current song`,
  usage: `restart`,
  parameters: {
    "type": "music",
    "activeplayer": true,
    "check_dj": true,
    "previoussong": false
  },
  type: "song",
  run: async (client, message, args, cmduser, text, prefix, player) => {
    
    let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
    if (!client.settings.get(message.guild.id, "MUSIC")) {
      return message.reply({embeds : [new MessageEmbed()
        .setColor(es.wrongcolor)
        .setFooter(client.getFooter(es))
        .setTitle(client.la[ls].common.disabled.title)
        .setDescription(handlemsg(client.la[ls].common.disabled.description, {prefix: prefix}))
      ]});
    }
    try {
      //seek to 0
      player.seek(0);
      //send informational message
      message.react(emoji?.react.replay_track).catch(()=>{})
      
      message.react("🔃").catch(()=>{})
    } catch (e) {
      console.log(String(e.stack).dim.bgRed)
      return message.reply({embeds : [new MessageEmbed()
        .setColor(es.wrongcolor)

        .setTitle(client.la[ls].common.erroroccur)
        .setDescription(eval(client.la[ls]["cmds"]["music"]["restart"]["variable1"]))
      ]});
    }
  }
};
/**
 * @INFO
 * Bot Coded by S7NX#6966 | https://github?.com/S7NX6966/discord-js-lavalink-Music-Bot-erela-js
 * @INFO
 * Work for corgi Development | https://corgi.eu
 * @INFO
 * Please mention Him / corgi Development, when using this Code!
 * @INFO
 */
