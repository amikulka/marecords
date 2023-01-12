import InputWithLabel from '../input/InputWithLabel'
import StyledButton from './StyledButton'

type Props = {
  searchForAlbums: Function
  handleArtistChange: React.ChangeEventHandler<HTMLInputElement>
  handleAlbumChange: React.ChangeEventHandler<HTMLInputElement>
  handleSearchClick: React.MouseEventHandler<HTMLButtonElement>
  artistSearch: string
  albumSearch: string
  albumSearchList: any[] | null
  handleClearClick: React.MouseEventHandler<HTMLButtonElement>
}
export default function AddRecordForm({
  handleArtistChange,
  handleAlbumChange,
  handleSearchClick,
  artistSearch,
  albumSearch,
  albumSearchList,
  handleClearClick,
}: Props) {
  return (
    <div className="ml-10 mt-8">
      <div className="max-w-xs p-2.5">
        <InputWithLabel
          label={'Artist'}
          placeholder={'Artist name'}
          handleChange={handleArtistChange}
          query={artistSearch}
        />
      </div>
      <div className="max-w-xs p-2.5">
        <InputWithLabel
          label={'Album'}
          placeholder={'Album name'}
          handleChange={handleAlbumChange}
          query={albumSearch}
        />
      </div>
      <div>
        <StyledButton handleClick={handleSearchClick} label={'Search'} />
        {albumSearchList && (
          <StyledButton
            handleClick={handleClearClick}
            label={'Clear Results'}
          />
        )}
      </div>
    </div>
  )
}
