var mongoose = require("mongoose"),
    Schema = mongoose.Schema

var UserSchema = new Schema({
  name : String,
  username: {type: String, unique: true},
  password: {type: String, require: true},
  role: String,
  position: String,
  hp: String,
  company: Schema.Types.ObjectId,
  time : { type : Date, default: Date.now }
})


var User = mongoose.model("User", UserSchema)

module.exports = User
