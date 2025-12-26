const dotenv = require('dotenv').config();

function getEnvVar(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
    
  }
  return value;
}

module.exports = { 
port: getEnvVar('PORT') || 3000,
  dbUri: getEnvVar('MONGO_URI'),
  jwtSecret: getEnvVar('JWT_SECRET'),
cors:getEnvVar('CORS_ORIGIN'),
saltRounds: parseInt(getEnvVar('BCRYPT_SALT_ROUNDS'))
}