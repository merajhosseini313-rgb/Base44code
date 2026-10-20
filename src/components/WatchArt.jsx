import { useId } from 'react'

/* پالت‌های گرم — بدون طلایی، مشکی یا سرمه‌ای */
const CASE_TONES = {
  sand: ['#f0e3d1', '#d3b899', '#b1957a'],
  steel: ['#ded8ce', '#bfb7ac', '#948b80'],
  bronze: ['#dcb894', '#bd9068', '#8f6a4a'],
  graphite: ['#c2bbb2', '#a09890', '#7b7269'],
  rose: ['#eed3c4', '#d9b0a0', '#b58a79'],
}

const DIAL_TONES = {
  ivory: ['#fdf9f3', '#f0e6d8'],
  cream: ['#f6ecdf', '#e6d8c6'],
  sand: ['#eee0cd', '#dcc9b1'],
  clay: ['#e0c0a6', '#c69f82'],
  taupe: ['#d6c8ba', '#b9a897'],
  espresso: ['#5b483c', '#3d3028'],
}

const STRAP_TONES = {
  cognac: ['#a9663f', '#8a4f2f'],
  tan: ['#cb9a6c', '#ab7c52'],
  espresso: ['#5a4232', '#3c2b1f'],
  sand: ['#e2cfb4', '#c9ae8d'],
  clay: ['#bd7c5b', '#9c5e40'],
}

const MARKERS_INK = '#2d2621'
const MARKERS_LIGHT = '#f6ece0'

const GEO = {
  round: { half: 96, dial: 76, caseTop: 139, caseBottom: 331 },
  slim: { half: 86, dial: 68, caseTop: 149, caseBottom: 321 },
  cushion: { half: 94, dial: 76, caseTop: 141, caseBottom: 329 },
}

const polar = (cx, cy, r, deg) => {
  const rad = ((deg - 90) * Math.PI) / 180
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)]
}

/**
 * نقاشی برداری ساعت — همان تصویر در اندازه کارت و در قاب بزرگ هیرو استفاده می‌شود.
 * همه رنگ‌ها از پالت گرم پاس داده می‌شوند تا هویت بصری یکسان بماند.
 */
