import { useEffect, useMemo, useRef, useState } from 'react'
import { splitTitle } from '../lib/text.js'
import { CATEGORY_GROUPS } from '../lib/categories.js'
import { PinIcon, FilterIcon, PlayIcon } from './icons.jsx'
import KeyItemGridCard from './KeyItemGridCard.jsx'
import FilterPanel from './FilterPanel.jsx'

const parsePrice = (price) => parseFloat(price.replace(/[^\d.]/g, ''))
const categories = CATEGORY_GROUPS.map((g) => g.label)

export default function KeyItemsPage({ trend }) {
  const [line1, line2] = splitTitle(trend.title)
  const [filterOpen, setFilterOpen] = useState(false)
  const filterRef = useRef(null)

  const prices = useMemo(() => trend.keyItems.map((item) => parsePrice(item.price)), [trend.keyItems])
  const minPrice = Math.floor(Math.min(...prices))
  const maxPrice = Math.ceil(Math.max(...prices))
  const stores = useMemo(() => [...new Set(trend.keyItems.map((item) => item.brand))], [trend.keyItems])

  const [priceLimit, setPriceLimit] = useState(maxPrice)
  const [selectedStores, setSelectedStores] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])

  useEffect(() => {
    if (!filterOpen) return
    const handlePointerDown = (e) => {
      if (filterRef.current && filterRef.current.contains(e.target)) return
      setFilterOpen(false)
    }
    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('touchstart', handlePointerDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('touchstart', handlePointerDown)
    }
  }, [filterOpen])

  const toggleStore = (store) =>
    setSelectedStores((prev) => (prev.includes(store) ? prev.filter((s) => s !== store) : [...prev, store]))

  const toggleCategory = (category) =>
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    )

  const clearFilters = () => {
    setPriceLimit(maxPrice)
    setSelectedStores([])
    setSelectedCategories([])
  }

  const filteredItems = trend.keyItems.filter((item) => {
    if (parsePrice(item.price) > priceLimit) return false
    if (selectedStores.length > 0 && !selectedStores.includes(item.brand)) return false
    if (selectedCategories.length > 0) {
      const matchesCategory = selectedCategories.some((label) => {
        const group = CATEGORY_GROUPS.find((g) => g.label === label)
        return group?.values.includes(item.category)
      })
      if (!matchesCategory) return false
    }
    return true
  })

  const filtersActive =
    priceLimit !== maxPrice || selectedStores.length > 0 || selectedCategories.length > 0

  return (
    <div className="relative pb-24">
      <div className="px-5 pt-7">
        <h1 className="font-display uppercase text-[48px] leading-[50px] text-black">
          <span className="block">{line1}</span>
          {line2 && <span className="block">{line2}</span>}
        </h1>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2 text-black">
            <PinIcon className="w-3 h-[15px]" />
            <span className="text-[14px] tracking-[1.4px] uppercase">Available in Israel</span>
          </div>
          <div ref={filterRef} className="relative">
            <button
              type="button"
              onClick={() => setFilterOpen((open) => !open)}
              className="flex items-center gap-1.5 bg-black text-white text-[13px] px-3 py-2"
            >
              <FilterIcon className="w-4 h-4" />
              Filter
              {filtersActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
            </button>

            {filterOpen && (
              <FilterPanel
                minPrice={minPrice}
                maxPrice={maxPrice}
                priceLimit={priceLimit}
                onPriceChange={setPriceLimit}
                stores={stores}
                selectedStores={selectedStores}
                onToggleStore={toggleStore}
                categories={categories}
                selectedCategories={selectedCategories}
                onToggleCategory={toggleCategory}
                onClear={clearFilters}
                onApply={() => setFilterOpen(false)}
              />
            )}
          </div>
        </div>
      </div>

      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-2 gap-x-3 gap-y-6 px-5 mt-6">
          {filteredItems.map((item) => (
            <KeyItemGridCard key={item.name + item.brand} item={item} />
          ))}
        </div>
      ) : (
        <p className="px-5 mt-10 text-center text-[13px] text-gray-500">No items match these filters.</p>
      )}

      <button
        type="button"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black text-white text-[13px] font-semibold uppercase px-5 py-3 z-40"
      >
        Match My Wardrobe
        <PlayIcon className="w-3.5 h-3.5" />
      </button>
    </div>
  )
}
