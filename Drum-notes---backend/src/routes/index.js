const express = require('express');
const router = express.Router();
const NotesController = require('../controller/notesController');
const UsersController = require('../controller/userController');
const upload = require('../config/multerConfig');
const checkToken = require('../middleware/checkToken');

router.post('/notes/create', upload.single('image'), checkToken, NotesController.create); // Criar nota

router.get('/notes/show', checkToken, NotesController.getAll); // Obter todas as notas do usuário
router.get('/notes/show/user_expecifi/:id', checkToken, NotesController.getUser); // Obter todas as notas do usuário expecifico

router.put('/notes/update/:id', checkToken, NotesController.update);
router.delete('/notes/delete/:id', checkToken, NotesController.delete); // Deletar nota

router.post('/users/create', UsersController.create); // Criar usuário
router.post('/users/auth', UsersController.auth); // Fazer login

module.exports = router;