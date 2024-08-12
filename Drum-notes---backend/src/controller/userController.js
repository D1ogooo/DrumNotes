const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/UserModel');
require('dotenv').config();

class UsersController {
  async create(req, res) {
    try {
      const { nome, email, password } = req.body;

      const userExist = await User.findOne({ email });
      if (userExist) {
        return res.status(409).json({ message: 'Email já cadastrado' });
      }

      const salt = await bcrypt.genSalt(12);
      const passwordHash = await bcrypt.hash(password, salt);

      const newUser = new User({ nome, email, password: passwordHash });
      await newUser.save();
      res.status(201).json({ message: 'Usuário criado com sucesso' });
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }

  async auth(req, res) {
    try {
      const { email, password } = req.body;
      const userExist = await User.findOne({ email });
      if (!userExist) {
        return res.status(404).json({ message: 'Credenciais inválidas' });
      }

      const isMatch = await bcrypt.compare(password, userExist.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Credenciais inválidas' });
      }

      const secret = process.env.SECRET_KEY;
      if (!secret) {
        throw new Error('Secret not found');
      }

      const token = jwt.sign({ id: userExist._id }, secret, { expiresIn: '1d' });
      const user = await User.findOne({ email }).select('-password').exec();

      res.status(200).json({ user, token });
    } catch (error) {
      console.error('Erro ao autenticar usuário:', error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }
}

module.exports = new UsersController();
