import { useEffect, useRef, useState } from 'react'

// Faithful reproduction of the "TREND FORECAST" frame from Figma
// (file בייבלי, node 324:648). Geometry, type and colours mirror the design:
// a 430×394 frame drawn in a viewBox so it scales with the container.
//
// Four points: three observed (LATE 2024 → CURRENT 2026) joined by one smooth
// solid curve, plus a projected "+6 MONTH" point reached by a dashed line.
// The current point is filled black and tagged with the status badge; the
// other three are hollow. Points are clickable to reveal stage info — closed
// by default so the resting state matches the Figma exactly.

// Fractions of the plot height (0 = x-axis, 1 = peak) for each point, per
// forecast trajectory. "peak" holds flat into +6 months (horizontal dashed
// line, per the Figma node 1:93); "declining" dips the +6-month point below
// the current peak so the forecast line slopes down.
const FRACTIONS_BY_TRAJECTORY = {
  peak: [0.104, 0.601, 1, 1],
  declining: [0.104, 0.601, 1, 0.72],
}

// The forecast badge always reads PEAK — it labels the current point as the
// top of the lifecycle, independent of the trend's overall status.
const BADGE_LABEL = 'PEAK'

const LABELS = ['LATE 2024', '2025', 'CURRENT 2026', '+6 MONTH']

const STAGE_INFO = [
  'Butter Yellow emerges on the Spring/Summer 2025 runways.',
  'The trend gains massive traction across TikTok and Instagram.',
  'The trend is currently at its absolute peak. It is the #1 forecasted tone for the season, dominating street style and summer wardrobes.',
  'Predictive AI analysis shows Butter Yellow transitioning smoothly into late-season layering',
]

const CURRENT = 2 // index of the "now" point
const FORECAST = 3 // index of the projected point

// Frame + plot geometry, straight from the Figma node (viewBox units == px).
const VIEW_W = 430
const VIEW_H = 394
const X_AXIS = 30 // vertical y-axis x-position (Line 2)
const Y_BASE = 342 // horizontal x-axis y-position (Line 1)
const Y_PEAK = 126.5 // top of the plot (Ellipse 2 centre y)
const AXIS_TOP = 93 // y-axis extends up to here
const AXIS_BOTTOM = 369 // ...and down to here
const XS = [61.5, 137.5, 232.5, 381.5] // point centres (Ellipse 1/4/2/5)
const POINT_R = 5.5 // 11px-diameter ellipses

const POPUP_WIDTH = 210
const POPUP_GAP = 24
const ARROW_SIZE = 10
const FLIP_THRESHOLD_PCT = 45

// Resting state matches the Figma (no popup open).
const DEFAULT_ACTIVE = null

// Smooth Catmull-Rom curve through pts[startIdx..endIdx]. Neighbouring phantom
// points outside that range set the tangents, so the line leaves the origin
// flat and flattens again into the plateau at the peak.
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

