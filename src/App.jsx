import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { CartProvider } from './context/CartContext.jsx'
import { SearchProvider } from './context/SearchContext.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import SearchOverlay from './components/SearchOverlay.jsx'
import Home from './pages/Home.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import CategoryPage from './pages/CategoryPage.jsx'
import Checkout from './pages/Checkout.jsx'
import NotFound from './pages/NotFound.jsx'

/** با تغییر مسیر به بالای صفحه برمی‌گردیم و لنگرهای # را می‌پیماییم. */
function RouteScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <SearchProvider>
      <CartProvider>
        <div className="grain" aria-hidden="true" />
        <RouteScroll />
        <Link to="/#main" className="skip-link">
          پرش به محتوای اصلی
        </Link>
        <Header />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <CartDrawer />
        <SearchOverlay />
      </CartProvider>
    </SearchProvider>
  )
}
