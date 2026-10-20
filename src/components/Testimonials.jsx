import Rating from './Rating.jsx'
import { TESTIMONIALS } from '../data/catalog.js'
import './Testimonials.css'

export default function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="shell">
        <ul className="testimonials__list">
          {TESTIMONIALS.map((item) => (
            <li className="testimonial" key={item.name}>
              <span className="testimonial__quote" aria-hidden="true">
                ”
              </span>
              <Rating value={item.rating} size={14} showValue={false} />
              <p className="testimonial__text">{item.text}</p>
              <footer className="testimonial__foot">
                <span className="testimonial__avatar" aria-hidden="true">
                  {item.name.slice(0, 1)}
                </span>
                <span className="testimonial__who">
                  <b>{item.name}</b>
                  <span>{item.city}</span>
                </span>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
