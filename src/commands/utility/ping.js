const Command = require("../Command");
const Discord = require("discord.js");
module.exports = class pingCommand extends Command {
  constructor(client) {
      super(client, {
      name: "ping",
      group: "utility",
      memberName: "ping",
      description: "See the message & api latency.",
      examples: ["ping"],
      aliases: []
    });
  }
  async run(msg) {
    const embed = new Discord.RichEmbed()
    .setColor(null)
    .setTitle("Ping?");
    let message = await msg.channel.send(embed);
    message.edit(new Discord.RichEmbed()
    .setColor("BLUE")
    .setTimestamp()
    .setFooter(msg.author.tag, msg.author.displayAvatarURL)
    .setTitle("🏓 Pong!")
    .addField("Message:", `\`${message.createdTimestamp - msg.createdTimestamp}ms\``, true)
    .addField("API:", `\`${Math.round(msg.client.ping)}ms\``, true));
  }
};
