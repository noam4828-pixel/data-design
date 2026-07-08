import { useEffect, useRef, useState } from 'react'

// Four points: three observed (historical → current) drawn with one smooth
// curve, plus a projected "+6 MONTH" forecast point reached by a dashed line.
// The third point is "now" — filled black and tagged with the status badge.
const CURVES = {
  PEAK: [0.1, 0.5, 0.82, 0.82],
  'HOT/EMERGING': [0.08, 0.42, 0.66, 0.8],
  RISING: [0.06, 0.3, 0.52, 0.68],
  STABLE: [0.42, 0.64, 0.8, 0.82],
}

const LABELS = ['LATE 2024', '2025', 'CURRENT 2026', '+6 MONTH']

const STAGE_INFO = [
  "Debuted on the Paris runway collections. Early adopters and high-fashion purists bookmark it as the season's emerging shade.",
  'Adopted by niche luxury labels and tastemakers, then exploded on TikTok. Moodboards fill up and mass-market retailers ramp production.',
  'Where the trend sits right now — its current standing in the cycle, driving mainstream visibility and retail demand.',
  'Projected trajectory. Momentum is expected to hold and plateau as the look settles into a wardrobe staple before the next shift.',
]

const CURRENT = 2 // index of the "now" point
const FORECAST = 3 // index of the projected point

const VIEW_W = 330
const VIEW_H = 250
const X0 = 28
const Y_TOP = 40
const Y_BOTTOM = 210
const XS = [92, 172, 250, 308]

const POPUP_WIDTH = 210
const POPUP_GAP = 24
const ARROW_SIZE = 10
const FLIP_THRESHOLD_PCT = 45

// Opens on the current-day point by default — a quiet hint that the chart is
// interactive, since a visitor will see one stage already expanded.
const DEFAULT_ACTIVE = CURRENT

