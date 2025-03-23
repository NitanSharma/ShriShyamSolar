const { required } = require("joi");
const mongoose = require("mongoose");

// schema
const clientSchema = mongoose.Schema({
    name :{
        type : String,
        required : true
    }
   ,
    contact: {
        type : String,
        required : true,
    } ,
    city : {
        type : String,
        required : true,
    },
    requirement : {
        type : String,
        required : true,
    } ,
    bill : {
        type : String,
        required : true,
    },
    email : {
        type :String,
        required :true,
    },
    msg : {
        type : String,
    } ,
})

// modle
 module.exports = mongoose.model("Client" , clientSchema);

