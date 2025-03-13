const Joi = require('joi'); // npm package use for server side schema validations

module.exports.clientSchema = Joi.object({
    client : Joi.object({
        name : Joi.string().required(),
        email : Joi.string().required()   ,
        contact: Joi.number().required(),
        requirement :Joi.string().required() ,
        msg :Joi.string().required() ,      
    }).required()
})