const mongoose = require('mongoose');

const NotaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  conteudo: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
});

const Note = mongoose.model('Note', NotaSchema);
module.exports = Note;