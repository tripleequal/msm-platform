import { useEffect, useMemo, useState } from 'react'
import api from './api'

export default function useData<T>(uri: string) {
  const memoizedUri = useMemo(() => uri, [uri])
  const [isInFlight, setIsInFlight] = useState(false)
  const [loading, setIsLoading] = useState(true)
  const [data, setData] = useState<T | undefined>()

  useEffect(() => {
    if (!data && !isInFlight) {
      setIsInFlight(true)
      api
        .get<T>(memoizedUri)
        .then((data) => setData(data.data))
        .finally(() => {
          setIsInFlight(false)
          setIsLoading(false)
        })
    }
  }, [data, memoizedUri, isInFlight])

  return { data, loading }
}
