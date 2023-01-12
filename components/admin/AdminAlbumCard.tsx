/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { AlbumFullInfo } from '../../utils/types'

type Props = {
  album: AlbumFullInfo
  handleRemove: Function
}

export default function AdminAlbumCard({ album, handleRemove }: Props) {
  function handleRemoveClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    handleRemove(album)
  }
  return (
    <div className="flex justify-center m-8">
      <div className="rounded-lg shadow-lg bg-white w-72 border-2 border-solid bg-slate-50">
        <img
          className="rounded-t-lg border-b-2"
          src={album.art_url}
          alt="album artwork"
        />
        <div className="p-3">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {album.album}
          </h5>
          <p className="text-gray-700 text-base mb-4">{album.artist}</p>
          <div className="flex justify-between">
            <p>Tracks: {album.track_count}</p>
            <p>Records: {album.disk_count}</p>
          </div>
          <button
            className="mt-5 w-full text-center rounded border border-transparent bg-red-600 px-0 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-slate-600 focus:outline-none focus:ring-1 focus:ring-slate-500 focus:ring-offset-1"
            onClick={handleRemoveClick}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}
