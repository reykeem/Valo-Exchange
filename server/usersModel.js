const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const SALT_WORK_FACTOR = 10
// const bcrypt

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
