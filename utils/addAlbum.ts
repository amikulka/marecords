import { connect } from './dbConnect'
import { Album } from './types'

export default async function addAlbum(album: Album) {
  const query = { mbid: album.mbid }
  console.log('here')
  const { Album } = await connect()
  return Album.findOneAndUpdate(query, album, { upsert: true })
}
