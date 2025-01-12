const Joi = require('joi');



module.exports.hackathonSchema=Joi.object({
    hackathon:Joi.object({
        title:Joi.string().required(),
        description:Joi.string().required(),
        location:Joi.string().required(),
        registration:Joi.string().required(),
        entryPrice:Joi.number().required().min(0),
        image:Joi.string().allow("",null),

    }).required(),
});
