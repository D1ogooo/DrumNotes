require('dotenv').config();

const SECRET = process.env.SECRET_KEY;

if (!SECRET) {
  throw new Error('SECRET_KEY não definida');
}

module.exports = {
  jwt: {
    secret: SECRET,
    expiresIn: '1d',
  }
};