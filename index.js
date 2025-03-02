const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");


app.set("view engine" , "ejs");// for views folder
app.set("views", path.join(__dirname, "/views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));// for public folder


main().then(() => {console.log("Connected to DB")}).catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/shreeshyam');
}

app.get("/" , (req,res) => {
    res.render("home.ejs");
})
app.get("/about-us", (req,res) => {
    res.render("aboutUs");
})
app.get("/gallery", (req,res) => {
    res.render("gallery.ejs");
})
app.get("/blogs", (req,res) => {
    res.render("blogs.ejs");
})
app.get("/contact-us", (req,res) => {
    res.render("contactUs.ejs");
})

app.listen(3000, () => {
    console.log("app is listening on port 3000");
})





