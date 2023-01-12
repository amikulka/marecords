import React from 'react'
import { AlbumFullInfo } from '../../utils/types'

type Props = {
  album: AlbumFullInfo
}

export default function AlbumCard({ album }: Props) {
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
          {/* <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Button
          </button> */}
        </div>
      </div>
    </div>
  )
}
