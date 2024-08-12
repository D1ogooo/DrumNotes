const express = require('express');
const path = require('path');
const cors = require('cors')

const app = express();
const conn = require('./config/databaseConfig');
const router = require('./routes');

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(router);

conn();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`👩‍💻 Server running on port: ${PORT}`);
});