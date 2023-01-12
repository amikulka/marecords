import InputWithLabel from '../input/InputWithLabel'

type Props = {
  searchForAlbums: Function
  handleArtistChange: React.ChangeEventHandler<HTMLInputElement>
  handleAlbumChange: React.ChangeEventHandler<HTMLInputElement>
  handleSearchClick: React.MouseEventHandler<HTMLButtonElement>
  artistSearch: string
  albumSearch: string
}
export default function AddRecordForm({
  handleArtistChange,
  handleAlbumChange,
  handleSearchClick,
  artistSearch,
  albumSearch,
}: Props) {
  return (
    <div className="p-1">
      <div className="max-w-xs mt-2.5">
        <InputWithLabel
          label={'Artist'}
          placeholder={'Artist name'}
          handleChange={handleArtistChange}
          query={artistSearch}
        />
      </div>
      <div className="max-w-xs mt-2.5">
        <InputWithLabel
          label={'Album'}
          placeholder={'Album name'}
          handleChange={handleAlbumChange}
          query={albumSearch}
        />
      </div>
      <button
        className="mt-2.5 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
        onClick={handleSearchClick}
      >
        Search
      </button>
    </div>
  )
}
