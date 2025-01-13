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

const wrapAsync=require("./utils/wrapAsync.js");
const ExpressError=require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const{isLoggedIn, isOwner,validateListing,saveRedirectUrl}=require("./middleware.js");

const app = express();
const path = require("path");
const methodOverride = require("method-override");
const ejsMate= require("ejs-mate");
const User = require("./models/user.js");



app.use(express.json());

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));


const MONGO_URL = "mongodb://127.0.0.1:27017/chat";

main().then(()=>{
    console.log("Connected to MongoDB");
}).catch(err=>{
     console.log(err);
});

async function main(){
     await mongoose.connect(MONGO_URL);
};


const store= MongoStore.create({
    mongoUrl:MONGO_URL,
    crypto:{
       secret: process.env.SECRET,
    },
    touchAfter:24*3200,

})

store.on("error",()=>{
    console.log(err);

});

const sessionOptions={
    store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie: {
        expires:Date.now() +7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true,  
    },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currentUser=req.user;
    next();
});

app.get('/signup', (req, res)=>{
    res.render("users/signup.ejs");
});

app.post('/signup', async (req, res) => {
   
        try{
            let{username,email, password}=req.body;
            const newUser= new User({email,username});
           const registerUser=await User.register(newUser,password);
           console.log(registerUser);
           req.login(registerUser,(err)=>{
              if(err){
                return next(err);
              }
              req.flash("success", "Welcome to HackChat");
              res.redirect("/chat");
           });
        
        }catch(e){
            req.flash("error", e.message);
            res.redirect("/signup");
        }
});

app.get('/login', (req, res)=>{
    res.render("users/login.ejs");
});

app.post('/login',saveRedirectUrl,passport.authenticate("local",{failureRedirect:"/login",failureFlash:true}),async(req, res)=>{
    req.flash("success","welcome to HackChat");
    let redirectUrl=res.locals.redirectUrl||"/chat";
    res.redirect(redirectUrl);
})

app.get('/logout', (req, res) => {
    req.logout((err)=>{
        if(err){
         return next(err);
        }
        req.flash("success","Logged out successfully");
        res.redirect("/chat");
      });
});


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
app.get("/chat/hackathon/new",isLoggedIn,async(req,res)=>{
    res.render("chating/newHackathon");
});
app.post("/chat/hackathon",isLoggedIn,validateListing,wrapAsync,async(req,res)=>{
    let url=req.file.path;
    let filename=req.file.filename;

    const newHackathon = new Hackathon(req.body.listing);
    newHackathon.owner = req.user._id;
    newHackathon.image={url,filename};
    await newHackathon.save();
    req.flash("success", "New Listing created");
     res.redirect("/chat/hackathon");
})
//Edit Route
app.get("/chat/hackathon/:id/edit",isLoggedIn,async (req, res) => {
    let { id } = req.params;
    const hackathon = await Hackathon.findById(id);
    if(!hackathon){
        req.flash("error", " Listing not exist!");
        res.redirect("/chat/hackathon");
    }
    console.log(hackathon)
    res.render("chating/editHackathon", { hackathon });
  });
  
  //Update Route
  app.put("/chat/hackathon/:id",isLoggedIn,validateListing, async (req, res) => {
    let { id } = req.params;
    await Hackathon.findByIdAndUpdate(id, { ...req.body.hackathon });
    req.flash("success", "Event Updated Success");
    res.redirect("/chat/hackathon");
  });

//Delete Route
app.delete("/chat/hackathon/:id",isLoggedIn,isOwner,wrapAsync, async (req, res) => {
    let { id } = req.params;
    let deletedHackathon = await Hackathon.findByIdAndDelete(id);
    console.log(deletedHackathon);
    req.flash("success", " Listing Deleted");
    res.redirect("/chat/hackathon");
  });
  
  app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"page not found"));
 });
 app.use((err,req,res,next)=>{
     let{statusCode=500,message="something went wrong"}= err;
     res.status(400).render("error.ejs",{message});
 //    console.log(err);
     // res.status(statusCode).send(message);
    
 });


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));