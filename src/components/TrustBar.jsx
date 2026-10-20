import { TRUST_ITEMS } from '../data/catalog.js'
import Icon from './Icon.jsx'
import './TrustBar.css'

export default function TrustBar() {
  return (
    <section className="trust" id="trust" aria-label="تضمین‌های خرید">
      <div className="shell">
        <ul className="trust__list">
          {TRUST_ITEMS.map((item) => (
            <li className="trust__item" key={item.title}>
              <span className="trust__icon">
                <Icon name={item.icon} size={22} />
              </span>
              <span className="trust__meta">
                <b className="trust__title">{item.title}</b>
                <span className="trust__caption">{item.caption}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
