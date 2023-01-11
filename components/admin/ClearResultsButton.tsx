import { album } from './SearchResultsList'

type Props = {
  handleClearClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function ClearResultsButton({ handleClearClick }: Props) {
  return <button onClick={handleClearClick}>Clear Results</button>
}
