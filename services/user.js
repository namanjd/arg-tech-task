const { Users } = require('../models');

const createUser = async (params) => {
  try {
    const user = await Users.create(params);
    return user
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

const findUserByEmail = async (params) => {
  try {
    const user = await Users.findOne({
      where: params
    });
    return user
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

module.exports = {
  createUser,
  findUserByEmail,
}
