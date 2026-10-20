import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import { CATEGORIES } from '../data/catalog.js'
import './Footer.css'

const QUICK_LINKS = [
  { label: 'صفحه اصلی', to: '/' },
  { label: 'پرفروش‌ترین‌ها', to: '/#featured' },
  { label: 'جدیدترین‌ها', to: '/#fresh' },
  { label: 'راهنمای انتخاب ساعت', to: '/#blog' },
  { label: 'نظر مشتریان', to: '/#testimonials' },
]

const SOCIALS = [
  { icon: 'instagram', label: 'اینستاگرام زمان‌یار', href: 'https://instagram.com/' },
  { icon: 'telegram', label: 'تلگرام زمان‌یار', href: 'https://t.me/' },
  { icon: 'whatsapp', label: 'واتس‌اپ زمان‌یار', href: 'https://wa.me/' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__grid">
        <section className="footer__col footer__col--about">
          <p className="footer__brand">
            <span className="footer__brand-fa">زمان‌یار</span>
            <span className="footer__brand-latin latin">ZAMANYAR</span>
          </p>
          <p className="footer__text">
            زمان‌یار یک فروشگاه تخصصی ساعت است: ساعت‌ها را خودمان انتخاب و بررسی می‌کنیم،
            بی‌واسطه به دستت می‌رسانیم و بعد از خرید هم کنارت می‌مانیم.
          </p>
          <ul className="footer__social">
            {SOCIALS.map((item) => (
              <li key={item.icon}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={item.label}
                  className="footer__social-link"
                >
                  <Icon name={item.icon} size={19} />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <nav className="footer__col" aria-label="لینک‌های سریع">
          <h3 className="footer__head">لینک‌های سریع</h3>
          <ul className="footer__list">
            {QUICK_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="footer__link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__col" aria-label="دسته‌بندی‌ها">
          <h3 className="footer__head">دسته‌بندی‌ها</h3>
          <ul className="footer__list">
            {CATEGORIES.map((category) => (
              <li key={category.slug}>
                <Link to={`/category/${category.slug}`} className="footer__link">
                  ساعت {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section className="footer__col">
          <h3 className="footer__head">تماس با ما</h3>
          <ul className="footer__list footer__list--contact">
            <li>
              <Icon name="pin" size={17} />
              <span>تهران، خیابان ولی‌عصر، نزدیک پارک ساعی، پلاک ۱۲۴۰</span>
            </li>
            <li>
              <Icon name="phone" size={17} />
              <a href="tel:02191002245" className="footer__link num">
                ۰۲۱-۹۱۰۰۲۲۴۵
              </a>
            </li>
            <li>
              <Icon name="mail" size={17} />
              <a href="mailto:hello@zamanyar.ir" className="footer__link latin">
                hello@zamanyar.ir
              </a>
            </li>
            <li>
              <Icon name="clock" size={17} />
              <span>شنبه تا پنجشنبه، ۱۰ تا ۱۹</span>
            </li>
          </ul>
        </section>
      </div>

      <div className="shell footer__bottom">
        <p>© ۱۴۰۵ زمان‌یار — همه حقوق محفوظ است.</p>
        <p className="footer__promise">پرداخت امن از طریق درگاه بانکی · ارسال به سراسر ایران</p>
      </div>
    </footer>
  )
}
