const { getAllBooks, createNewBook, deleteBookById } = require('../services/book');

const allBooks = async (req, res) => {
  try {
    const { name, author, publisher } = req.query
    const books = await getAllBooks(name, author, publisher)
    if (books.length) {
      res.json(books)
    } else {
      res.json('No books found')
    }
  } catch (error) {
    console.log(error)
    res.json(error.message)
  }
}

const newBook = async (req, res) => {
  try {
    const { name, publisher, author, description, pages } = req.body;
    const created = await createNewBook({ name, publisher, author, description, pages })
    res.json(created)
  } catch (error) {
    console.log(error)
    res.json(error.message)
  }
}

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await deleteBookById(id)
    if (deleted) {
      res.json('Book deleted')
    } else {
      res.json('Book not deleted')
    }
  } catch (error) {
    console.log(error)
    res.json(error.message)
  }
}

module.exports = {
  allBooks,
  newBook,
  deleteBook
}