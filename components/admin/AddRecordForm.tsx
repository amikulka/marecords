type Props = {
  searchForAlbums: Function
  handleArtistChange: React.ChangeEventHandler<HTMLInputElement>
  handleAlbumChange: React.ChangeEventHandler<HTMLInputElement>
  handleSearchClick: React.MouseEventHandler<HTMLButtonElement>
  artistSearch: string | number | readonly string[] | undefined
  albumSearch: string | number | readonly string[] | undefined
}
export default function AddRecordForm({
  searchForAlbums,
  handleArtistChange,
  handleAlbumChange,
  handleSearchClick,
  artistSearch,
  albumSearch,
}: Props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Artist Name"
        value={artistSearch}
        onChange={handleArtistChange}
        className="shadow-md border border-solid"
      />
      <input
        type="text"
        placeholder="Album Name"
        value={albumSearch}
        onChange={handleAlbumChange}
        className="shadow-md border border-solid"
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  )
}
