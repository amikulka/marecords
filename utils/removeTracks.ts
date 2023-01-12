import { connect } from './dbConnect'

export default async function addAlbum(mbid: string) {
  const query = { mbid }
  const { Track } = await connect()
  return Track.deleteMany(query)
}
