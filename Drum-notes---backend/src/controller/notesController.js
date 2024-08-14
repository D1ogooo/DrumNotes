const fs = require('fs');
const path = require('path');
const Note = require('../model/NotesModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class NotesController {
  async create(req, res) {
    try {
      const { titulo, link, conteudo } = req.body;
      let image = req.file ? req.file.path : null;

      if (image) {
        const imageName = path.basename(image);
        image = `/uploads/${imageName}`;
      }

      if (!image) {
        return res.status(400).json({ message: 'Imagem não enviada.' });
      }

      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];
      const secret = process.env.SECRET_KEY;

      if (!token) {
        return res.status(401).json({ message: 'Não autorizado' });
      }

      const decoded = jwt.verify(token, secret);
      const userId = decoded.id;

      const newNote = new Note({
        titulo,
        link,
        conteudo,
        image,
        user: userId
      });

      await newNote.save();
      res.status(201).json(newNote);
    } catch (error) {
      console.error('Erro ao criar nota:', error);
      res.status(500).json({ message: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];
      const secret = process.env.SECRET_KEY;

      if (!token) {
        return res.status(401).json({ message: 'Não autorizado' });
      }

      const decoded = jwt.verify(token, secret);
      const userId = decoded.id;

      const notes = await Note.find({ user: userId });
      res.status(200).json(notes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];
      const secret = process.env.SECRET_KEY;

      if (!token) {
        return res.status(401).json({ message: 'Não autorizado' });
      }

      const decoded = jwt.verify(token, secret);
      const userId = decoded.id;
      const noteId = req.params.id;

      if (!noteId) {
        return res.status(400).json({ message: 'ID da nota não fornecido' });
      }

      const note = await Note.findOne({ _id: noteId, user: userId });

      if (!note) {
        return res.status(404).json({ message: 'Nota não encontrada' });
      }

      if (note.image) {
        const filePath = path.join(__dirname, '../uploads', path.basename(note.image));
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }

      await Note.deleteOne({ _id: noteId });
      res.status(200).json({ message: 'Nota deletada com sucesso' });
    } catch (error) {
      console.error('Erro ao excluir nota:', error);
      res.status(500).json({ message: error.message });
    }
  }

  async getUser(req, res) {
    try {
      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];
      const secret = process.env.SECRET_KEY;

      if (!token) {
        return res.status(401).json({ message: 'Não autorizado' });
      }

      const decoded = jwt.verify(token, secret);
      const userId = decoded.id;

      const notes = await Note.find({ user: userId });
      res.status(200).json(notes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const NovoTitulo = req.body.titulo
      const NovoLink = req.body.link
      const NovoConteudo = req.body.conteudo
      const noteId = req.params.id;

      const notes = await Note.findByIdAndUpdate(noteId,
        {
          titulo: NovoTitulo,
          link: NovoLink,
          conteudo: NovoConteudo,
        },
        { new: true }
      )
      res.status(200).json(notes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new NotesController();