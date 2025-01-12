if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const express = require('express');
const mongoose = require('mongoose');
const Hackathon= require('./models/hackathon');
const  {hackathonSchema} = require("./schema.js");
const multer  = require('multer')
const {storage}=require("./cloudConfig.js");
const upload = multer({ storage });
const MongoStore = require('connect-mongo');

const app = express();
const path = require("path");
const methodOverride = require("method-override");
const ejsMate= require("ejs-mate");



app.use(express.json());

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

app.get("/",(req,res)=>{
    res.send('Hello, World!');
});

app.get("/chat",(req,res)=>{
    res.render("chating/main");
})
app.get("/chat/hackathon",async(req,res)=>{
    const allHackathon= await Hackathon.find({});
    res.render("chating/hackathon",{allHackathon});
});
app.get("/chat/hackathon/new",async(req,res)=>{
    res.render("chating/newHackathon");
});
app.post("/chat/hackathon",async(req,res)=>{
    const newHackathon =new Hackathon(req.body.hackathon);
    console.log(newHackathon)
    await newHackathon.save();
     res.redirect("/chat/hackathon");
})


const MONGO_URL = "mongodb://127.0.0.1:27017/chat";

main().then(()=>{
    console.log("Connected to MongoDB");
}).catch(err=>{
     console.log(err);
});

async function main(){
     await mongoose.connect(MONGO_URL);
};


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));