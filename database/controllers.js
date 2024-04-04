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