/* eslint-disable @next/next/no-img-element */
import { album } from './SearchResultsList'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../../config'
type Props = {
  album: album
}

export default function AlbumSearchCard({ album }: Props) {
  const [albumUrl, setAlbumUrl] = useState('')
  useEffect(() => {
    axios
      .get(`${server}/api/mb_album_art`, {
        params: {
          mbid: album.mbid,
        },
      })
      .then((result) => {
        setAlbumUrl(result.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [album.mbid])

  return (
    <div>
      <div>
        {albumUrl && (
          <img className="w-52 max-w-xs" src={albumUrl} alt="album artwork" />
        )}
        <div>
          <h3>{album.album}</h3>
          <h2>{album.artist}</h2>
          <p>Record count: {album.disk_count}</p>
          <p>Track count: {album.track_count}</p>
        </div>
      </div>
    </div>
  )
}
