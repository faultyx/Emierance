const randomPuppy = require("random-puppy");
const snekfetch = require("snekfetch");
const Command = require("../Command");
const Discord = require("discord.js");
module.exports = class snapchatCommand extends Command {
  constructor(client) {
      super(client, {
      name: "snapchat",
      group: "nsfw",
      memberName: "snapchat",
      description: "Get a nsfw snapchat image.",
      examples: ["snapchat"],
      aliases: ["sc"]
    });
  }
  async run(msg) {

    if (!msg.channel.nsfw) return msg.reply("This channel is not a nsfw channel!");

    var keywords = [
      "pussy",
      "NSFW_Snapchat",
      "snapchatgw"
    ];
    var result = keywords[Math.floor(Math.random() * keywords.length)];
    try {
    randomPuppy(result).then(async url => {
      const embed = new Discord.RichEmbed()
      .setColor("WHITE")
      .setTimestamp()
      .setFooter(msg.author.tag, msg.author.avatarURL)
      .setImage(url);
      let message = await msg.channel.send({embed});
      const r = message.react("❌");
      const collector = message.createReactionCollector((reaction, user) => user.id === msg.author.id, { time: 10000 });
      collector.on("collect", reac => {
        if (reac.emoji.name === "❌") {
          message.delete();
        }
      });
      collector.on("end", () => {
        return null;
      });
    });
  } catch (e) {
    return msg.channel.send("Oops! An error occured!");
  }
}
};
