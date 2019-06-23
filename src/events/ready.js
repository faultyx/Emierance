module.exports.run = client => {

   const Discord = require("discord.js");
   const settings = require("../settings");
   setInterval(function() {

   let status = settings.game.name[Math.floor(Math.random() * settings.game.name.length)];

   client.user.setPresence({
     status: settings.game.status ? settings.game.status : "online",
     game: {
       name: status ? status : "e- | :3",
       type: settings.game.type ? settings.game.type : "PLAYING",
       url: settings.game.url ? settings.game.url: null
     }
   });

   }, settings.game.statusInterval ? settings.game.statusInterval : 15000);
   const chalk = require("chalk");
   console.log(chalk.green("[READY]:"));

    if (client.user.id === "500338411459051521") {
    let channel = client.channels.get("582573816975196170");
    if (!channel) return;
    const embed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTimestamp()
    .setTitle("Restart")
    .setThumbnail(client.user.displayAvatarURL)
    .setDescription("Back online and ready! :3");
    channel.send(embed);
  };

};
