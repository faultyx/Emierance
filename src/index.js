const Discord = require("discord.js");
const chalk = require("chalk");

const fs = require("fs");

fs.readdir("./events/", (err, files) => {
    if (err) console.log(err);
    files.forEach(file => {
        let eventFile = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, (...args) => eventFile.run(client, ...args));
    });
});

const settings = require("./settings");

const client = new Discord.Client({
  disableEveryone: true,
  github: "https://github.com/faultyx/Emierance",
  settings: "./settings",
  owner: settings.ownerID
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

const DiscordBotsList = require("dblapi.js");
const dbl = new DiscordBotsList(settings.dbl, client);

dbl.on("posted", () => {
  console.log(chalk`{green [DBL]}: {white Posted Guild Count.}`);
});

dbl.on("error", e => {
 console.log(chalk`{red [ERROR]}: {white ${e}}`);
});

if (!settings.token || settings.token == "" || settings.token == 0) {
  console.log(chalk`{red Please check that you have edited} {yellow settings.json} {red correctly.} {blue Token} {red is missing.}`);
} else {
  if (!settings.ownerID || settings.ownerID == "" || settings.ownerID == 0) {
    console.log(chalk`{red Please check that you have edited} {yellow settings.json} {red correctly.} {blue Owner ID} {red are missing.}`);
  } else {
    if (!settings.prefix || settings.prefix == "" || settings.prefix == 0) {
      console.log(chalk`{red Please check that you have edited} {yellow settings.json} {red correctly.} {blue Prefix} {red is missing.}`);
    }
  }
}

client.login(settings.token)
.catch(console.error);
