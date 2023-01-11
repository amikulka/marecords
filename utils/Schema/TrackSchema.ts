import mongoose from 'mongoose'

const TrackSchema = new mongoose.Schema({
  mbid: String,
  title: String,
  position: Number,
  length: Number,
  track_number: String,
})

export default TrackSchema
