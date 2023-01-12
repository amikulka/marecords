import { connect } from './dbConnect'

export default async function addAlbum(mbid: string) {
  const query = { mbid }
  const { Album } = await connect()
  return Album.findOneAndRemove(query)
}
