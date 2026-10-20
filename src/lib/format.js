const FA_DIGITS = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']

/** هر رقم لاتین را به رقم فارسی تبدیل می‌کند. */
export function faDigits(value) {
  return String(value).replace(/\d/g, (digit) => FA_DIGITS[Number(digit)])
}

/** عدد را با جداکننده هزارگان فارسی برمی‌گرداند: 3450000 → ۳٬۴۵۰٬۰۰۰ */
export function faNumber(value) {
  const grouped = Number(value).toLocaleString('en-US')
  return faDigits(grouped).replace(/,/g, '٬')
}

/** قیمت تومانی آماده نمایش. */
export function toman(value) {
  return `${faNumber(value)} تومان`
}

/** درصد تخفیف برای نمایش روی کارت محصول. */
export function discountPercent(price, oldPrice) {
  if (!oldPrice || oldPrice <= price) return null
  return Math.round(((oldPrice - price) / oldPrice) * 100)
}
