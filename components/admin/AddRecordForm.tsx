import {
  ChangeEvent,
  MouseEventHandler,
  SyntheticEvent,
  useState,
} from "react";
function AddRecordForm() {
  const [artistSearch, setArtistSearch] = useState("");
  const [albumSearch, setAlbumSearch] = useState("");

  function handleArtistChange(e: React.FormEvent<HTMLInputElement>) {
    setArtistSearch(e.currentTarget.value);
  }
  function handleAlbumChange(e: React.FormEvent<HTMLInputElement>) {
    setAlbumSearch(e.currentTarget.value);
  }
  function handleClick(e: MouseEvent) {
    e.preventDefault();
  }
  return (
    <div>
      sanity check
      <br />
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
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default AddRecordForm;
