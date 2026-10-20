import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="shell notfound__inner">
        <span className="notfound__code latin-outline" aria-hidden="true">
          404
        </span>
        <h1 className="title">این صفحه در زمان‌یار پیدا نشد</h1>
        <p className="lead">
          شاید نشانی را اشتباه نوشته‌اید یا این محصول از ویترین برداشته شده است. از
          صفحه اصلی یا دسته‌بندی‌ها ادامه دهید.
        </p>
        <div className="notfound__actions">
          <Link to="/" className="btn btn--primary">
            بازگشت به صفحه اصلی
          </Link>
          <Link to="/#categories" className="btn btn--ghost">
            دیدن دسته‌بندی‌ها
          </Link>
        </div>
      </div>
    </div>
  )
}
