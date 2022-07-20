module.exports = {
    name: 'analyze',
    description: 'analyze toxicity in a message'
};
const emoji = require(`${process.cwd()}/botconfig/emojis.json`)
const { PerspectiveAPI } = require(`${process.cwd()}/botconfig/config.json`);
const Perspective = require('perspective-api-client');
const Discord = require('discord.js')
const perspective = new Perspective({ apiKey: PerspectiveAPI });

module.exports.run = async (client, message, args) => {
    try {
        const text = String(message.content).slice(10, message.content.length);
        const result = await perspective.analyze(text);
        let obj = JSON.parse(JSON.stringify(result));
        console.log(JSON.stringify(result));
        const embed = new Discord.MessageEmbed()
            .setColor("BLUE")
          .setAuthor({ name: `Toxicity Analyzer`})
            .setDescription(` **Your Message had a toxicity Level of** \`\`\`${obj.attributeScores.TOXICITY.summaryScore.value * 100}%\`\`\``)
      .setFooter({ text: `Requested by ${message.author.username}`, iconURL: message.author.displayAvatarURL({ dynamic: true, format: "png", size: 2048 }) })
    .setTimestamp();
       message.channel.send({embeds: [embed]})

    } catch (e) {
        message.reply(`I'm not sure what that message meant.`)
    }
}



