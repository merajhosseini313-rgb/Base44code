import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import WatchArt from '../components/WatchArt.jsx'
import { useCart } from '../context/CartContext.jsx'
import { faDigits, toman } from '../lib/format.js'
import './Checkout.css'

const PROVINCES = [
  'تهران',
  'البرز',
  'اصفهان',
  'فارس',
  'خراسان رضوی',
  'آذربایجان شرقی',
  'آذربایجان غربی',
  'گیلان',
  'مازندران',
  'یزد',
  'کرمان',
  'سایر استان‌ها',
]

const PAYMENTS = [
  { value: 'gateway', label: 'پرداخت اینترنتی از درگاه بانکی' },
  { value: 'cod', label: 'پرداخت در محل (تهران و کرج)' },
  { value: 'transfer', label: 'کارت به کارت' },
]

const LATIN_DIGITS = '0123456789'
const toLatin = (value) =>
  String(value).replace(/[۰-۹]/g, (digit) => LATIN_DIGITS['۰۱۲۳۴۵۶۷۸۹'.indexOf(digit)])

const EMPTY_FORM = {
  name: '',
  phone: '',
  province: PROVINCES[0],
  city: '',
  address: '',
  postal: '',
  payment: 'gateway',
  note: '',
}

export default function Checkout() {
  const { lines, subtotal, shipping, total, count, clear } = useCart()
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [order, setOrder] = useState(null)
  const navigate = useNavigate()

  const update = (field) => (event) => {
    const { value } = event.target
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (form.name.trim().length < 3) next.name = 'نام و نام خانوادگی را کامل بنویسید.'
    if (!/^0\d{10}$/.test(toLatin(form.phone).replace(/\s|-/g, '')))
      next.phone = 'شماره تماس را با ۰۹ شروع کنید و ۱۱ رقم باشد.'
    if (form.city.trim().length < 2) next.city = 'نام شهر را بنویسید.'
    if (form.address.trim().length < 10) next.address = 'نشانی را کامل‌تر بنویسید.'
    if (form.postal.trim() && !/^\d{10}$/.test(toLatin(form.postal).replace(/\s|-/g, '')))
      next.postal = 'کد پستی باید ۱۰ رقم باشد.'
    return next
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setOrder({
      code: `ZMY-${faDigits(1405)}-${faDigits(Math.floor(1000 + Math.random() * 8999))}`,
      amount: total,
      items: count,
      payment: PAYMENTS.find((item) => item.value === form.payment)?.label,
    })
    clear()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (order) {
    return (
      <div className="checkout">
        <div className="shell checkout__done">
          <span className="checkout__done-icon">
            <Icon name="check" size={30} />
          </span>
          <h1 className="title">سفارش ثبت شد</h1>
          <p className="lead">
            سپاس از خرید شما. کارشناس زمان‌یار تا پایان امروز برای تأیید نهایی تماس می‌گیرد.
          </p>

          <dl className="checkout__done-facts">
            <div>
              <dt>شماره سفارش</dt>
              <dd className="latin">{order.code}</dd>
            </div>
            <div>
              <dt>تعداد کالا</dt>
              <dd className="num">{faDigits(order.items)} عدد</dd>
            </div>
            <div>
              <dt>مبلغ پرداخت</dt>
              <dd className="num">{toman(order.amount)}</dd>
            </div>
            <div>
              <dt>روش پرداخت</dt>
              <dd>{order.payment}</dd>
            </div>
          </dl>

          <div className="checkout__done-actions">
            <Link to="/" className="btn btn--primary">
              بازگشت به صفحه اصلی
            </Link>
            <button type="button" className="btn btn--ghost" onClick={() => navigate('/#featured')}>
              ادامه خرید
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (lines.length === 0) {
    return (
      <div className="checkout">
        <div className="shell checkout__empty">
          <h1 className="title">سبد خرید خالی است</h1>
          <p className="lead">برای تکمیل سفارش، اول یک ساعت را به سبد اضافه کنید.</p>
          <Link to="/#featured" className="btn btn--primary">
            مشاهده محصولات
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="checkout">
      <div className="shell">
        <header className="checkout__head">
          <p className="eyebrow">مرحله پایانی خرید</p>
          <h1 className="title">تکمیل سفارش</h1>
          <p className="lead">
            اطلاعات ارسال را وارد کنید؛ پیش از ارسال، برای تأیید نشانی با شما تماس می‌گیریم.
          </p>
        </header>

        <form className="checkout__grid" onSubmit={handleSubmit} noValidate>
          <div className="checkout__form">
            <fieldset className="checkout__fieldset">
              <legend className="checkout__legend">اطلاعات گیرنده</legend>

              <div className="field">
                <label htmlFor="name">نام و نام خانوادگی</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={update('name')}
                  placeholder="مثلاً سارا محمدی"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name ? <p className="field__error">{errors.name}</p> : null}
              </div>

              <div className="field">
                <label htmlFor="phone">شماره تماس</label>
                <input
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={update('phone')}
                  placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                  inputMode="tel"
                  autoComplete="tel"
                  aria-invalid={Boolean(errors.phone)}
                />
                {errors.phone ? <p className="field__error">{errors.phone}</p> : null}
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="province">استان</label>
                  <select id="province" name="province" value={form.province} onChange={update('province')}>
                    {PROVINCES.map((province) => (
                      <option key={province} value={province}>
                        {province}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="city">شهر</label>
                  <input
                    id="city"
                    name="city"
                    value={form.city}
                    onChange={update('city')}
                    placeholder="مثلاً تهران"
                    autoComplete="address-level2"
                    aria-invalid={Boolean(errors.city)}
                  />
                  {errors.city ? <p className="field__error">{errors.city}</p> : null}
                </div>
              </div>
            </fieldset>

            <fieldset className="checkout__fieldset">
              <legend className="checkout__legend">نشانی تحویل</legend>

              <div className="field">
                <label htmlFor="address">نشانی کامل</label>
                <textarea
                  id="address"
                  name="address"
                  rows="3"
                  value={form.address}
                  onChange={update('address')}
                  placeholder="خیابان، کوچه، پلاک و واحد"
                  autoComplete="street-address"
                  aria-invalid={Boolean(errors.address)}
                />
                {errors.address ? <p className="field__error">{errors.address}</p> : null}
              </div>

              <div className="field">
                <label htmlFor="postal">کد پستی (اختیاری)</label>
                <input
                  id="postal"
                  name="postal"
                  value={form.postal}
                  onChange={update('postal')}
                  placeholder="۱۰ رقم"
                  inputMode="numeric"
                  aria-invalid={Boolean(errors.postal)}
                />
                {errors.postal ? <p className="field__error">{errors.postal}</p> : null}
              </div>
            </fieldset>

            <fieldset className="checkout__fieldset">
              <legend className="checkout__legend">روش پرداخت</legend>
              <div className="checkout__payments">
                {PAYMENTS.map((payment) => (
                  <label
                    key={payment.value}
                    className={`checkout__payment ${form.payment === payment.value ? 'is-active' : ''}`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={payment.value}
                      checked={form.payment === payment.value}
                      onChange={update('payment')}
                    />
                    <span>{payment.label}</span>
                  </label>
                ))}
              </div>

              <div className="field">
                <label htmlFor="note">یادداشت برای ما (اختیاری)</label>
                <input
                  id="note"
                  name="note"
                  value={form.note}
                  onChange={update('note')}
                  placeholder="مثلاً بسته‌بندی کادویی"
                />
              </div>
            </fieldset>
          </div>

          <aside className="checkout__summary" aria-label="خلاصه سفارش">
            <h2 className="checkout__summary-title num">
              خلاصه سفارش ({faDigits(count)} کالا)
            </h2>

            <ul className="checkout__lines">
              {lines.map((line) => (
                <li key={line.id}>
                  <span className="checkout__thumb">
                    <WatchArt art={line.product.art} label={line.product.brand} showDate={false} />
                  </span>
                  <span className="checkout__line-meta">
                    <span className="checkout__line-name">{line.product.name}</span>
                    <span className="checkout__line-qty num">
                      {faDigits(line.quantity)} × {toman(line.product.price)}
                    </span>
                  </span>
                  <span className="checkout__line-price num">
                    {toman(line.product.price * line.quantity)}
                  </span>
                </li>
              ))}
            </ul>

            <dl className="checkout__totals">
              <div>
                <dt>جمع کالاها</dt>
                <dd className="num">{toman(subtotal)}</dd>
              </div>
              <div>
                <dt>هزینه ارسال</dt>
                <dd className="num">{shipping === 0 ? 'رایگان' : toman(shipping)}</dd>
              </div>
              <div className="checkout__totals-final">
                <dt>مبلغ قابل پرداخت</dt>
                <dd className="num">{toman(total)}</dd>
              </div>
            </dl>

            <button type="submit" className="btn btn--primary btn--block">
              ثبت سفارش
              <Icon name="check" size={18} />
            </button>
            <p className="checkout__summary-note">
              با ثبت سفارش، شرایط خرید و بازگشت کالای زمان‌یار را می‌پذیرید.
            </p>
          </aside>
        </form>
      </div>
    </div>
  )
}
