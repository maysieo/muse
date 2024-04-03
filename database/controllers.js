import Artwork from './models/artwork.js';
import db from './db.js';

const findArtist = (artist) => {
  console.log(artist);
  return Artwork.find({
    Artist: new RegExp('\\b' + artist + '\\b', 'i')
  });
};

export default findArtist;