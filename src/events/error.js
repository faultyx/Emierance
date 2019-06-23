const chalk = require("chalk");
module.exports.run = error => {
console.log(chalk.red("[ERROR]:") + `\n${JSON.stringify(error));
};
