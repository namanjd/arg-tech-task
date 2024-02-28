const { Books } = require('../models');

const getAllBooks = async (name = undefined, author = undefined, publisher = undefined) => {
  try {
    let where = {}
    if (name) {
      where['name'] = name
    }
    if (author) {
      where['author'] = author
    }
    if (publisher) {
      where['publisher'] = publisher
    }
    const books = await Books.findAll({ where });
    return books
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

const createNewBook = async (params) => {
  try {
    const book = await Books.create(params);
    return book
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

const deleteBookById = async (id) => {
  try {
    const book = await Books.destroy({
      where: { id }
    });
    return book
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

module.exports = {
  getAllBooks,
  createNewBook,
  deleteBookById,
}