export default function LifecycleChart({ onForecastClick, trajectory = 'peak' }) {
  const [active, setActive] = useState(DEFAULT_ACTIVE)
  const popupRef = useRef(null)
  const fractions = FRACTIONS_BY_TRAJECTORY[trajectory] || FRACTIONS_BY_TRAJECTORY.peak
  const ys = fractions.map((f) => Y_BASE - f * (Y_BASE - Y_PEAK))

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
    [X_AXIS - 26, Y_BASE],
    [X_AXIS, Y_BASE],
    [XS[0], ys[0]],
    [XS[1], ys[1]],
    [XS[CURRENT], ys[CURRENT]],
    [XS[CURRENT] + 44, ys[CURRENT]],
  ]
  const solidPath = smoothPath(splinePts, 1, 4)
  // The dashed forecast runs from the current point through the +6-month point
  // to the frame edge. For "peak" it stays flat; for "declining" the +6 point
  // sits lower, so the line slopes down and the end Y extrapolates that slope.
  const FORECAST_X_END = 410
  const forecastEndY =
    ys[CURRENT] +
    ((ys[FORECAST] - ys[CURRENT]) * (FORECAST_X_END - XS[CURRENT])) / (XS[FORECAST] - XS[CURRENT])

  // Status badge sits centred just above the current point, hugging it like in
  // Figma (PEAK: point y126.5, badge y90 → a 12.5px gap). Tracking the point's
  // y keeps the badge above the black dot for every status, not only PEAK.
  const badgeH = 24
  const BADGE_GAP = 12.5
  const badgeW = Math.max(60, BADGE_LABEL.length * 8.5 + 24)
  const badgeCx = XS[CURRENT]
  const badgeY = ys[CURRENT] - BADGE_GAP - badgeH

  // The +6-month point is the entry to the future timeline; every other point
  // just toggles its stage-info popup.
  const handlePoint = (i) => {
    if (i === FORECAST && onForecastClick) onForecastClick()
    else setActive((prev) => (prev === i ? null : i))
  }

  return (
    <div className="relative w-full">
      <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} className="w-full block overflow-visible">
        <defs>
          {/* Soft butter-yellow blur behind the dashed forecast line (Figma Vector 3). */}
          <filter id="fcastLineGlow" x="-20%" y="-400%" width="140%" height="900%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* Title — Figma uses the BBH Bartle display face on two lines. */}
        <text
          x="24"
          y="22"
          fontFamily="'BBH Bartle', 'Inter', sans-serif"
          fontSize="32"
          letterSpacing="-0.8"
          fill="#000"
          dominantBaseline="central"
        >
          TREND
        </text>
        <text
          x="24"
          y="60"
          fontFamily="'BBH Bartle', 'Inter', sans-serif"
          fontSize="32"
          letterSpacing="-0.8"
          fill="#000"
          dominantBaseline="central"
        >
          FORECAST
        </text>

        {/* Status badge */}
        <g>
          <rect x={badgeCx - badgeW / 2} y={badgeY} width={badgeW} height={badgeH} fill="#000" />
          <text
            x={badgeCx}
            y={badgeY + badgeH / 2}
            fontFamily="Inter, sans-serif"
            fontWeight="700"
            fontSize="12"
            letterSpacing="1.2"
            fill="#fff"
            textAnchor="middle"
            dominantBaseline="central"
          >
            {BADGE_LABEL}
          </text>
        </g>

        {/* Axes */}
        <line x1={X_AXIS} y1={AXIS_TOP} x2={X_AXIS} y2={AXIS_BOTTOM} stroke="#000" strokeWidth="1" />
        <line x1="14" y1={Y_BASE} x2="410" y2={Y_BASE} stroke="#000" strokeWidth="1" />

        {/* Forecast: yellow glow, dashed line, then the solid curve */}
        <line
          x1={XS[CURRENT]}
          y1={ys[CURRENT]}
          x2={FORECAST_X_END}
          y2={forecastEndY}
          stroke="#FFF200"
          strokeOpacity="0.83"
          strokeWidth="3"
          filter="url(#fcastLineGlow)"
        />
        <line
          x1={XS[CURRENT]}
          y1={ys[CURRENT]}
          x2={FORECAST_X_END}
          y2={forecastEndY}
          stroke="#8E8E8E"
          strokeWidth="1"
          strokeDasharray="10 10"
        />
        <path d={solidPath} fill="none" stroke="#000" strokeWidth="1.75" strokeLinecap="round" />

        {/* Tap affordance on the +6-month point: a pulsing butter-yellow glow plus
            an expanding "ping" ring, so it clearly reads as interactive. */}
        <circle
          className="forecast-glow-pulse"
          cx={XS[FORECAST]}
          cy={ys[FORECAST]}
          r="10"
          fill="#FFF200"
          style={{ filter: 'blur(3.5px)', pointerEvents: 'none' }}
        />
        <circle
          className="forecast-ping"
          cx={XS[FORECAST]}
          cy={ys[FORECAST]}
          r={POINT_R}
          fill="none"
          stroke="#FFF200"
          strokeWidth="2"
          style={{ pointerEvents: 'none' }}
        />

        {/* Points */}
        {ys.map((y, i) => {
          const filled = i === CURRENT || active === i
          return (
            <g
              key={i}
              data-lifecycle-point
              onClick={() => handlePoint(i)}
              className="cursor-pointer"
            >
              <circle cx={XS[i]} cy={y} r="16" fill="transparent" />
              <circle
                cx={XS[i]}
                cy={y}
                r={POINT_R}
                fill={filled ? '#000' : '#fff'}
                stroke="#000"
                strokeWidth="1.5"
              />
            </g>
          )
        })}

        {/* Axis labels */}
        {LABELS.map((label, i) => {
          const emphasised = i === CURRENT || active === i
          return (
            <text
              key={label}
              data-lifecycle-point
              onClick={() => handlePoint(i)}
              x={XS[i]}
              y="360"
              fontFamily="Inter, sans-serif"
              fontWeight={emphasised ? 900 : 400}
              fontSize="12"
              fill="#000"
              textAnchor="middle"
              dominantBaseline="central"
              className="cursor-pointer"
            >
              {label}
            </text>
          )
        })}
      </svg>

      {/* Stage-info popup — closed by default, so the resting frame matches Figma. */}
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
                <p className="mt-2 text-[12px] leading-relaxed text-gray-600">{STAGE_INFO[active]}</p>
              </div>
            </div>
          )
        })()}
    </div>
  )
}
