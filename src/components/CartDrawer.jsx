import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Icon from './Icon.jsx'
import WatchArt from './WatchArt.jsx'
import { FREE_SHIPPING_THRESHOLD, useCart } from '../context/CartContext.jsx'
import { toman, faDigits } from '../lib/format.js'
import './CartDrawer.css'

export default function CartDrawer() {
  const { lines, isOpen, closeCart, setQuantity, remove, subtotal, shipping, total, count } = useCart()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  /* با تغییر صفحه، کشو بسته شود تا قفل اسکرول روی صفحه بعد نماند */
  useEffect(() => {
    closeCart()
  }, [pathname, closeCart])

  useEffect(() => {
    if (!isOpen) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') closeCart()
    }
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [isOpen, closeCart])

  const remaining = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0)

  const goToCheckout = () => {
    closeCart()
    navigate('/checkout')
  }

  return (
    <div className={`cart ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
      <div className="cart__scrim" onClick={closeCart} />

      <aside className="cart__panel" role="dialog" aria-modal="true" aria-label="سبد خرید">
        <header className="cart__head">
          <div>
            <h2 className="cart__title">سبد خرید</h2>
            <p className="cart__sub num">
              {count > 0 ? `${faDigits(count)} کالا در سبد شما` : 'هنوز کالایی انتخاب نکرده‌اید'}
            </p>
          </div>
          <button type="button" className="cart__close" onClick={closeCart} aria-label="بستن سبد خرید">
            <Icon name="close" size={20} />
          </button>
        </header>

        <div className="cart__body">
          {lines.length === 0 ? (
            <div className="cart__empty">
              <span className="cart__empty-mark">
                <Icon name="cart" size={30} />
              </span>
              <p>سبد خرید خالی است. از میان ساعت‌های منتخب یکی را انتخاب کن.</p>
              <button type="button" className="btn btn--primary" onClick={closeCart}>
                دیدن محصولات
              </button>
            </div>
          ) : (
            <ul className="cart__lines">
              {lines.map((line) => (
                <li key={line.id} className="cart__line">
                  <span className="cart__thumb">
                    <WatchArt art={line.product.art} label={line.product.brand} showDate={false} />
                  </span>

                  <div className="cart__info">
                    <p className="cart__name">{line.product.name}</p>
                    <p className="cart__brand latin">
                      {line.product.brand} · {line.product.line}
                    </p>

                    <div className="cart__controls">
                      <div className="stepper">
                        <button
                          type="button"
                          onClick={() => setQuantity(line.id, line.quantity + 1)}
                          aria-label={`افزودن یک عدد به ${line.product.name}`}
                        >
                          <Icon name="plus" size={15} />
                        </button>
                        <span className="stepper__value num">{faDigits(line.quantity)}</span>
                        <button
                          type="button"
                          onClick={() => setQuantity(line.id, line.quantity - 1)}
                          aria-label={`کاهش یک عدد از ${line.product.name}`}
                        >
                          <Icon name="minus" size={15} />
                        </button>
                      </div>

                      <button
                        type="button"
                        className="cart__remove"
                        onClick={() => remove(line.id)}
                        aria-label={`حذف ${line.product.name} از سبد`}
                      >
                        <Icon name="trash" size={17} />
                      </button>
                    </div>
                  </div>

                  <span className="cart__price num">{toman(line.product.price * line.quantity)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 ? (
          <footer className="cart__foot">
            {remaining > 0 ? (
              <p className="cart__note num">
                {toman(remaining)} تا ارسال رایگان باقی مانده است.
              </p>
            ) : (
              <p className="cart__note cart__note--good">
                <Icon name="check" size={16} /> ارسال این سفارش رایگان است.
              </p>
            )}

            <dl className="cart__totals">
              <div>
                <dt>جمع کالاها</dt>
                <dd className="num">{toman(subtotal)}</dd>
              </div>
              <div>
                <dt>هزینه ارسال</dt>
                <dd className="num">{shipping === 0 ? 'رایگان' : toman(shipping)}</dd>
              </div>
              <div className="cart__totals-final">
                <dt>مبلغ قابل پرداخت</dt>
                <dd className="num">{toman(total)}</dd>
              </div>
            </dl>

            <button type="button" className="btn btn--primary btn--block" onClick={goToCheckout}>
              ادامه فرآیند خرید
              <Icon name="arrowLeft" size={18} />
            </button>
          </footer>
        ) : null}
      </aside>
    </div>
  )
}
