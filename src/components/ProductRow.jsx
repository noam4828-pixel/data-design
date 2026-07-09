import KeyItemCard from './KeyItemCard.jsx'

// One curated sub-collection inside "How to Adopt It": a sub-heading with a
// "view all" link, then a horizontally scrolling row of product cards.
export default function ProductRow({ title, items, nameOnly, placeholder, onViewAll }) {
  return (
    <div>
      <div className="flex items-baseline justify-between px-5">
        <h3 className="font-semibold uppercase text-[20px] tracking-[-0.8px] text-black">{title}</h3>
        <button
          type="button"
          onClick={onViewAll}
          className="text-[16px] text-[#5E5E5E] underline underline-offset-2 shrink-0"
        >
          view all
        </button>
      </div>

      <div className="mt-3 flex gap-3 overflow-x-auto pb-1 px-5">
        {items.map((item, i) => (
          <KeyItemCard key={`${item.name}-${i}`} item={item} nameOnly={nameOnly} placeholder={placeholder} />
        ))}
      </div>
    </div>
  )
}
