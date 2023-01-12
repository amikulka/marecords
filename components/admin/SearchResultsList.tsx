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
  handleAdd: Function
}

export default function SearchResultsList({
  albumSearchList,
  handleAdd,
}: Props) {
  return (
    <div className="flex justify-center md:justify-start flex-wrap">
      {albumSearchList.map((album) => (
        <AlbumSearchCard key={album.mbid} album={album} handleAdd={handleAdd} />
      ))}
    </div>
  )
}
