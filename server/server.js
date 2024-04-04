import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { findArtist, getImages, createAccount, logIn } from '../database/controllers.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

const port = 3000;


app.get('/artist/', (req, res) => {
  findArtist(req.query.name)
    .then((artworks) => {
      const promises = artworks.map((art) => {
        const artObject = art.toObject();
        if (artObject.Repository === 'Metropolitan Museum of Art, New York, NY') {
          // Replace `metApiUrl` with the actual Met API URL
          const metApiUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artObject.ObjectID}`;
          return fetch(metApiUrl)
            .then((response) => {
              return response.json()
            })
            .then(data => {
              art._doc.ImageURL = data.primaryImage;
            })
            .catch(error => {
              console.error('Error:', error);
            });
        }
      });
      return Promise.all(promises).then(() => artworks);
    })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.get('/images', (req, res) => {
  getImages()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
})

app.post('/createAccount', (req, res) => {
  const { email, password } = req.body;
  if (!password) {
    return res.status(400).send('Password is required')
  } else if (!email || !email.includes('@')) {
    return res.status(400).send('Valid email is required')
  } else {
  createAccount(email, password)
    .then((response) => {
      res.status(201).send(response);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
  }
});

app.post('/logIn', (req, res) => {
  const { email, password } = req.body;
  if (!password) {
    return res.status(400).send('Password is required')
  }
  if (!email || !email.includes('@')) {
    return res.status(400).send('Valid email is required')
  }
  logIn(email, password)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(400).send(error);
    })
  })

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
