import mongoose, { Schema } from 'mongoose'

const AlbumSchema = new mongoose.Schema({
  mbid: {
    type: String,
    required: [true, 'Needs mbid'],
    trim: true,
  },
  album: {
    type: String,
    required: [true, 'Please add an album name'],
    trim: true,
    maxLength: [100, 'Album name can not be more than 100 characters'],
  },
  artist: {
    type: String,
    required: [true, 'Please add an artist name'],
    trim: true,
    maxLength: [100, 'Artist name can not be more than 100 characters'],
  },
  track_count: {
    type: Number,
    required: [true, 'Please add a track count'],
  },
  disk_count: {
    type: Number,
    required: [true, 'Please add a album disk count'],
  },
  art_url: {
    type: String,
    required: [true],
  },
})

export default AlbumSchema
