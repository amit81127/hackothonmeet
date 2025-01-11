const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hackathonSchema= new Schema({
   title:{
     type: String,
     required: true,
     unique: true
   },
   description: String,
   image: {
    url: String,
    // other properties if needed
},
  entryPrice: Number,
  location: String,
  registration:{
    type: String,
    required: true,
    unique: true
  }
   
})
const Hackathon = mongoose.model("Hackathon", hackathonSchema);
module.exports =Hackathon;


