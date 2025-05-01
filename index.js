if(process.env.NODE_ENV != "production"){
    require('dotenv').config()
}

const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");
const connectToDB = require('./db/connection.js');
const router = require('./routes/routes.js');


app.set("view engine" , "ejs");// for views folder
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));// for public folder
app.use(express.urlencoded({extended : true}));

connectToDB();

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));// express session using


app.use(flash());

app.use((req,res,next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
})

app.use("/" , router);

let PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
})
