import mongoose from 'mongoose';
import db from '../db.js';

const artworkSchema = new mongoose.Schema({
  object_id: Number,
  artist: String,
  title: String,
  date: String,
  museum: String,
  onView: Boolean,
  url: String,
  department: String,
  gallery: Number,
}, {collection: 'artwork'})

const Artwork = mongoose.model('artwork', artworkSchema);

export default Artwork;