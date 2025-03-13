if(process.env.NODE_ENV != "production"){
    require('dotenv').config()
}
// console.log(process.env.ATLASDB_URL)

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

// let dbUrl = process.env.ATLASDB_URL;
main().then(() => {console.log("Connected to DB")}).catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/shreeshyam');
}

app.get("/" , (req,res) => {
    res.render("home.ejs");
})
app.get("/register" , (req,res) => {
    res.send("you are register");
})
app.post("/register", (req,res) => {
            let {name , email , contact , city , requirement , msg } = req.body;
            let newClient =  new Client({name , email , contact , city , requirement , msg});
            newClient.save().then((res) => {console.log(res)}).catch((err) => {console.log(err)});
            res.redirect("/");       
    })

app.listen(8080, () => {
    console.log("app is listening on port 8080");
})





// app.get("/about-us", (req,res) => {
//     res.render("aboutUs");
// })
// app.get("/gallery", (req,res) => {
//     res.render("gallery.ejs");
// })
// app.get("/blogs", (req,res) => {
//     res.render("blogs.ejs");
// })
// app.get("/contact-us", (req,res) => {
//     res.render("contactUs.ejs");
// })