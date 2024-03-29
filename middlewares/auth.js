const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { findUserByEmail } = require("../services/user");

const checkUserExist = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const checkUser = await findUserByEmail({ email });
    if (checkUser) {
      const encrypted = checkUser.password;
      const checkPass = bcrypt.compareSync(password, encrypted);
      if (checkPass) {
        next();
      } else {
        res.json('Wrong password')
      }
    } else {
      res.json('User not found')
    }
  } catch (error) {
    console.log(error)
    res.json(error.message)
  }
}

const authenticateUser = async (req, res, next) => {
  try {
    const { authorization } = req.headers
    if (authorization) {
      const decode = jwt.verify(authorization.split(' ')[1], process.env.JWT_SECRET)
      if (decode) {
        next()
      }
    } else {
      res.json('Please provide jwt token')
    }
  } catch (error) {
    console.log(error)
    res.json(error.message)
  }
}

module.exports = {
  checkUserExist,
  authenticateUser,
}
