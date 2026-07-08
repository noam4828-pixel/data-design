import KeyItemCard from './KeyItemCard.jsx'

export default function KeyItems({ items, onViewAll }) {
  return (
    <div className="mt-5">
      <div className="flex items-baseline justify-between">
        <h2 className="text-2xl font-extrabold text-black tracking-tight">KEY ITEMS</h2>
        <button
          type="button"
          onClick={onViewAll}
          className="text-[13px] text-black underline underline-offset-2"
        >
          view all
        </button>
      </div>

      <div className="mt-4 flex gap-3 overflow-x-auto pb-1 -mx-5 px-5">
        {items.map((item) => (
          <KeyItemCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  )
}
