import React from 'react'
import { AlbumFullInfo } from '../../utils/types'
import Image from 'next/image'

type Props = {
  album: AlbumFullInfo
}

export default function AlbumCard({ album }: Props) {
  return (
    <div className="flex justify-center m-8">
      <div className="rounded-lg shadow-lg bg-white w-72 border-2 border-solid bg-slate-50">
        <Image
          className="rounded-t-lg border-b-2"
          src={album.art_url}
          alt="album artwork"
          width={285}
          height={285}
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
        </div>
      </div>
    </div>
  )
}
