//Validation
const Joi = require('@hapi/joi')

//Login validation
const loginValidation = (data) => {
    const schema = Joi.object({ 
        email: Joi.string() .min(6) .required() .email(),
        password: Joi.string()  .min(6) .required() 
    });       
    return schema.validate(data)
}

//Logout validation
const logoutValidation = (data) => {
    const schema = Joi.object({ 
        accesstoken: Joi.string() .min(6) .required()
    });       
    return schema.validate(data)
}

//Token validation
const accesstokenValidation = (data) => {
    const schema = Joi.object({ 
        accesstoken: Joi.string() .min(6) .required()
    });       
    return schema.validate(data)
}

module.exports.loginValidation = loginValidation;
module.exports.logoutValidation = logoutValidation;
module.exports.accesstokenValidation = accesstokenValidation;