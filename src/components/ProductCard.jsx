import { Link } from 'react-router-dom'
import WatchArt from './WatchArt.jsx'
import Rating from './Rating.jsx'
import Icon from './Icon.jsx'
import { useCart } from '../context/CartContext.jsx'
import { toman, faDigits, discountPercent } from '../lib/format.js'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const { add, openCart } = useCart()
  const off = discountPercent(product.price, product.oldPrice)

  const handleAdd = () => {
    add(product.id)
    openCart()
  }

  return (
    <article className="product-card">
      <Link to={`/product/${product.slug}`} className="product-card__media" aria-label={product.name}>
        <span className="product-card__halo" aria-hidden="true" />
        <WatchArt art={product.art} label={product.brand} className="product-card__art" />
        {product.badge ? <span className="product-card__badge">{product.badge}</span> : null}
        {off ? <span className="product-card__off num">{faDigits(off)}٪ تخفیف</span> : null}
      </Link>

      <div className="product-card__body">
        <p className="product-card__brand latin">
          {product.brand} · {product.line}
        </p>

        <h3 className="product-card__name">
          <Link to={`/product/${product.slug}`}>{product.name}</Link>
        </h3>

        <Rating value={product.rating} reviews={product.reviews} size={13} />

        <div className="product-card__foot">
          <p className="product-card__price">
            <span className="num">{toman(product.price)}</span>
            {product.oldPrice ? <s className="num">{toman(product.oldPrice)}</s> : null}
          </p>

          <button type="button" className="product-card__add" onClick={handleAdd}>
            <Icon name="cart" size={16} />
            افزودن به سبد
          </button>
        </div>
      </div>
    </article>
  )
}
