const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createUser, findUserByEmail } = require('../services/user');
const saltRounds = 10;

function genPassword(plainText) {
  const salt = bcrypt.genSaltSync(saltRounds);
  const encrypted = bcrypt.hashSync(plainText, salt);
  return encrypted
}

function genToken(user) {
  const token = jwt.sign({
    data: user.id
  }, process.env.JWT_SECRET, { expiresIn: 30000 }); // in seconds
  return token
}

const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;
    const encrypted = genPassword(password);
    await createUser({ email, password: encrypted })
    res.json('User created successfully')
  } catch (error) {
    console.log(error)
    res.json(error.message)
  }
}

const login = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await findUserByEmail({ email });
    const jwt = genToken(user);
    res.json(jwt)
  } catch (error) {
    console.log(error)
    res.json(error.message)
  }
}

module.exports = {
  signUp,
  login,
}