import axios from 'axios'
import { noMbidTrack } from './types'

const headers = {
  Accept: 'application/json',
  'User-Agent': 'MBRecords/0.1.0 (mikujen@yahoo.com)',
}
interface disk {
  tracks: noMbidTrack[]
}

export default async function fetchTracks(mbid: string) {
  let endpoint = `http://musicbrainz.org/ws/2/release/${mbid}`
  return axios({
    method: 'get',
    url: endpoint,
    headers: headers,
    params: {
      inc: 'recordings',
    },
  }).then((results) => {
    return results.data.media
      .map((disk: disk) => {
        return disk.tracks.map((track: any) => {
          return {
            title: track.title,
            position: track.position,
            length: track.length,
            track_number: track.number,
          }
        })
      })
      .flat()
  })
}
