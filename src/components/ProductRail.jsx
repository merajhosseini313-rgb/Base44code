import ProductCard from './ProductCard.jsx'
import './ProductRail.css'

/** ریل افقی جدیدترین‌ها — روی موبایل با کشیدن و روی دسکتاپ با اسکرول. */
export default function ProductRail({ products, label }) {
  return (
    <ul className="rail" aria-label={label}>
      {products.map((product) => (
        <li className="rail__item" key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  )
}
