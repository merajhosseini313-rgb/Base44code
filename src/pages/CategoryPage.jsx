import { Link, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import NotFound from './NotFound.jsx'
import { CATEGORIES, PRODUCTS } from '../data/catalog.js'
import { faDigits } from '../lib/format.js'
import './CategoryPage.css'

export default function CategoryPage() {
  const { slug } = useParams()
  const category = CATEGORIES.find((item) => item.slug === slug)

  if (!category) return <NotFound />

  const products = PRODUCTS.filter((product) => product.category === slug)
  const others = PRODUCTS.filter((product) => product.category !== slug).slice(0, 4)

  return (
    <div className="category-page">
      <div className="shell">
        <nav className="crumbs" aria-label="مسیر صفحه">
          <Link to="/">خانه</Link>
          <span aria-hidden="true">/</span>
          <span className="crumbs__current">ساعت {category.name}</span>
        </nav>

        <header className="category-page__head">
          <p className="eyebrow">{category.caption}</p>
          <h1 className="title">ساعت {category.name}</h1>
          <p className="lead num">
            {faDigits(products.length)} مدل از {faDigits(category.count)} مدل موجود در این دسته را
            برایت آورده‌ایم.
          </p>
        </header>

        <nav className="category-page__chips" aria-label="دسته‌بندی‌های دیگر">
          {CATEGORIES.map((item) => (
            <Link
              key={item.slug}
              to={`/category/${item.slug}`}
              className={`category-page__chip ${item.slug === slug ? 'is-current' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <ul className="product-grid">
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>

        <section className="section category-page__others">
          <h2 className="title">پیشنهادهای دیگر</h2>
          <ul className="product-grid">
            {others.map((product) => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
