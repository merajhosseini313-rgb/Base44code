import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import WatchArt from '../components/WatchArt.jsx'
import Rating from '../components/Rating.jsx'
import Icon from '../components/Icon.jsx'
import ProductCard from '../components/ProductCard.jsx'
import NotFound from './NotFound.jsx'
import { CATEGORIES, TRUST_ITEMS, findProduct, relatedProducts } from '../data/catalog.js'
import { useCart } from '../context/CartContext.jsx'
import { discountPercent, faDigits, toman } from '../lib/format.js'
import './ProductDetail.css'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = findProduct(slug)
  const [quantity, setQuantity] = useState(1)
  const { add, openCart } = useCart()

  useEffect(() => setQuantity(1), [slug])

  if (!product) return <NotFound />

  const category = CATEGORIES.find((item) => item.slug === product.category)
  const related = relatedProducts(product)
  const off = discountPercent(product.price, product.oldPrice)

  const handleAdd = () => {
    add(product.id, quantity)
    openCart()
  }

  return (
    <div className="pdp">
      <div className="shell">
        <nav className="crumbs" aria-label="مسیر صفحه">
          <Link to="/">خانه</Link>
          <span aria-hidden="true">/</span>
          {category ? (
            <>
              <Link to={`/category/${category.slug}`}>ساعت {category.name}</Link>
              <span aria-hidden="true">/</span>
            </>
          ) : null}
          <span className="crumbs__current">{product.name}</span>
        </nav>

        <div className="pdp__grid">
          <div className="pdp__media">
            <span className="pdp__halo" aria-hidden="true" />
            <WatchArt art={product.art} label={product.brand} className="pdp__art" />
            {product.badge ? <span className="pdp__badge">{product.badge}</span> : null}
          </div>

          <div className="pdp__info">
            <p className="pdp__brand latin">
              {product.brand} · {product.line}
            </p>
            <h1 className="pdp__name">{product.name}</h1>

            <Rating value={product.rating} reviews={product.reviews} size={15} />

            <div className="pdp__price">
              <span className="pdp__amount num">{toman(product.price)}</span>
              {product.oldPrice ? <s className="num">{toman(product.oldPrice)}</s> : null}
              {off ? <span className="chip num">{faDigits(off)}٪ تخفیف</span> : null}
            </div>

            <p className="pdp__description">{product.description}</p>

            <div className="pdp__actions">
              <div className="stepper stepper--lg">
                <button
                  type="button"
                  onClick={() => setQuantity((value) => value + 1)}
                  aria-label="افزودن یک عدد"
                >
                  <Icon name="plus" size={16} />
                </button>
                <span className="stepper__value num">{faDigits(quantity)}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((value) => Math.max(value - 1, 1))}
                  aria-label="کاهش یک عدد"
                >
                  <Icon name="minus" size={16} />
                </button>
              </div>

              <button type="button" className="btn btn--primary pdp__add" onClick={handleAdd}>
                <Icon name="cart" size={18} />
                افزودن به سبد خرید
              </button>
            </div>

            <ul className="pdp__assurance">
              {TRUST_ITEMS.slice(0, 3).map((item) => (
                <li key={item.title}>
                  <Icon name={item.icon} size={17} />
                  {item.title}
                </li>
              ))}
            </ul>

            <section className="pdp__specs" aria-label="مشخصات فنی">
              <h2 className="pdp__specs-title">مشخصات فنی</h2>
              <table>
                <tbody>
                  {Object.entries(product.specs).map(([label, value]) => (
                    <tr key={label}>
                      <th scope="row">{label}</th>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </div>
        </div>

        <section className="section pdp__related" id="related">
          <h2 className="title">محصولات مرتبط</h2>
          <ul className="product-grid pdp__related-grid">
            {related.map((item) => (
              <li key={item.id}>
                <ProductCard product={item} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
