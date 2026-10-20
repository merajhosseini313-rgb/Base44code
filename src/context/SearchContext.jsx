import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const SearchContext = createContext(null)

export function SearchProvider({ children }) {
  const [isOpen, setOpen] = useState(false)

  const openSearch = useCallback(() => setOpen(true), [])
  const closeSearch = useCallback(() => setOpen(false), [])

  const value = useMemo(
    () => ({ isOpen, openSearch, closeSearch, setOpen }),
    [isOpen, openSearch, closeSearch],
  )

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}

export function useSearch() {
  const context = useContext(SearchContext)
  if (!context) throw new Error('useSearch باید داخل SearchProvider استفاده شود')
  return context
}