// Smooth Catmull-Rom curve through pts[startIdx..endIdx]. Neighbouring phantom
// points outside that range set the tangents, so the line starts flat at the
// origin and flattens again into the plateau at the peak.
function smoothPath(pts, startIdx, endIdx) {
  let d = `M ${pts[startIdx][0]} ${pts[startIdx][1]}`
  for (let i = startIdx; i < endIdx; i++) {
    const p0 = pts[i - 1] || pts[i]
    const p1 = pts[i]
    const p2 = pts[i + 1]
    const p3 = pts[i + 2] || p2
    const c1x = p1[0] + (p2[0] - p0[0]) / 6
    const c1y = p1[1] + (p2[1] - p0[1]) / 6
    const c2x = p2[0] - (p3[0] - p1[0]) / 6
    const c2y = p2[1] - (p3[1] - p1[1]) / 6
    d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2[0]} ${p2[1]}`
  }
  return d
}

export default function LifecycleChart({ status }) {
  const [active, setActive] = useState(DEFAULT_ACTIVE)
  const popupRef = useRef(null)
  const curve = CURVES[status] || CURVES.RISING
  const ys = curve.map((f) => Y_BOTTOM - f * (Y_BOTTOM - Y_TOP))

  useEffect(() => {
    if (active === null) return
    const handlePointerDown = (e) => {
      if (e.target.closest('[data-lifecycle-point]')) return
      if (popupRef.current && popupRef.current.contains(e.target)) return
      setActive(null)
    }
    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('touchstart', handlePointerDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('touchstart', handlePointerDown)
    }
  }, [active])

  // Solid curve runs from the origin up through the current point; phantom
  // points at each end keep the start and the peak horizontal.
  const splinePts = [
    [X0 - 26, Y_BOTTOM],
    [X0, Y_BOTTOM],
    [XS[0], ys[0]],
    [XS[1], ys[1]],
    [XS[CURRENT], ys[CURRENT]],
    [XS[CURRENT] + 44, ys[CURRENT]],
  ]
  const solidPath = smoothPath(splinePts, 1, 4)
  const forecastPath = `M ${XS[CURRENT]} ${ys[CURRENT]} L ${XS[FORECAST]} ${ys[FORECAST]}`

  const badgeLeft = (XS[CURRENT] / VIEW_W) * 100
  const badgeTop = ((ys[CURRENT] - 30) / VIEW_H) * 100

  const toggle = (i) => setActive((prev) => (prev === i ? null : i))

  return (
    <div className="relative mt-5">
      <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} className="w-full overflow-visible">
        <line x1={X0} y1={Y_TOP} x2={X0} y2={Y_BOTTOM} stroke="#000" strokeWidth="1" />
        <line x1={X0} y1={Y_BOTTOM} x2={VIEW_W - 14} y2={Y_BOTTOM} stroke="#000" strokeWidth="1" />
        <path
          d={forecastPath}
          fill="none"
          stroke="#9ca3af"
          strokeWidth="1.5"
          strokeDasharray="7 7"
          strokeLinecap="round"
        />
        <path d={solidPath} fill="none" stroke="#000" strokeWidth="1.75" strokeLinecap="round" />
        {ys.map((y, i) => {
          const isCurrent = i === CURRENT
          const isForecast = i === FORECAST
          const filled = isCurrent || active === i
          return (
            <g key={i} data-lifecycle-point onClick={() => toggle(i)} className="cursor-pointer">
              <circle cx={XS[i]} cy={y} r="16" fill="transparent" />
              <circle
                cx={XS[i]}
                cy={y}
                r={active === i ? 8 : isCurrent ? 7.5 : 6.5}
                fill={filled ? '#000' : '#fff'}
                stroke={isForecast && active !== i ? '#9ca3af' : '#000'}
                strokeWidth="1.75"
              />
            </g>
          )
        })}
      </svg>

      <span
        className="absolute bg-black text-white text-[10px] font-bold uppercase px-2.5 py-1 tracking-widest whitespace-nowrap pointer-events-none"
        style={{ left: `${badgeLeft}%`, top: `${badgeTop}%`, transform: 'translate(-50%, -100%)' }}
      >
        {status}
      </span>

      <div className="relative mt-2 h-4 text-[10px] uppercase tracking-tight text-gray-500">
        {LABELS.map((label, i) => {
          const left = (XS[i] / VIEW_W) * 100
          return (
            <span
              key={label}
              data-lifecycle-point
              onClick={() => toggle(i)}
              className={`absolute top-0 cursor-pointer whitespace-nowrap ${
                i === CURRENT || active === i ? 'font-extrabold text-black' : ''
              }`}
              style={{ left: `${left}%`, transform: 'translateX(-50%)' }}
            >
              {label}
            </span>
          )
        })}
      </div>

      {active !== null &&
        (() => {
          const left = (XS[active] / VIEW_W) * 100
          const top = (ys[active] / VIEW_H) * 100
          const flipBelow = top < FLIP_THRESHOLD_PCT

          return (
            <div ref={popupRef} style={{ display: 'contents' }}>
              <div
                className="absolute z-30 bg-white border border-black/10 rotate-45"
                style={{
                  width: ARROW_SIZE,
                  height: ARROW_SIZE,
                  left: `calc(${left}% - ${ARROW_SIZE / 2}px)`,
                  top: flipBelow
                    ? `calc(${top}% + ${POPUP_GAP / 2 - ARROW_SIZE / 2}px)`
                    : `calc(${top}% - ${POPUP_GAP / 2 + ARROW_SIZE / 2}px)`,
                }}
              />
              <div
                className="absolute z-30 bg-white border border-black/10 rounded-2xl shadow-md px-4 pt-4 pb-4 text-center"
                style={{
                  width: POPUP_WIDTH,
                  left: `clamp(8px, calc(${left}% - ${POPUP_WIDTH / 2}px), calc(100% - ${POPUP_WIDTH + 8}px))`,
                  top: flipBelow ? `calc(${top}% + ${POPUP_GAP}px)` : `calc(${top}% - ${POPUP_GAP}px)`,
                  transform: flipBelow ? 'none' : 'translateY(-100%)',
                }}
              >
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  aria-label="Close"
                  className="absolute top-1.5 right-1.5 w-5 h-5 flex items-center justify-center text-gray-400 hover:text-black leading-none text-base"
                >
                  ×
                </button>
                <h3 className="font-extrabold text-black text-sm uppercase tracking-tight pr-3">
                  {LABELS[active]}
                </h3>
                <p className="mt-2 text-[12px] leading-relaxed text-gray-600">
                  {STAGE_INFO[active]}
                </p>
              </div>
            </div>
          )
        })()}
    </div>
  )
}
