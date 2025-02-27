// import mongoose from '../../node_modules/mongoose';
const  mongoose = require("mongoose")
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  mailId: String,
  password: String,
  age: Number,
  gender: String,
});

module.exports = mongoose.model("User",userSchema);