const Joi = require("joi");

const store = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    location: Joi.string().required(),
    products: Joi.array().items(Joi.string()).required(),
    established_date: Joi.date(),
  }),
};

module.exports = { store };
