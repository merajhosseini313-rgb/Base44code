import { useId } from 'react'
import { faDigits } from '../lib/format.js'
import './Rating.css'

const STAR_PATH =
  'm12 3.6 2.7 5.5 6 .9-4.4 4.2 1.1 6-5.4-2.9-5.4 2.9 1.1-6-4.4-4.2 6-.9z'

/** امتیاز ستاره‌ای با پشتیبانی از نیم‌ستاره. */
export default function Rating({ value, reviews, showValue = true, size = 15 }) {
  const uid = useId().replace(/:/g, '')

  return (
    <div className="rating" aria-label={`امتیاز ${faDigits(value.toFixed(1))} از ۵`}>
      <span className="rating__stars" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((index) => {
          const rest = value - index
          const fill =
            rest >= 0.75
              ? 'currentColor'
              : rest >= 0.25
                ? `url(#half-${uid}-${index})`
                : 'none'
          return (
            <svg key={index} viewBox="0 0 24 24" width={size} height={size}>
              {fill.startsWith('url') ? (
                <defs>
                  <linearGradient id={`half-${uid}-${index}`}>
                    <stop offset="50%" stopColor="currentColor" />
                    <stop offset="50%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              ) : null}
              <path
                d={STAR_PATH}
                fill={fill}
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinejoin="round"
              />
            </svg>
          )
        })}
      </span>
      {showValue ? <b className="rating__value num">{faDigits(value.toFixed(1))}</b> : null}
      {reviews ? <span className="rating__count num">({faDigits(reviews)} نظر)</span> : null}
    </div>
  )
}
