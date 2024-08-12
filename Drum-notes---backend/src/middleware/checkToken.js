const jwt = require('jsonwebtoken');
const { jwt: jwtConfig } = require('../config/auth');

function checkToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Acesso negado" });
  }

  console.log('Token recebido:', token);

  try {
    const secret = jwtConfig.secret;
    if (!secret) {
      throw new Error('Secret not found');
    }
    jwt.verify(token, secret);
    next();
  } catch (error) {
    console.error('Erro ao verificar o token:', error);
    res.status(400).json({ message: "Token inválido", error: error.message });
  }
}

module.exports = checkToken;
