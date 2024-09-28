const { Joi } = require('express-validation');

const { customValidate } = require('./common');

const subscribe = {
  body: Joi.object({
    email: Joi.string().trim().required(),
  }),
};


module.exports = {
  subscribe: customValidate(subscribe, { keyByField: true }),
};
