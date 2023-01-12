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
    <div>
      <div>
        <img src={album.art_url} alt="album art" className="w-36 h36" />
      </div>
      <div>
        <h3>{album.artist}</h3>
        <h4>{album.album}</h4>
        <p>Disk count: {album.disk_count}</p>
        <p>Track count: {album.track_count}</p>
      </div>
      <div>
        <button
          className="inline-flex items-center rounded border border-transparent bg-slate-500 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-slate-600 focus:outline-none focus:ring-1 focus:ring-slate-500 focus:ring-offset-1"
          onClick={handleRemoveClick}
        >
          Remove
        </button>
      </div>
    </div>
  )
}
