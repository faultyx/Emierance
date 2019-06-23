const chalk = require("chalk");
module.exports = (client, guild) => {
console.log(chalk.grey("[DISCONNECTED]:") + ` > ${new Date()}`);
};
