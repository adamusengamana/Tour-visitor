const User = require("../models/users");
const {saltRounds} = require("../config/index");
const bcrypt = require("bcrypt");

async function authLogin(email, password) {
  // Authentication service logic here

  const user = await User.findOne({ email });
  if (!user) {
    const err = new Error("User doesn't exist");
    err.code = "USER_NOT_FOUND";    
    throw err;
  }

  const match = await bcrypt.compare(password, user.passwordHash || "");
  if (!match) {
    const err = new Error("Invalid password");
    err.code = "INVALID_PASSWORD";
    throw err;
  }
  return { id: user._id, email: user.email, username: user.username };
}
async function authRegister(email, password) {
  // Check if user already exists
  const existing = await User.findOne({ email });
  if (existing) {
    const err = new Error("User already exists");
    err.code = "EMAIL_TAKEN";
    throw err;
  }
 
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = await User.create({
    username: email.split("@")[0],
    email,
    passwordHash,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  return { id: user.id, email: user.email, username: user.username };
}

module.exports={authLogin,authRegister};
