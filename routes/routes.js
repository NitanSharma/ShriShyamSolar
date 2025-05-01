const express = require("express");
const router = express.Router();
const {body} = require("express-validator");
const registerController = require('../controllers/register.controller');

router.get("/" , (req,res) => {
    res.render("home.ejs");
})

router.post("/register" , 
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('contact').isMobilePhone().withMessage('Valid contact number is required'),
        body('city').notEmpty().withMessage('City is required'),
        body('requirement').notEmpty().withMessage('Requirement is required'),
        body('bill').isNumeric().withMessage('Bill must be a number'),
        body('email').isEmail().withMessage('Valid email is required'),
        body('msg').notEmpty().withMessage('Message is required')
    ]
    , registerController );

router.get("/gallery", (req,res) => {
    res.render("gallery.ejs");
})
router.get("/our-services" , (req,res) => {
    res.render("services.ejs");
})
router.get("/contact-us", (req, res) => {
    res.render("contact-us.ejs");
})

module.exports = router;