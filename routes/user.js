const express = require('express');
const router = express.Router();

const { signUp, login } = require('../controllers/user');
const { checkUserExist } = require('../middlewares/auth');

router.route('/')
  .post(signUp)

router.route('/login')
  .post(checkUserExist, login)

module.exports = router;
