type FetchStatusProps = {
  isFetching: boolean | undefined | null
}

const FetchStatus = ({ isFetching }: FetchStatusProps) => {
  if (isFetching)
    return <p className="inline-block px-4 py-1 text-sm bg-purple-900 rounded-full">Fetching</p>
  return <p className="inline-block px-4 py-1 text-sm bg-green-900 rounded-full">Not Fetching</p>
}

export default FetchStatus;