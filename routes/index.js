const express = require('express');
const router = express.Router();

const { index } = require('../controllers/index');

router.route('/')
  .get(index)

module.exports = router;
