import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from './Icon.jsx'
import WatchArt from './WatchArt.jsx'
import { useSearch } from '../context/SearchContext.jsx'
import { PRODUCTS } from '../data/catalog.js'
import { toman, faDigits } from '../lib/format.js'
import './SearchOverlay.css'

export default function SearchOverlay() {
  const { isOpen, closeSearch } = useSearch()
  const [term, setTerm] = useState('')
  const { pathname } = useLocation()

  /* با تغییر صفحه، جست‌وجو بسته شود */
  useEffect(() => {
    closeSearch()
  }, [pathname, closeSearch])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (event) => {
      if (event.key === 'Escape') closeSearch()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, closeSearch])

  useEffect(() => {
    if (!isOpen) setTerm('')
  }, [isOpen])

  const results = useMemo(() => {
    const query = term.trim().toLowerCase()
    if (query.length < 2) return []
    return PRODUCTS.filter((product) =>
      [product.name, product.line, product.brand, product.description]
        .join(' ')
        .toLowerCase()
        .includes(query),
    ).slice(0, 6)
  }, [term])

  return (
    <div className={`search ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
      <div className="search__scrim" onClick={closeSearch} />
      <div className="search__panel" role="dialog" aria-modal="true" aria-label="جست‌وجوی محصول">
        <div className="shell search__inner">
          <div className="search__field">
            <Icon name="search" size={20} />
            <input
              className="search__input"
              type="search"
              value={term}
              onChange={(event) => setTerm(event.target.value)}
              placeholder="نام ساعت، برند یا سری را بنویسید…"
              aria-label="عبارت جست‌وجو"
              autoComplete="off"
            />
            <button type="button" className="search__close" onClick={closeSearch} aria-label="بستن جست‌وجو">
              <Icon name="close" size={20} />
            </button>
          </div>

          {term.trim().length >= 2 ? (
            results.length > 0 ? (
              <ul className="search__results">
                {results.map((product) => (
                  <li key={product.id}>
                    <Link className="search__item" to={`/product/${product.slug}`} onClick={closeSearch}>
                      <span className="search__thumb">
                        <WatchArt art={product.art} label={product.brand} showDate={false} />
                      </span>
                      <span className="search__meta">
                        <span className="search__name">{product.name}</span>
                        <span className="search__brand latin">
                          {product.brand} · {product.line}
                        </span>
                      </span>
                      <span className="search__price num">{toman(product.price)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="search__empty">
                برای «{term.trim()}» نتیجه‌ای پیدا نشد. با نام برند یا دسته‌بندی دوباره امتحان کنید.
              </p>
            )
          ) : (
            <p className="search__hint">
              {faDigits(PRODUCTS.length)} محصول در زمان‌یار — نام یا برند را تایپ کنید.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
