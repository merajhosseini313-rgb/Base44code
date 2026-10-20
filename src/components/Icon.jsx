/* آیکون‌های خطی — بدون وابستگی بیرونی */

const PATHS = {
  shield: <path d="M12 3.2 5.6 5.8v5.1c0 4 2.7 7.6 6.4 8.9 3.7-1.3 6.4-4.9 6.4-8.9V5.8L12 3.2Z" />,
  shieldCheck: (
    <>
      <path d="M12 3.2 5.6 5.8v5.1c0 4 2.7 7.6 6.4 8.9 3.7-1.3 6.4-4.9 6.4-8.9V5.8L12 3.2Z" />
      <path d="m9.2 11.8 2 2 3.6-3.7" />
    </>
  ),
  truck: (
    <>
      <path d="M2.8 7.4h10.4v8.2H2.8z" />
      <path d="M13.2 10.2h3.6l3 3v2.4h-6.6z" />
      <circle cx="6.6" cy="17.6" r="1.7" />
      <circle cx="16.4" cy="17.6" r="1.7" />
    </>
  ),
  return: (
    <>
      <path d="M4 7.6h9.4a4.4 4.4 0 0 1 0 8.8H8.2" />
      <path d="m7.4 13.2-3.4 3.2 3.4 3.2" />
    </>
  ),
  headset: (
    <>
      <path d="M4.6 14.6v-3a7.4 7.4 0 0 1 14.8 0v3" />
      <path d="M4.6 14.2h2.2v4.4H6a1.4 1.4 0 0 1-1.4-1.4z" />
      <path d="M19.4 14.2h-2.2v4.4H18a1.4 1.4 0 0 0 1.4-1.4z" />
      <path d="M17.2 18.6v.6a2 2 0 0 1-2 2h-2.4" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="7.6" />
      <circle cx="12" cy="12" r="3.4" />
      <circle cx="12" cy="12" r="0.6" />
    </>
  ),
  tag: (
    <>
      <path d="M11.4 3.6H20v8.6l-8.4 8.4-8.6-8.6z" />
      <circle cx="16.2" cy="7.4" r="1.4" />
    </>
  ),
  chat: (
    <>
      <path d="M4.4 11.2c0-3.8 3.4-6.8 7.6-6.8s7.6 3 7.6 6.8-3.4 6.8-7.6 6.8c-.9 0-1.8-.1-2.6-.4l-4.1 1.9 1-3.2c-1.2-1.2-1.9-2.9-1.9-5.1Z" />
      <path d="M9.2 11.4h5.6" />
    </>
  ),
  cart: (
    <>
      <path d="M3.4 4.6h2.3l2.2 9.8h9.5l1.9-7.2H6.2" />
      <circle cx="9.4" cy="18.4" r="1.4" />
      <circle cx="16.6" cy="18.4" r="1.4" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.2" />
      <path d="m15.6 15.6 3.8 3.8" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7.6h16" />
      <path d="M4 12h16" />
      <path d="M4 16.4h10" />
    </>
  ),
  close: (
    <>
      <path d="m6.4 6.4 11.2 11.2" />
      <path d="M17.6 6.4 6.4 17.6" />
    </>
  ),
  arrowDown: (
    <>
      <path d="M12 4.8v14.4" />
      <path d="m6.6 13.8 5.4 5.4 5.4-5.4" />
    </>
  ),
  arrowLeft: (
    <>
      <path d="M19 12H5" />
      <path d="m10.6 6.4-5.6 5.6 5.6 5.6" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="m13.4 6.4 5.6 5.6-5.6 5.6" />
    </>
  ),
  plus: (
    <>
      <path d="M12 5.6v12.8" />
      <path d="M5.6 12h12.8" />
    </>
  ),
  minus: <path d="M5.6 12h12.8" />,
  trash: (
    <>
      <path d="M4.8 7.2h14.4" />
      <path d="M9.4 7.2V5.2h5.2v2" />
      <path d="M6.6 7.2 7.6 19h8.8l1-11.8" />
    </>
  ),
  check: <path d="m5.4 12.4 4.2 4.2 9-9.4" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="7.8" />
      <path d="M12 7.6V12l3 1.8" />
    </>
  ),
  phone: (
    <path d="M6.4 4.4h3l1.6 4-2 1.4a10 10 0 0 0 5.2 5.2l1.4-2 4 1.6v3a1.6 1.6 0 0 1-1.8 1.6A15.4 15.4 0 0 1 4.8 6.2 1.6 1.6 0 0 1 6.4 4.4Z" />
  ),
  mail: (
    <>
      <rect x="3.4" y="5.6" width="17.2" height="12.8" rx="2" />
      <path d="m4.4 7.4 7.6 5.6 7.6-5.6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 20.4c3.6-4 5.4-6.9 5.4-9.4a5.4 5.4 0 1 0-10.8 0c0 2.5 1.8 5.4 5.4 9.4Z" />
      <circle cx="12" cy="10.8" r="2.1" />
    </>
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4.6" />
      <circle cx="12" cy="12" r="3.7" />
      <circle cx="16.6" cy="7.5" r="0.9" />
    </>
  ),
  telegram: <path d="M20.4 5 3.8 11.6l4.4 1.6 1.6 4.6 2.6-2.8 4.4 3.4z" />,
  whatsapp: (
    <>
      <path d="M20 12a8 8 0 0 1-11.8 7.1L4 20.4l1.4-4A8 8 0 1 1 20 12Z" />
      <path d="M9 9.4c0 3 2.6 5.6 5.6 5.6" />
    </>
  ),
}

const FILLED = { star: true, telegram: true }

const STAR = (
  <path d="m12 3.6 2.7 5.5 6 .9-4.4 4.2 1.1 6-5.4-2.9-5.4 2.9 1.1-6-4.4-4.2 6-.9z" />
)

export default function Icon({ name, size = 22, className = '', title }) {
  const filled = FILLED[name]
  const content = name === 'star' ? STAR : PATHS[name]
  if (!content) return null

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`icon ${className}`.trim()}
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
    >
      {title ? <title>{title}</title> : null}
      {content}
    </svg>
  )
}
