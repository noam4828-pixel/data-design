import { useState } from 'react'

function Pill({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-[11px] uppercase tracking-wide px-3 py-1.5 border whitespace-nowrap ${
        active ? 'bg-black text-white border-black' : 'border-black/20 text-black'
      }`}
    >
      {label}
    </button>
  )
}

export default function FilterPanel({
  minPrice,
  maxPrice,
  priceLimit,
  onPriceChange,
  stores,
  selectedStores,
  onToggleStore,
  categories,
  selectedCategories,
  onToggleCategory,
  onClear,
  onApply,
}) {
  const [storeQuery, setStoreQuery] = useState('')
  const filteredStores = stores.filter(
    (s) => s.toLowerCase().includes(storeQuery.toLowerCase()) && !selectedStores.includes(s)
  )
  return (
    <div className="absolute right-0 top-full mt-2 z-40 w-[280px] bg-white border border-black/10 rounded-2xl shadow-xl p-5">
      <h3 className="text-[11px] font-extrabold uppercase tracking-wide text-black">Price</h3>
      <div className="mt-3">
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={priceLimit}
          onChange={(e) => onPriceChange(Number(e.target.value))}
          className="w-full accent-black"
        />
        <div className="flex items-center justify-between text-[11px] text-gray-500 mt-1">
          <span>₪{minPrice}</span>
          <span className="font-semibold text-black">Up to ₪{priceLimit}</span>
        </div>
      </div>

      <h3 className="mt-5 text-[11px] font-extrabold uppercase tracking-wide text-black">Store</h3>

      {selectedStores.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {selectedStores.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => onToggleStore(s)}
              className="flex items-center gap-1 text-[11px] uppercase tracking-wide px-3 py-1.5 bg-black text-white"
            >
              {s}
              <span className="text-xs leading-none">×</span>
            </button>
          ))}
        </div>
      )}

      <input
        type="text"
        value={storeQuery}
        onChange={(e) => setStoreQuery(e.target.value)}
        placeholder="Search store..."
        className="w-full mt-3 border border-black/20 px-3 py-2 text-[12px] outline-none focus:border-black"
      />

      {storeQuery && (
        <div className="mt-2 max-h-32 overflow-y-auto border border-black/10 divide-y divide-black/5">
          {filteredStores.length > 0 ? (
            filteredStores.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => {
                  onToggleStore(s)
                  setStoreQuery('')
                }}
                className="block w-full text-left px-3 py-2 text-[12px] uppercase tracking-wide text-black hover:bg-black/5"
              >
                {s}
              </button>
            ))
          ) : (
            <p className="px-3 py-2 text-[12px] text-gray-400">No stores found</p>
          )}
        </div>
      )}

      <h3 className="mt-5 text-[11px] font-extrabold uppercase tracking-wide text-black">Category</h3>
      <div className="flex flex-wrap gap-2 mt-3">
        {categories.map((c) => (
          <Pill key={c} label={c} active={selectedCategories.includes(c)} onClick={() => onToggleCategory(c)} />
        ))}
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-black/10">
        <button type="button" onClick={onClear} className="text-[12px] uppercase tracking-wide text-gray-500">
          Clear
        </button>
        <button
          type="button"
          onClick={onApply}
          className="bg-black text-white text-[12px] font-semibold uppercase tracking-wide px-4 py-2"
        >
          Apply
        </button>
      </div>
    </div>
  )
}
