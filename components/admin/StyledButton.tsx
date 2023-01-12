import { album } from './SearchResultsList'

type Props = {
  handleClick: React.MouseEventHandler<HTMLButtonElement>
  label: string
}

export default function ClearResultsButton({ handleClick, label }: Props) {
  return (
    <button
      className="m-2.5 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
      onClick={handleClick}
    >
      {label}
    </button>
  )
}
