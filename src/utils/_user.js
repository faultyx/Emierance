const mongoose = require("mongoose");

const User = new mongoose.Schema({
  id: String,
  name: String,
  avatar: String,
  created: String,
  description: String,
  blacklisted: Boolean
})

module.exports = mongoose.model("User", User);