export default function WatchArt({ art, label = 'ZAMANYAR', className = '', showDate = true }) {
  const uid = useId().replace(/:/g, '')
  const shape = art?.shape || 'round'
  const geo = GEO[shape] || GEO.round

  const caseTone = CASE_TONES[art?.case] || CASE_TONES.sand
  const dialTone = DIAL_TONES[art?.dial] || DIAL_TONES.ivory
  const strapTone = STRAP_TONES[art?.strap] || STRAP_TONES.cognac

  const darkDial = art?.dial === 'espresso' || art?.dial === 'taupe'
  const markInk = darkDial ? MARKERS_LIGHT : MARKERS_INK
  const handInk = darkDial ? MARKERS_LIGHT : MARKERS_INK

  const cx = 150
  const cy = 235
  const { half, dial, caseTop, caseBottom } = geo

  const strapTop = `M122 4 C116 68 116 ${caseTop - 34} 120 ${caseTop + 24} L180 ${
    caseTop + 24
  } C184 ${caseTop - 34} 184 68 178 4 Z`
  const strapBottom = `M120 ${caseBottom - 24} C116 ${caseBottom + 34} 116 ${
    caseBottom + 68
  } 122 466 L178 466 C184 ${caseBottom + 68} 184 ${caseBottom + 34} 180 ${
    caseBottom - 24
  } Z`

  const caseShape =
    shape === 'cushion' ? (
      <rect
        x={cx - half}
        y={cy - half}
        width={half * 2}
        height={half * 2}
        rx={half * 0.55}
        fill={`url(#case-${uid})`}
        stroke="rgba(45,38,33,0.18)"
        strokeWidth="1"
      />
    ) : (
      <circle
        cx={cx}
        cy={cy}
        r={half}
        fill={`url(#case-${uid})`}
        stroke="rgba(45,38,33,0.18)"
        strokeWidth="1"
      />
    )

  const dialShape =
    shape === 'cushion' ? (
      <rect
        x={cx - dial}
        y={cy - dial}
        width={dial * 2}
        height={dial * 2}
        rx={dial * 0.5}
        fill={`url(#dial-${uid})`}
      />
    ) : (
      <circle cx={cx} cy={cy} r={dial} fill={`url(#dial-${uid})`} />
    )

  const markerStyle = art?.markers === 'dots' ? 'dots' : 'batons'
  const markers = Array.from({ length: 12 }, (_, index) => {
    const angle = index * 30
    const cardinal = index % 3 === 0
    if (markerStyle === 'dots') {
      const [x, y] = polar(cx, cy, dial - 18, angle)
      return (
        <circle
          key={index}
          cx={x}
          cy={y}
          r={cardinal ? 3.4 : 2.3}
          fill={markInk}
          opacity={cardinal ? 0.9 : 0.55}
        />
      )
    }
    const inner = dial - (cardinal ? 22 : 16)
    const outer = dial - 9
    const [x1, y1] = polar(cx, cy, inner, angle)
    const [x2, y2] = polar(cx, cy, outer, angle)
    return (
      <line
        key={index}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={markInk}
        strokeWidth={cardinal ? 4 : 2}
        strokeLinecap="round"
        opacity={cardinal ? 0.92 : 0.5}
      />
    )
  })

  /* کمان نور بالای قاب — حس فلز صیقلی */
  const [hx1, hy1] = polar(cx, cy, half - 5, 208)
  const [hx2, hy2] = polar(cx, cy, half - 5, 332)
  const highlight = `M ${hx1} ${hy1} A ${half - 5} ${half - 5} 0 0 1 ${hx2} ${hy2}`

  const handBase = dial - 12

  return (
    <svg
      viewBox="0 0 300 470"
      className={`watch-art ${className}`.trim()}
      role="img"
      aria-label={label ? `تصویر ساعت ${label}` : 'تصویر ساعت'}
    >
      <defs>
        <linearGradient id={`case-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={caseTone[0]} />
          <stop offset="46%" stopColor={caseTone[1]} />
          <stop offset="100%" stopColor={caseTone[2]} />
        </linearGradient>
        <radialGradient id={`dial-${uid}`} cx="0.35" cy="0.28" r="0.85">
          <stop offset="0%" stopColor={dialTone[0]} />
          <stop offset="100%" stopColor={dialTone[1]} />
        </radialGradient>
        <linearGradient id={`strap-${uid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={strapTone[1]} />
          <stop offset="38%" stopColor={strapTone[0]} />
          <stop offset="100%" stopColor={strapTone[1]} />
        </linearGradient>
      </defs>

      {/* بند */}
      <path d={strapTop} fill={`url(#strap-${uid})`} />
      <path d={strapBottom} fill={`url(#strap-${uid})`} />
      <path
        d={`M132 14 C128 70 128 ${caseTop - 40} 130 ${caseTop + 16}`}
        fill="none"
        stroke="rgba(255,248,240,0.32)"
        strokeWidth="1.5"
        strokeDasharray="4 7"
      />
      <path
        d={`M168 14 C172 70 172 ${caseTop - 40} 170 ${caseTop + 16}`}
        fill="none"
        stroke="rgba(255,248,240,0.32)"
        strokeWidth="1.5"
        strokeDasharray="4 7"
      />
      <path
        d={`M132 ${caseBottom - 16} C128 ${caseBottom + 40} 128 440 132 456`}
        fill="none"
        stroke="rgba(255,248,240,0.32)"
        strokeWidth="1.5"
        strokeDasharray="4 7"
      />
      <rect
        x="128"
        y="414"
        width="44"
        height="34"
        rx="11"
        fill="none"
        stroke={caseTone[1]}
        strokeWidth="3"
        opacity="0.6"
      />

      {/* تاج کوک */}
      <rect x={cx + half - 4} y={cy - 13} width="14" height="26" rx="5" fill={caseTone[2]} />
      <rect x={cx + half - 2} y={cy - 8} width="8" height="16" rx="3" fill={caseTone[1]} />

      {/* قاب و صفحه */}
      {caseShape}
      <path d={highlight} fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2.5" strokeLinecap="round" opacity="0.75" />
      {dialShape}
      {markers}

      <text
        x={cx}
        y={cy - dial * 0.34}
        textAnchor="middle"
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontSize={dial * 0.115}
        fontWeight="800"
        letterSpacing={dial * 0.02}
        fill={markInk}
        opacity="0.72"
      >
        {label}
      </text>

      {showDate ? (
        <rect
          x={cx + dial * 0.34}
          y={cy - 8}
          width={dial * 0.3}
          height={dial * 0.2}
          rx="4"
          fill={darkDial ? 'rgba(255,248,240,0.14)' : 'rgba(45,38,33,0.07)'}
          stroke={markInk}
          strokeWidth="1"
          opacity="0.6"
        />
      ) : null}

      {/* عقربه‌ها */}
      <g transform={`rotate(-52 ${cx} ${cy})`}>
        <path
          d={`M${cx} ${cy - handBase * 0.62} l5 9 v${handBase * 0.56} l-5 9 l-5 -9 v-${
            handBase * 0.56
          } z`}
          fill={handInk}
        />
      </g>
      <g transform={`rotate(63 ${cx} ${cy})`}>
        <path
          d={`M${cx} ${cy - handBase * 0.86} l3.2 7 v${handBase * 0.8} l-3.2 7 l-3.2 -7 v-${
            handBase * 0.8
          } z`}
          fill={handInk}
        />
      </g>
      <g transform={`rotate(18 ${cx} ${cy})`}>
        <line
          x1={cx}
          y1={cy + 16}
          x2={cx}
          y2={cy - handBase * 0.92}
          stroke="#a8664a"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </g>
      <circle cx={cx} cy={cy} r="6" fill={handInk} />
      <circle cx={cx} cy={cy} r="2.4" fill="#a8664a" />
    </svg>
  )
}
