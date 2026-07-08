import { useState } from 'react'
import Badge from './Badge.jsx'
import CardImage from './CardImage.jsx'
import { SearchIcon, BookmarkIcon } from './icons.jsx'
import { splitTitle } from '../lib/text.js'

const VARIANT = {
  hero: {
    aspect: 'aspect-[10/13]',
    number: 'text-[140px] leading-none top-3 left-2',
    title: 'text-4xl leading-[1.05]',
    badgeSize: 'md',
    showIcon: true,
    iconSize: 'w-9 h-9 p-2',
  },
  medium: {
    aspect: 'aspect-[3/4]',
    number: 'text-[64px] leading-none top-1 left-1',
    title: 'text-lg leading-tight',
    badgeSize: 'sm',
    showIcon: true,
    iconSize: 'w-6 h-6 p-1',
  },
  small: {
    aspect: 'aspect-square',
    number: 'text-[28px] leading-none top-0.5 left-1',
    title: 'text-[10px] leading-tight',
    badgeSize: 'sm',
    showIcon: false,
    iconSize: '',
  },
  micro: {
    aspect: 'aspect-square',
    number: 'text-[18px] leading-none top-0.5 left-0.5',
    title: 'text-[7px] leading-tight',
    badgeSize: 'sm',
    showIcon: false,
    iconSize: '',
  },
}

// Status badges only ever render on the top 3 hero cards.
const BADGE_VARIANTS = new Set(['hero'])

export default function TrendCard({ trend, variant, onSelect, showSearch, fillViewport }) {
  const [saved, setSaved] = useState(false)
  const v = VARIANT[variant]
  const [line1, line2] = splitTitle(trend.title)

  return (
    <button
      type="button"
      onClick={() => onSelect(trend)}
      className={`relative w-full ${
        fillViewport ? 'h-[calc(100vh-91px)]' : v.aspect
      } overflow-hidden bg-black/5 text-left block`}
    >
      <CardImage src={trend.image} images={trend.gallery} alt={trend.title} palette={trend.palette} />

      <span
        className={`absolute z-10 select-none pointer-events-none text-black/[0.38] ${v.number}`}
        style={{ fontFamily: "'Cormorant Infant', serif", fontWeight: 700 }}
      >
        {trend.number}
      </span>

      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

      {BADGE_VARIANTS.has(variant) && <Badge status={trend.status} size={v.badgeSize} />}

      {v.showIcon && (
        <span
          className={`absolute top-2 right-2 z-20 rounded-full ${v.iconSize} ${
            showSearch ? 'bg-white/70 text-black backdrop-blur-sm' : 'text-white'
          }`}
          onClick={(e) => {
            e.stopPropagation()
            if (!showSearch) setSaved((s) => !s)
          }}
        >
          {showSearch ? (
            <SearchIcon className="w-full h-full" />
          ) : (
            <BookmarkIcon className="w-full h-full" filled={saved} />
          )}
        </span>
      )}

      <h3
        className={`absolute inset-x-0 bottom-0 z-20 font-black uppercase text-white tracking-tight pl-[14px] pb-[13px] ${v.title}`}
        style={{ mixBlendMode: 'overlay', opacity: 0.95 }}
      >
        <span className="block">{line1}</span>
        {line2 && <span className="block">{line2}</span>}
      </h3>
    </button>
  )
}
