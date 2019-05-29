const Command = require("../Command");
const request = require("request");
const Discord = require("discord.js");
module.exports = class adviceCommand extends Command {
  constructor(client) {
      super(client, {
      name: "advice",
      group: "fun",
      memberName: "advice",
      description: "Get a random advice.",
      examples: ["advice"],
      aliases: []
    });
  }
  async run(msg) {
    let url = "http://api.adviceslip.com/advice";
    request(url, function (err, res, body) {
      try {
        let text = JSON.parse(body);
        const embed = new Discord.RichEmbed()
        .setColor("BLUE")
        .setTimestamp()
        .setTitle("Advice:")
        .setFooter(msg.author.tag, msg.author.avatarURL)
        .setDescription(`**${text.slip.advice}**`);
        return msg.channel.send({embed});
      } catch (e) {
        return msg.channel.send("Oops! An error occured!");
      }
    });
}
};
