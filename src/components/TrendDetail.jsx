import { useState } from 'react'
import Badge from './Badge.jsx'
import CardImage from './CardImage.jsx'
import ColorSwatch from './ColorSwatch.jsx'
import ColorGalleryOverlay from './ColorGalleryOverlay.jsx'
import TrendForecast from './TrendForecast.jsx'
import SectionTitle from './SectionTitle.jsx'
import ProductRow from './ProductRow.jsx'
import SpottedOnSocial from './SpottedOnSocial.jsx'
import { splitTitle } from '../lib/text.js'

export default function TrendDetail({ trend, onViewAllKeyItems }) {
  const [line1, line2] = splitTitle(trend.title)
  const [activeGallery, setActiveGallery] = useState(null)
  // Trends without bespoke data fall back to content derived from their own
  // fields, so every detail page shares the same structure as Butter Yellow.
  const collections = trend.collections || [{ title: 'The Statement Piece', items: trend.keyItems }]
  const tagline = trend.tagline || trend.description?.split('. ')[0].replace(/\.?$/, '.')
  const social = trend.social || (trend.gallery || []).map((image) => ({ image }))

  return (
    <div className="pb-10">
      <div className="relative w-full aspect-[10/13] overflow-hidden bg-black/5">
        <CardImage src={trend.image} images={trend.gallery} alt={trend.title} palette={trend.palette} />

        <span
          className="absolute z-10 top-3 left-2 text-[140px] leading-none select-none text-black/[0.38]"
          style={{ fontFamily: "'Cormorant Infant', serif", fontWeight: 700 }}
        >
          {trend.number}
        </span>

        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        <Badge status={trend.status} />

        <h1
          className="absolute inset-x-0 bottom-0 z-20 font-black uppercase text-white tracking-tight text-4xl leading-[1.05] pl-[14px] pb-[13px]"
          style={{ mixBlendMode: 'overlay', opacity: 0.95 }}
        >
          <span className="block">{line1}</span>
          {line2 && <span className="block">{line2}</span>}
        </h1>
      </div>

      <section className="pt-[70px]">
        <TrendForecast />
      </section>

      {tagline && (
        <section className="px-5 pt-6">
          <div className="flex items-center gap-2.5 border border-black px-2.5 py-3 shadow-[0_4px_6px_0_rgba(0,0,0,0.05)]">
            <svg viewBox="0 0 15 9" fill="none" className="w-[15px] h-[9px] shrink-0">
              <path
                d="M10.5 0L12.2175 1.7175L8.5575 5.3775L5.5575 2.3775L0 7.9425L1.0575 9L5.5575 4.5L8.5575 7.5L13.2825 2.7825L15 4.5V0H10.5Z"
                fill="black"
              />
            </svg>
            <p className="text-[13px] text-black leading-snug">{tagline}</p>
          </div>
        </section>
      )}

      <section className="px-5 pt-[70px]">
        <SectionTitle>COLOR PALETTE MIX</SectionTitle>
        <div className="grid grid-cols-2 gap-3 mt-6">
          {trend.palette.map((c) => (
            <ColorSwatch
              key={c.hex}
              hex={c.hex}
              gallery={c.gallery}
              onClick={c.gallery ? () => setActiveGallery(c.gallery) : undefined}
            />
          ))}
        </div>
      </section>

      <section className="pt-[70px]">
        <div className="px-5">
          <SectionTitle>HOW TO ADOPT IT</SectionTitle>
        </div>
        <div className="mt-6 flex flex-col gap-9">
          {collections.map((col) => (
            <ProductRow
              key={col.title}
              title={col.title}
              items={col.items}
              nameOnly={col.nameOnly}
              onViewAll={onViewAllKeyItems}
            />
          ))}
        </div>
      </section>

      {social.length > 0 && (
        <section className="pt-[70px]">
          <SpottedOnSocial posts={social} />
        </section>
      )}

      {activeGallery && (
        <ColorGalleryOverlay images={activeGallery} onClose={() => setActiveGallery(null)} />
      )}
    </div>
  )
}
