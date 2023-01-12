/* eslint-disable @next/next/no-img-element */
import { album } from './SearchResultsList'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../../config'
type Props = {
  album: album
  handleAdd: Function
}

export default function AlbumSearchCard({ album, handleAdd }: Props) {
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

  function handleAddClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    handleAdd({
      ...album,
      art_url: albumUrl,
    })
  }

  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="sm:flex">
        <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
          {albumUrl && (
            <img
              className="h-32 w-32 border border-gray-300"
              src={albumUrl}
              alt="album artwork"
            />
          )}
        </div>
        <div>
          <h3 className="text-md font-medium leading-6 text-gray-900">
            {album.album}
          </h3>
          <h2>{album.artist}</h2>
          <p>Record count: {album.disk_count}</p>
          <p>Track count: {album.track_count}</p>
        </div>
        <div>
          <button
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={handleAddClick}
          >
            Add Album
          </button>
        </div>
      </div>
    </div>
  )
}
