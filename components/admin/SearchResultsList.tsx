import AlbumSearchCard from './AlbumSearchCard'
export interface album {
  album: string
  artist: string
  disk_count: number
  mbid: string
  track_count: number
}
type Props = {
  albumSearchList: album[]
}

export default function SearchResultsList({ albumSearchList }: Props) {
  return (
    <ul>
      {albumSearchList.map((album) => (
        <AlbumSearchCard key={album.mbid} album={album} />
      ))}
    </ul>
  )
}
