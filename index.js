if(process.env.NODE_ENV != "production"){
    require('dotenv').config()
}
console.log( process.env.ATLASDB_URL);
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");
const Client = require("./models/client.js")
const session = require("express-session");
const flash = require("connect-flash");
const {body , validationResult} = require("express-validator");


app.set("view engine" , "ejs");// for views folder
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));// for public folder
app.use(express.urlencoded({extended : true}));

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));// express session using
app.use(flash());

let dbUrl = process.env.ATLASDB_URL;
// let dbUrl =  mongodb://127.0.0.1:27017/shreeshyam
main().then(() => {console.log("Connected to DB")}).catch(err => console.log(err));
async function main() {
    await mongoose.connect(dbUrl);
}

app.use((req,res,next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
})
app.get("/" , (req,res) => {
    res.render("home.ejs");
})
app.get("/register" , (req,res) => {
    res.send("hello");
})
app.post("/register" , 
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('contact').isMobilePhone().withMessage('Valid contact number is required'),
        body('city').notEmpty().withMessage('City is required'),
        body('requirement').notEmpty().withMessage('Requirement is required'),
        body('bill').isNumeric().withMessage('Bill must be a number'),
        body('email').isEmail().withMessage('Valid email is required'),
        body('msg').notEmpty().withMessage('Message is required')
    ]
    ,(req,res) => {

    try {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors : errors.array() });
    }
    console.log(req.body);
    let {name , contact , city , requirement ,bill, email,msg } = req.body;
    let newClient =  new Client({name ,contact , city , requirement , bill, email ,msg});
    newClient.save().then((res) => {console.log(res)}).catch((err) => {console.log(err)});
    req.flash("success" , "Form Submit Successfully.");
    res.redirect("/"); 
        
    } catch (error) {
        req.flash("error" , "Please enter valid data.");
    }

      
})
app.get("/gallery", (req,res) => {
    res.render("gallery.ejs");
})
app.get("/our-services" , (req,res) => {
    res.render("services.ejs");
})
app.get("/contact-us", (req, res) => {
    res.render("contact-us.ejs");
})
app.listen(8080, () => {
    console.log("app is listening on port 8080");
})
