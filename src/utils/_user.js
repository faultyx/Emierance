const mongoose = require("mongoose");

const User = new mongoose.Schema({
  id: String,
  name: String,
  avatar: String,
  created: Date,
  description: String,
  blacklisted: Boolean
})

module.exports = mongoose.model("User", User);
