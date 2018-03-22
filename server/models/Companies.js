var mongoose = require("mongoose"),
    Schema = mongoose.Schema

var CompanySchema = new Schema({
  name : {type: String, unique: true},
  address: String,
  phoneNumber: String,
  supplyFor: String,
  userId: [Schema.Types.ObjectId],
  npwp: String,
  aktaNotaris: String,
  skd: String,
  skMenKumHam : String,
  siup: String,
  tdp: String,
  pkp: String
})


var Company = mongoose.model("Company", CompanySchema)

module.exports = Company
