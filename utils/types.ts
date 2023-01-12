export interface ResponseFuncs {
  GET?: Function
  POST?: Function
  PUT?: Function
  DELETE?: Function
}

export interface Track {
  mbid: string
  title: string
  position: number
  length: number
  track_number: string
}

export interface Album {
  mbid: string
  album: string
  artist: string
  track_count: number
  disk_count: number
  art_url: string
}

export interface noMbidTrack {
  title: string
  position: number
  length: number
  track_number: string
}

export interface AlbumFullInfo {
  _id: string
  mbid: string
  album: string
  artist: string
  __v: number
  disk_count: number
  track_count: number
  art_url: string
}
