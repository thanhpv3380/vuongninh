const router = require('express').Router();

const { asyncResponse } = require('../middlewares/async');
const userController = require('../controllers/user');
const userValidate = require('../validations/user');

router.post('/subscribe', userValidate.subscribe, asyncResponse(userController.subscribe));

module.exports = router;
