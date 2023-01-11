import AddRecordForm from '../../components/admin/AddRecordForm'
import SearchResultsList from '../../components/admin/SearchResultsList'
import ClearResultsButton from '../../components/admin/ClearResultsButton'
import { useState } from 'react'
import { server } from '../../config'
import axios from 'axios'
export default function AddAlbum() {
  const [artistSearch, setArtistSearch] = useState('')
  const [albumSearch, setAlbumSearch] = useState('')
  const [albumSearchList, setAlbumSearchList] = useState(null)
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

  function searchForAlbums(artist: String, album: String) {
    axios
      .get(`${server}/api/mb_album_info`, {
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
    <div>
      <h1>Add Record</h1>
      <AddRecordForm
        searchForAlbums={searchForAlbums}
        handleArtistChange={handleArtistChange}
        handleAlbumChange={handleAlbumChange}
        handleSearchClick={handleSearchClick}
        artistSearch={artistSearch}
        albumSearch={albumSearch}
      />
      {albumSearchList && (
        <ClearResultsButton handleClearClick={handleClearClick} />
      )}
      {albumSearchList && (
        <SearchResultsList albumSearchList={albumSearchList} />
      )}
    </div>
  )
}
