function isLight(hex) {
  const c = hex.replace('#', '')
  const r = parseInt(c.substring(0, 2), 16)
  const g = parseInt(c.substring(2, 4), 16)
  const b = parseInt(c.substring(4, 6), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 > 150
}

export default function ColorSwatch({ hex, gallery, onClick }) {
  const light = isLight(hex)
  const clickable = Boolean(gallery && gallery.length > 0)
  return (
    <div
      role={clickable ? 'button' : undefined}
      onClick={clickable ? onClick : undefined}
      className={`relative aspect-square w-full ${clickable ? 'cursor-pointer' : ''}`}
      style={{ perspective: clickable ? 800 : undefined }}
    >
      <div
        className={clickable ? 'swatch-flip' : ''}
        style={{ position: 'relative', width: '100%', height: '100%', transformStyle: 'preserve-3d' }}
      >
        <div
          className="absolute inset-0 flex items-end justify-start p-3"
          style={{ backgroundColor: hex, backfaceVisibility: 'hidden' }}
        >
          <span
            className={`text-xs font-medium uppercase tracking-wide ${
              light ? 'text-black/50' : 'text-white/70'
            }`}
          >
            {hex}
          </span>
        </div>

        {clickable && (
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <img src={gallery[0]} alt="" className="w-full h-full object-cover" draggable={false} />
          </div>
        )}
      </div>
    </div>
  )
}
