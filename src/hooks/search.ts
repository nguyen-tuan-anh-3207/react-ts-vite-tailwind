import { useState, useEffect } from 'react'

import queryString from 'query-string'
import { useLocation } from 'react-router-dom'

export const useSearchParams = () => {
  const { search } = useLocation()
  const [searchParams, setSearchParams] = useState(queryString.parse(search))

  useEffect(() => {
    setSearchParams(queryString.parse(search))
  }, [search])
  return searchParams
}
