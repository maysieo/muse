import mongoose from 'mongoose';

const artworkSchema = mongoose.Schema({
  object_id: Number,
  artist: String,
  title: String,
  date: String,
  museum: String,
  onView: Boolean,
  url: String,
  department: String,
  gallery: Number,
})

const artwork = mongoose.model('Artwork', artworkSchema);

export default artwork; 