import Artwork from './models/artwork.js';
import db from './db.js';

export const findArtist = (artist) => {
  return Artwork.find({
    Artist: new RegExp('\\b' + artist + '\\b', 'i')
  });
};

export const getImages = () => {
  return Artwork.aggregate([
    { $match: { ImageURL: { $exists: true, $ne: '' } } },
    { $sample: { size: 10 } }
  ]);
}

export const createAccount = (email, password) => {
  return new Promise((resolve, reject) => {
    db.collection('userData').findOne({ email: email })
      .then((user) => {
        if (user) {
          resolve('User already exists');
        } else {
          db.collection('userData').insertOne({ email, password })
            .then(() => {
              resolve('Account created');
            })
            .catch((error) => {
              console.log(error);
              reject(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

export const logIn = (email, password) => {
  return new Promise((resolve, reject) => {
    db.collection('userData').findOne({ email: email, password: password })
      .then((user) => {
        if (user) {
          resolve('Logged in');
        } else {
          resolve('Email or password incorrect');
        }
      })
      .catch((error) => {
        console.log(error);
        reject (error);
      });
  })
}

export const postReview = (review) => {
  return new Promise((resolve, reject) => {
    db.collection('reviews').insertOne(review)
      .then(() => {
        resolve('Review posted');
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

export const getUserCatalog = (userEmail) => {
  return new Promise((resolve, reject) => {
    db.collection('reviews').find({ userEmail: userEmail }).toArray()
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}