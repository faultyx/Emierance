const chalk = require("chalk");
module.exports = () => {
console.log(chalk.grey("[RECONNECTING]:") + ` > ${new Date()}`);
};
