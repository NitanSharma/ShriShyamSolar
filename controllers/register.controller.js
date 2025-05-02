const {validationResult} = require("express-validator");
const Client = require("../models/client")

module.exports.registerController = (req,res) => {
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
}

