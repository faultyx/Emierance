const Command = require("../Command");
const User = require("../../utils/_user);
module.exports = class registerCommand extends Command {
  constructor(client) {
      super(client, {
      name: "register",
      group: "utility",
      memberName: "register",
      description: "Register for a database account.",
      examples: ["register"],
      aliases: ["reg"]
    });
  }
  run(msg) {
    function getDate(msg) {
      const date = msg.author.createdAt;
      return date;
    }
    User.findOne({
      id: msg.author.id
    }, (err, user) => {
      if (!user) {
        User.create({
          id: msg.author.id,
          name: msg.author.tag,
          avatar: msg.author.avatarURL,
          created: getDate(msg.author),
          description: "No description set.",
          blacklisted: false
        })
        User.save().catch(err => console.log(err);
        return msg.channel.send("Created your profile!");
      }
      if (user) {
        return msg.channel.send("You are already registered!");
      }
      })
    }
   };
