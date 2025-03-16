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

app.set("view engine" , "ejs");// for views folder
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));// for public folder
app.use(express.urlencoded({extended : true}));

let dbUrl = process.env.ATLASDB_URL;
// mongodb://127.0.0.1:27017/shreeshyam
main().then(() => {console.log("Connected to DB")}).catch(err => console.log(err));
async function main() {
    await mongoose.connect(dbUrl);
}
app.get("/" , (req,res) => {
    res.render("home.ejs");
})
app.get("/register" , (req,res) => {
    res.send("hello");
})
app.post("/register" , (req,res) => {
    console.log(req.body);
    let {name , contact , city , requirement ,bill, msg } = req.body;
    let newClient =  new Client({name ,contact , city , requirement , bill, msg});
    newClient.save().then((res) => {console.log(res)}).catch((err) => {console.log(err)});
    res.redirect("/");    
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
