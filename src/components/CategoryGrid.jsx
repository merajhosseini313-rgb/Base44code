import { Link } from 'react-router-dom'
import WatchArt from './WatchArt.jsx'
import Icon from './Icon.jsx'
import { CATEGORIES } from '../data/catalog.js'
import { faDigits } from '../lib/format.js'
import './CategoryGrid.css'

export default function CategoryGrid() {
  return (
    <ul className="categories">
      {CATEGORIES.map((category) => (
        <li key={category.slug} className="categories__item">
          <Link to={`/category/${category.slug}`} className="category-card">
            <span className="category-card__art">
              <WatchArt art={category.art} label="" showDate={false} />
            </span>

            <span className="category-card__body">
              <span className="category-card__name">ساعت {category.name}</span>
              <span className="category-card__caption">{category.caption}</span>
              <span className="category-card__meta">
                <span className="num">{faDigits(category.count)} مدل</span>
                <Icon name="arrowLeft" size={16} />
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
