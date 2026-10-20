import { useState } from 'react'
import Icon from './Icon.jsx'
import './Newsletter.css'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (event) => {
    event.preventDefault()
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    setStatus(valid ? 'done' : 'error')
  }

  return (
    <section className="section newsletter" id="newsletter">
      <div className="shell">
        <div className="newsletter__panel">
          <div className="newsletter__copy">
            <p className="eyebrow">خبرنامه زمان‌یار</p>
            <h2 className="title">از تخفیف‌ها باخبر شو</h2>
            <p className="lead">
              ماهی یک ایمیل، بدون تبلیغ اضافه: تخفیف‌های واقعی، ورود مدل‌های جدید و
              نکته‌های کوتاه برای انتخاب ساعت.
            </p>
          </div>

          {status === 'done' ? (
            <p className="newsletter__done" role="status">
              <span className="newsletter__done-icon">
                <Icon name="check" size={20} />
              </span>
              ثبت شد! از این پس تخفیف‌ها را زودتر از همه می‌بینی.
            </p>
          ) : (
            <form className="newsletter__form" onSubmit={handleSubmit} noValidate>
              <label className="sr-only" htmlFor="newsletter-email">
                ایمیل شما
              </label>
              <div className="newsletter__field">
                <Icon name="mail" size={18} />
                <input
                  id="newsletter-email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="ایمیل خود را بنویسید"
                  autoComplete="email"
                  aria-invalid={status === 'error'}
                  aria-describedby={status === 'error' ? 'newsletter-error' : undefined}
                />
                <button type="submit" className="btn btn--primary">
                  عضویت
                </button>
              </div>
              {status === 'error' ? (
                <p className="newsletter__error" id="newsletter-error" role="alert">
                  ایمیل را کامل و درست وارد کن، مثلاً name@example.com
                </p>
              ) : (
                <p className="newsletter__hint">هر زمان خواستی می‌توانی لغو عضویت کنی.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
