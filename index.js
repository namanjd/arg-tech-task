require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const db = require('./models');

const indexRouter = require('./routes');
const userRouter = require('./routes/user');
const booksRouter = require('./routes/book');

const PORT = process.env.PORT || 3000;
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', indexRouter)
app.use('/user', userRouter)
app.use('/books', booksRouter)

db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
}).catch((e) => {
  console.log(`Error: ${e.message}`)
});
