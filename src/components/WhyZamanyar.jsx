import { Link } from 'react-router-dom'
import WatchArt from './WatchArt.jsx'
import Icon from './Icon.jsx'
import { REASONS } from '../data/catalog.js'
import './WhyZamanyar.css'

export default function WhyZamanyar() {
  return (
    <section className="why section" id="why">
      <div className="shell why__grid">
        <div className="why__visual">
          <span className="why__frame" aria-hidden="true" />
          <span className="why__art">
            <WatchArt
              art={{ shape: 'round', case: 'bronze', dial: 'ivory', strap: 'cognac', markers: 'batons' }}
              label="HALCYON"
            />
          </span>
          <p className="why__note">
            هر ساعت پیش از ارسال باز می‌شود، موومنتش بررسی و زمانش تنظیم می‌شود.
          </p>
        </div>

        <div className="why__copy">
          <p className="eyebrow">فروشگاه ما، انتخاب ما</p>
          <h2 className="title">چرا زمان‌یار؟</h2>
          <p className="lead why__lead">
            زمان‌یار یک فروشگاه کوچک با سلیقه‌ای مشخص است؛ همین باعث می‌شود هر ساعت را
            خودمان ببینیم، با آن کار کنیم و بعد بفروشیم. چیزی که به دستت می‌رسد، همان
            چیزی است که برای خودمان هم انتخاب می‌کردیم.
          </p>

          <ul className="why__list">
            {REASONS.map((reason) => (
              <li className="why__item" key={reason.title}>
                <span className="why__icon">
                  <Icon name={reason.icon} size={20} />
                </span>
                <div>
                  <h3 className="why__item-title">{reason.title}</h3>
                  <p className="why__item-text">{reason.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <Link to="/category/classic" className="btn btn--clay why__cta">
            ساعت‌های منتخب را ببین
            <Icon name="arrowLeft" size={17} />
          </Link>
        </div>
      </div>
    </section>
  )
}
