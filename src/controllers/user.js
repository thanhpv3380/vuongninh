const userService = require('../services/user');

const subscribe = async (req) => userService.subscribe(req.body, req.requestId);

module.exports = {
  subscribe,
};
