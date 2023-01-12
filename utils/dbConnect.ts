import mongoose, { mongo } from 'mongoose'
const { DATABASE_URL } = process.env

import AlbumSchema from './Schema/AlbumSchema'
import TrackSchema from './Schema/TrackSchema'

export const connect = async () => {
  const conn = await mongoose
    .connect(DATABASE_URL as string)
    .catch((err) => console.log(err))
  console.log('Mongoose Connection Established')

  const Track = mongoose.models.Track || mongoose.model('Track', TrackSchema)
  const Album = mongoose.models.Album || mongoose.model('Album', AlbumSchema)

  return { conn, Album, Track }
}
