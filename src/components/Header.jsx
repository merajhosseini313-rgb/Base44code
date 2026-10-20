import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from './Icon.jsx'
import { useCart } from '../context/CartContext.jsx'
import { useSearch } from '../context/SearchContext.jsx'
import { faDigits } from '../lib/format.js'
import './Header.css'

const LINKS = [
  { label: 'خانه', to: '/' },
  { label: 'دسته‌بندی‌ها', to: '/#categories' },
  { label: 'پرفروش‌ترین‌ها', to: '/#featured' },
  { label: 'جدیدترین‌ها', to: '/#fresh' },
  { label: 'چرا زمان‌یار', to: '/#why' },
  { label: 'راهنمای انتخاب', to: '/#blog' },
]

export default function Header() {
  const { count, openCart } = useCart()
  const { openSearch } = useSearch()
  const [menuOpen, setMenuOpen] = useState(false)
  const [lifted, setLifted] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setMenuOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${lifted ? 'is-lifted' : ''}`}>
      <div className="shell header__inner">
        <Link to="/" className="brand" aria-label="زمان‌یار — صفحه اصلی">
          <span className="brand__fa">زمان‌یار</span>
          <span className="brand__latin latin">ZAMANYAR</span>
        </Link>

        <nav className="header__nav" aria-label="فهرست اصلی">
          {LINKS.map((link) => (
            <Link key={link.to} to={link.to} className="header__link">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header__actions">
          <button type="button" className="header__icon" onClick={openSearch} aria-label="جست‌وجوی محصول">
            <Icon name="search" size={20} />
          </button>

          <button type="button" className="header__icon header__cart" onClick={openCart} aria-label="سبد خرید">
            <Icon name="cart" size={21} />
            {count > 0 ? <span className="header__badge num">{faDigits(count)}</span> : null}
          </button>

          <button
            type="button"
            className="header__icon header__burger"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'بستن منو' : 'باز کردن منو'}
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      <div className={`header__drawer ${menuOpen ? 'is-open' : ''}`}>
        <nav className="shell header__drawer-nav" aria-label="فهرست موبایل">
          {LINKS.map((link) => (
            <Link key={link.to} to={link.to} className="header__drawer-link" onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
