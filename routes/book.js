const express = require('express');
const router = express.Router();

const { allBooks, newBook, deleteBook } = require('../controllers/book');
const { authenticateUser } = require('../middlewares/auth');

router.route('/')
  .get(authenticateUser, allBooks)

router.route('/new')
  .post(authenticateUser, newBook)

router.route('/delete/:id')
  .delete(authenticateUser, deleteBook)

module.exports = router;
