process.title = "Emier™ Discord Bot | Open source bot.";

const Commando = require("discord.js");
const client = new Commando.Client({
  disableEveryone: true,
  settings: "./settings.json",
  disabledEvents: [
    "TYPING_START",
    "TYPING_STOP",
    "RELATIONSHIP_ADD",
    "RELATIONSHIP_REMOVE"
  ],
  owner: "./settings.json".ownerID,
  github: "https://github.com/faultyx/Emierance",
  commandPrefix: "e-",
  invite: "https://discord.gg/6RwDF5Q",
  unknownCommandResponse: false
});

const fs = require("fs");
const chalk = require("chalk");
const path = require("path");

fs.readdir("./events/", (err, files) => {
    if (err) console.log(err);
    files.forEach(file => {
        let eventFile = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, (...args) => eventFile.run(client, ...args));
    });
});

const settings = require("./settings.json");

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

.registerDefaultTypes()
.registerGroups([
  ["utility", "Utility"],
  ["fun", "Fun"],
  ["games", "Games"],
  ["nsfw", "NSFW"],
  ["info", "Info"],
  ["search", "Search"],
  ["dbl", "DBL"],
  ["owner", "Owner"],
  ["staff", "Staff"]
])
.registerCommandsIn(path.join(__dirname, "commands"));
