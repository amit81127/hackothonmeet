const Hackathon=require('./models/hackathon');
const ExpressError=require("./utils/ExpressError.js");
const  {hackathonSchema} = require("./schema.js");

module.exports.isLoggedIn =
  (req, res, next) => {
    
    if(!req.isAuthenticated()) {
      //redirect url
      req.session.redirectUrl=req.originalUrl;
        req.flash("error","you must be logged in to create a event");
        return res.redirect("/login");
    } 
        next();
 };

 module.exports.saveRedirectUrl=(req,res,next) => {
  if(req.session.redirectUrl){
    res.locals.redirectUrl=req.session.redirectUrl;
  }
  next();
 };

 module.exports.isOwner=async(req,res,next) => {
  let { id } = req.params;
  let hackathon = await Hackathon.findById(id);
  
  if (!hackathon) {
    req.flash("error", "Hackathon not found!");
    return res.redirect(`/chat/hackathon`);
  }

  // if (!hackathon.owner(res.locals.currentUser._id)) {
  //   req.flash("error", "You are not authorized to edit this event!");
  //   return res.redirect(`/chat/hackathon`);
  // }
  
  next();
};


 module.exports. validateListing=(req,res,next)=>{
  let {error}=hackathonSchema.validate(req.body);
  console.log(error);  
  if(error){
      let errMsg =error.details.map((el)=>el.message).join(",");
      throw new ExpressError(400,errMsg);
      
  }else{
      next();
  }
};
