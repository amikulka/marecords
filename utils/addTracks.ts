import { connect } from './dbConnect'
import fetchTracks from './fetchTracks'
import { noMbidTrack } from './types'

export default async function addTracks(mbid: string) {
  let tracks = await fetchTracks(mbid)

  tracks = tracks.map((track: noMbidTrack) => {
    return {
      mbid,
      ...track,
    }
  })

  const { Track } = await connect()
  return Track.insertMany(tracks)
}
