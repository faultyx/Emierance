const randomPuppy = require("random-puppy");
const snekfetch = require("snekfetch");
const Command = require("../Command");
const Discord = require("discord.js");
module.exports = class fourkCommand extends Command {
  constructor(client) {
      super(client, {
      name: "4k",
      group: "nsfw",
      memberName: "4k",
      description: "Get a nsfw 4k image.",
      examples: ["4k"],
      aliases: ["fourk"]
    });
  }
  async run(msg) {

    if (!msg.channel.nsfw) return msg.reply("This channel is not a nsfw channel!");

    var keywords = [
      "NSFW_Wallpapers",
      "SexyWallpapers",
      "HighResNSFW",
      "nsfw_hd",
      "UHDnsfw"
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
