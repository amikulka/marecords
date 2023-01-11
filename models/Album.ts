import mongoose from 'mongoose'

const AlbumSchema = new mongoose.Schema({
  album_name: {
    type: String,
    required: [true, 'Please add an album name'],
    trim: true,
    maxLength: [100, 'Album name can not be more than 100 characters'],
  },
  artist_name: {
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
module.exports = mongoose.model('Album', AlbumSchema)

// mbid: result.id,
//         album: result.title,
//         artist: result['artist-credit'][0].name,
//         track_count: result['track-count'],
//         disk_count: result.media.length,
//         art_url
//
