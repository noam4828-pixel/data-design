import KeyItemCard from './KeyItemCard.jsx'
import SectionTitle from './SectionTitle.jsx'

export default function KeyItems({ items, onViewAll }) {
  return (
    <div>
      <button
        type="button"
        onClick={onViewAll}
        className="flex items-center gap-2 text-left"
        aria-label="View all key items"
      >
        <SectionTitle>KEY ITEMS</SectionTitle>
        <svg viewBox="0 0 11 18" fill="none" className="w-[11px] h-[18px] shrink-0">
          <path d="M2 2L9 9L2 16" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="mt-6 flex gap-3 overflow-x-auto pb-1 -mx-5 px-5">
        {items.map((item) => (
          <KeyItemCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  )
}
