// The future-timeline frame (Figma node 7:141) reached by tapping the +6-month
// forecast point. Three stage cards — peak → smart-buy → wardrobe-base — with
// black date headings above a dotted timeline that continues from the chart.
const CARDS = [
  {
    date: 'AUGUST 2026',
    badge: 'PEAK HYPE',
    img: '/forecast/aug.png',
    text: 'Linen & Sundresses dominating TikTok right now.',
  },
  {
    date: 'OCTOBER 2026',
    badge: 'SMART BUY ZONE',
    img: '/forecast/oct.png',
    text: 'Transitions into knitwear. Pair it with chocolate browns.',
  },
  {
    date: 'JANUARY 2027',
    badge: 'WARDROBE BASE',
    img: '/forecast/jan.png',
    text: 'The hype drops, but it stays as a perfect winter layering base.',
  },
]

export default function FutureTimeline() {
  return (
    <div className="relative w-full px-4 pt-1.5 pb-2">
      {/* Date headings, centred above each column */}
      <div className="flex gap-[5px]">
        {CARDS.map((card) => (
          <p key={card.date} className="flex-1 text-center text-[12px] font-semibold text-black">
            {card.date}
          </p>
        ))}
      </div>

      {/* Dotted timeline with a node centred above each card */}
      <div className="relative h-3 my-1">
        <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 border-t border-dashed border-black/45" />
        {['16.67%', '50%', '83.33%'].map((left) => (
          <span
            key={left}
            className="absolute top-1/2 w-[11px] h-[11px] rounded-full bg-white border border-black -translate-x-1/2 -translate-y-1/2"
            style={{ left }}
          />
        ))}
      </div>

      {/* Stage cards */}
      <div className="flex gap-[5px]">
        {CARDS.map((card) => (
          <div key={card.date} className="flex-1 flex flex-col bg-white border border-black">
            <div className="relative h-[118px] w-full overflow-hidden">
              <img src={card.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <span className="absolute top-1 left-1 bg-black text-white text-[7px] leading-none px-[5px] py-[3px]">
                {card.badge}
              </span>
            </div>
            <div className="px-2.5 pt-[3px] pb-2.5">
              <p className="text-[10px] text-black leading-snug">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
