import { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../../config'
import { AlbumFullInfo } from '../../utils/types'
import AdminAlbumCard from '../../components/admin/AdminAlbumCard'
import Head from 'next/head'

export default function Admin() {
  const [albumList, setAlbumList] = useState([])
  useEffect(() => {
    axios.get(`${server}/api/albums`).then((results) => {
      setAlbumList(results.data.sort(sortAlphabetically))
    })
  }, [])

  function handleRemove(album: AlbumFullInfo) {
    axios
      .delete(`${server}/api/albums`, {
        params: {
          mbid: album.mbid,
        },
      })
      .then(() => {
        const deleteIndex = albumList.findIndex((element: AlbumFullInfo) => {
          return element.mbid === album.mbid
        })
        const newAlbumList = albumList.slice()
        newAlbumList.splice(deleteIndex, 1)
        setAlbumList(newAlbumList)
      })
  }

  return (
    <>
      <Head>
        <title>MA-Admin</title>
        <meta name="description" content="Admin page to remove records" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center md:justify-start flex-wrap">
        {albumList.length > 0 &&
          albumList.map((album: AlbumFullInfo) => (
            <AdminAlbumCard
              album={album}
              key={album.mbid}
              handleRemove={handleRemove}
            />
          ))}
      </div>
    </>
  )
}

function sortAlphabetically(a: AlbumFullInfo, b: AlbumFullInfo) {
  return a.artist.toLowerCase().localeCompare(b.artist.toLowerCase())
}
