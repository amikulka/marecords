import AddRecordForm from '../../components/admin/AddRecordForm'
import SearchResultsList from '../../components/admin/SearchResultsList'
import { useState } from 'react'
import axios from 'axios'
import SimpleNotification from '../../components/notification/SimpleNotification'
import { Album } from '../../utils/types'
import Head from 'next/head'

export default function AddAlbum() {
  const [artistSearch, setArtistSearch] = useState('')
  const [albumSearch, setAlbumSearch] = useState('')
  const [albumSearchList, setAlbumSearchList] = useState(null)
  const [show, setShow] = useState(false)

  function handleArtistChange(e: React.FormEvent<HTMLInputElement>) {
    setArtistSearch(e.currentTarget.value)
  }
  function handleAlbumChange(e: React.FormEvent<HTMLInputElement>) {
    setAlbumSearch(e.currentTarget.value)
  }
  function handleSearchClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    searchForAlbums(artistSearch, albumSearch)
  }
  function handleClearClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setAlbumSearchList(null)
    setArtistSearch('')
    setAlbumSearch('')
  }
  function handleAddAlbum(album: Album) {
    axios.post(`/api/albums`, album).then(() => {
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 6000)
      setArtistSearch('')
      setAlbumSearch('')
      setAlbumSearchList(null)
    })
  }

  function searchForAlbums(artist: String, album: String) {
    axios
      .get(`/api/mb_album_info`, {
        params: {
          release: album,
          artist: artist,
        },
      })
      .then((results) => {
        console.log(results.data)
        setAlbumSearchList(results.data)
      })
  }
  return (
    <>
      <Head>
        <title>MA-Add</title>
        <meta name="description" content="Adds records to the list" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <AddRecordForm
          searchForAlbums={searchForAlbums}
          handleArtistChange={handleArtistChange}
          handleAlbumChange={handleAlbumChange}
          handleSearchClick={handleSearchClick}
          artistSearch={artistSearch}
          albumSearch={albumSearch}
          albumSearchList={albumSearchList}
          handleClearClick={handleClearClick}
        />

        {albumSearchList && (
          <SearchResultsList
            albumSearchList={albumSearchList}
            handleAdd={handleAddAlbum}
          />
        )}
        <SimpleNotification
          show={show}
          setShow={setShow}
          message={'Album Added!'}
          description={'Album is now a part of your collection'}
        />
      </div>
    </>
  )
}
