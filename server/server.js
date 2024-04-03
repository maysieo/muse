import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import db from '../database/db.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

const port = 3000;

app.get('/artist', (req, res) => {
  console.log(req.params)
  res.status(200).send('Hello, World!')
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
