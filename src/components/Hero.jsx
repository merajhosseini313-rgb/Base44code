import { Link } from 'react-router-dom'
import WatchArt from './WatchArt.jsx'
import Icon from './Icon.jsx'
import { PRODUCTS, findProduct } from '../data/catalog.js'
import { toman } from '../lib/format.js'
import './Hero.css'

const HERO_SLUG = 'gen5-smart'
const VARIANT_SLUG = 'classic-38'

/*
 * ساختار هیرو عمداً در دو ظرف جدا نوشته شده است:
 *   data-hero-part="copy"  → تیتر، قیمت و دکمه‌ها
 *   data-hero-part="stage" → تصویر ساعت مرکزی (با ظرف تودرتوی data-hero-part="watch")
 * در نسخه بعدی، چرخش سه‌بعدی ساعت با اسکرول روی ظرف "watch" و تغییر متن روی ظرف
 * "copy" اعمال می‌شود؛ نیازی به تغییر ساختار نیست.
 */
export default function Hero() {
  const heroProduct = findProduct(HERO_SLUG) || PRODUCTS[0]
  const variant = findProduct(VARIANT_SLUG) || PRODUCTS[1]

  return (
    <section className="hero" id="hero">
      <div className="shell">
        <div className="hero__studio">
          <span className="hero__side" aria-hidden="true">
            زمان‌یار · ساعت مچی · تهران
          </span>

          <div className="hero__type" data-hero-part="copy">
            <p className="eyebrow">مجموعه زمستان ۱۴۰۵ — زمان‌یار</p>

            <h1 className="hero__title">
              زمان را با خودت
              <span className="hero__title-em">همراه کن</span>
            </h1>

            <p className="hero__lead">
              ساعت‌ها را یکی‌یکی انتخاب می‌کنیم: موومنت سالم، قاب بی‌خط‌وخش و قیمتی که
              روی آن نوشته شده. زمان‌یار جایی است که ساعت را با خیال راحت می‌خری.
            </p>

            <div className="hero__feature">
              <span className="hero__feature-name">
                <span className="hero__feature-brand latin">ZAMANYAR</span>
                <span className="hero__feature-line latin-outline">GEN 5</span>
              </span>
              <span className="hero__feature-price num">{toman(heroProduct.price)}</span>
            </div>

            <div className="hero__cta">
              <Link to="/#featured" className="btn btn--primary">
                مشاهده محصولات
                <Icon name="arrowDown" size={17} />
              </Link>
              <Link to="/#why" className="btn btn--ghost">
                درباره زمان‌یار
              </Link>
            </div>
          </div>

          <div className="hero__stage" data-hero-part="stage">
            <span className="hero__ring" aria-hidden="true" />
            <span className="hero__word latin-outline" aria-hidden="true">
              ZAMANYAR
            </span>

            <div className="hero__watch" data-hero-part="watch">
              <WatchArt art={heroProduct.art} label={heroProduct.brand} />
              <span className="hero__shadow" aria-hidden="true" />
            </div>

            <Link className="hero__variant" to={`/product/${variant.slug}`}>
              <span className="hero__variant-art">
                <WatchArt art={variant.art} label={variant.brand} showDate={false} />
              </span>
              <span className="hero__variant-meta">
                <span className="hero__variant-label">سری کلاسیک ۳۸</span>
                <span className="hero__variant-price num">{toman(variant.price)}</span>
              </span>
            </Link>
          </div>

          <div className="hero__cue">
            <Link to="/#trust" className="hero__cue-link">
              <span>کمی پایین‌تر را ببین</span>
              <Icon name="arrowDown" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
