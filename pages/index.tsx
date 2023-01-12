import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../config'
import { AlbumFullInfo } from '../utils/types'
import AlbumCard from '../components/home/AlbumCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [albumList, setAlbumList] = useState([])
  useEffect(() => {
    axios.get(`${server}/api/albums`).then((results) => {
      setAlbumList(results.data.sort(sortAlphabetically))
    })
  }, [])

  return (
    <>
      <Head>
        <title>MA-Records</title>
        <meta name="description" content="Helping you organize your records" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-wrap justify-center">
          {albumList ? (
            albumList.map((album: AlbumFullInfo) => (
              <AlbumCard album={album} key={album.mbid} />
            ))
          ) : (
            <h1>No albums yet!</h1>
          )}
        </div>
      </main>
    </>
  )
}

function sortAlphabetically(a: AlbumFullInfo, b: AlbumFullInfo) {
  return a.artist.toLowerCase().localeCompare(b.artist.toLowerCase())
}
