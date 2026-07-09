import { useRef, useState } from 'react'
import { splitTitle } from '../lib/text.js'

// "My Closet" avatar try-on. A central avatar wears one piece per body zone;
// arrows on the stage cycle through the pieces you own in the active category,
// the tabs switch category, and the side rail lists every piece in it.
//
// The avatar figure is a placeholder stage until real avatar / garment-overlay
// assets are added — swap `AvatarStage`'s inner visual once those exist.
const ZONE_ORDER = ['Tops', 'Bottoms', 'Shoes']

export default function MyCloset({ trend, onViewItems }) {
  const [line1, line2] = splitTitle(trend.title)

  // Categories present for this trend, in a natural head-to-toe order.
  const closet = trend.closet || {}
  const categories = ZONE_ORDER.filter((z) => (closet[z] || []).length > 0)

  const [activeCat, setActiveCat] = useState(categories[0])
  // Currently-selected piece index per category.
  const [selected, setSelected] = useState(() =>
    Object.fromEntries(categories.map((c) => [c, 0]))
  )

  const items = closet[activeCat] || []
  const activeIndex = selected[activeCat] ?? 0

  const cycle = (dir) => {
    if (items.length < 2) return
    setSelected((prev) => ({
      ...prev,
      [activeCat]: (prev[activeCat] + dir + items.length) % items.length,
    }))
  }

  const pick = (i) => setSelected((prev) => ({ ...prev, [activeCat]: i }))

  // Swipe left/right on the avatar to cycle the active category's pieces.
  const touchX = useRef(null)
  const onTouchStart = (e) => {
    touchX.current = e.changedTouches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchX.current == null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 40) cycle(dx < 0 ? 1 : -1)
    touchX.current = null
  }

  // The full outfit currently worn — one selected piece per zone. Layer bottoms
  // first, then tops, then shoes so a top sits over the waistband.
  const outfit = ['Bottoms', 'Tops', 'Shoes']
    .filter((c) => categories.includes(c))
    .map((c) => ({ category: c, item: closet[c][selected[c] ?? 0] }))

  return (
    <div className="px-5 pt-6 pb-28">
      <p className="text-[13px] tracking-[1.4px] uppercase text-[#5E5E5E]">Style it — from your closet</p>
      <h1 className="font-display uppercase text-[34px] leading-[36px] text-black mt-1">
        <span className="block">{line1}</span>
        {line2 && <span className="block">{line2}</span>}
      </h1>

      {/* Category tabs */}
      <div className="flex gap-6 mt-5 border-b border-black/10">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCat(cat)}
            className={`pb-2 -mb-px text-[16px] border-b-2 transition-colors ${
              cat === activeCat
                ? 'border-black text-black font-semibold'
                : 'border-transparent text-[#5E5E5E]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Avatar stage — full width, blends with the photo backdrop, full figure
          visible and sized to fit the screen. Swipe or arrows to change piece. */}
      <div
        className="relative w-full h-[60vh] max-h-[600px] bg-[#F6F6F7] overflow-hidden mt-5 select-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <AvatarStage avatar={closet.avatar} outfit={outfit} />

        {items.length > 1 && (
          <>
            <ArrowButton side="left" onClick={() => cycle(-1)} />
            <ArrowButton side="right" onClick={() => cycle(1)} />
          </>
        )}
      </div>

      {/* Bottom strip — every piece in the active category */}
      <div className="flex gap-3 mt-4 overflow-x-auto pb-1">
        {items.map((piece, i) => (
          <button
            key={`${piece.name}-${i}`}
            type="button"
            onClick={() => pick(i)}
            aria-pressed={i === activeIndex}
            className={`w-[84px] h-[84px] flex-shrink-0 bg-[#F2F2F2] overflow-hidden border-2 ${
              i === activeIndex ? 'border-black' : 'border-transparent'
            }`}
          >
            <img
              src={piece.image}
              alt={piece.name}
              className="w-full h-full object-contain p-1"
              draggable={false}
            />
          </button>
        ))}
      </div>

      {/* Bottom action */}
      <button
        type="button"
        onClick={onViewItems}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-[440px] bg-black text-white text-[14px] font-semibold uppercase tracking-[1px] py-3.5 z-40"
      >
        View items
      </button>
    </div>
  )
}

// The central figure: the base avatar with garment overlays layered on top.
// Each worn piece's `overlay` (a transparent PNG framed to the avatar canvas)
// stacks full-bleed over the figure; pieces without an overlay yet simply
// don't render on the body (the rail thumbnail still lets you pick them).
function AvatarStage({ avatar, outfit }) {
  return (
    <div className="absolute inset-0">
      {avatar && (
        <img
          src={avatar}
          alt="Your avatar"
          className="absolute inset-0 w-full h-full object-contain"
          draggable={false}
        />
      )}
      {outfit.map(({ category, item }) =>
        item?.overlay ? (
          <img
            key={category}
            src={item.overlay}
            alt={item.name}
            className="absolute inset-0 w-full h-full object-contain"
            draggable={false}
          />
        ) : null
      )}
    </div>
  )
}

function ArrowButton({ side, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === 'left' ? 'Previous item' : 'Next item'}
      className={`absolute top-1/2 -translate-y-1/2 ${
        side === 'left' ? 'left-1.5' : 'right-1.5'
      } w-8 h-8 flex items-center justify-center bg-white/85 rounded-full shadow-sm active:scale-95`}
    >
      <svg viewBox="0 0 12 18" fill="none" className="w-[11px] h-[16px]">
        <path
          d={side === 'left' ? 'M10 2L3 9L10 16' : 'M2 2L9 9L2 16'}
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
