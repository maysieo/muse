import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import db from '../database/db.js';
import findArtist from '../database/controllers.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

const port = 3000;

app.get('/artist/', (req, res) => {
  console.log('Here is the artists name', req.query.name)
  findArtist(req.query.name)
    .then((data) => {
      console.log('Here is the data:', data);
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
