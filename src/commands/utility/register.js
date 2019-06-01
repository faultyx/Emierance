const Command = require("../Command");
const User = require("../../utils/_user);
module.exports = class pingCommand extends Command {
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
    User.findOne({
      id: message.author.id
    }, (err, user) => {
      if (!user) {
        User.create({
          id: msg.author.id,
          name: msg.author.tag,
          avatar: msg.author.avatarURL,
          created: msg.author.createdAt.getTime(),
          blacklisted: false
        })
        User.save().catch(err => console.log(err);
         return msg.channel.send                 
