import { useState } from 'react'
import Badge from './Badge.jsx'
import CardImage from './CardImage.jsx'
import ColorSwatch from './ColorSwatch.jsx'
import ColorGalleryOverlay from './ColorGalleryOverlay.jsx'
import LifecycleChart from './LifecycleChart.jsx'
import KeyItems from './KeyItems.jsx'
import SocialStatRow from './SocialStatRow.jsx'
import { TikTokIcon, PinterestIcon } from './icons.jsx'
import { splitTitle } from '../lib/text.js'

export default function TrendDetail({ trend, onViewAllKeyItems }) {
  const [line1, line2] = splitTitle(trend.title)
  const [activeGallery, setActiveGallery] = useState(null)

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

      <section className="px-5 pt-7">
        <h2 className="text-2xl font-extrabold text-black tracking-tight">TREND OVERVIEW</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-gray-500">{trend.description}</p>
      </section>

      <section className="px-5 pt-9">
        <h2 className="text-2xl font-extrabold text-black tracking-tight">TREND FORECAST</h2>
        <LifecycleChart status={trend.status} />
      </section>

      <section className="px-5 pt-9">
        <h2 className="text-2xl font-extrabold text-black tracking-tight">COLOR PALETTE MIX</h2>
        <div className="grid grid-cols-2 gap-3 mt-4">
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

      <section className="px-5">
        <KeyItems items={trend.keyItems} onViewAll={onViewAllKeyItems} />
      </section>

      <section className="px-5 pt-7 flex flex-col gap-3">
        <SocialStatRow icon={<TikTokIcon className="w-full h-full" />} label="TIKTOK SENTIMENT" value={trend.tiktokSentiment} />
        <SocialStatRow icon={<PinterestIcon className="w-full h-full" />} label="PINTEREST VOLUME" value={trend.pinterestVolume} />
      </section>

      {activeGallery && (
        <ColorGalleryOverlay images={activeGallery} onClose={() => setActiveGallery(null)} />
      )}
    </div>
  )
}
