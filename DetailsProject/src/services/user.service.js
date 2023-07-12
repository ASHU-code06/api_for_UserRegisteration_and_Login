import sequelize, { DataTypes } from '../config/database';
const User = require('../models/user')(sequelize, DataTypes);


//create new user
export const newUser = async (body) => {
  const isExist = await User.findOne({ where: { email: body.email } });
  if(isExist){
    throw new Error ("User already Exist");
  }
  const data = await User.create(body);
  return data;
};







