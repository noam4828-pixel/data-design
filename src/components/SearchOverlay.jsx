import { useEffect, useRef, useState } from 'react'

// Full-screen trend search. Opens focused (keyboard up on mobile), filters
// trends live by title, and selects a result on tap or Enter.
export default function SearchOverlay({ trends, onSelect, onClose }) {
  const [q, setQ] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  const query = q.trim().toLowerCase()
  const results = query ? trends.filter((t) => t.title.toLowerCase().includes(query)) : []

  const submit = (e) => {
    e.preventDefault()
    if (results.length > 0) onSelect(results[0])
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white">
      {/* Search bar — mirrors the header's height and padding */}
      <form onSubmit={submit} className="flex items-end h-[103px] px-6 pb-[6px] border-b border-black">
        <div className="flex w-full items-center gap-3 h-[50px]">
          <svg viewBox="0 0 23 23" fill="none" className="w-[22px] h-[22px] shrink-0">
            <circle cx="9.5" cy="9.5" r="7.5" stroke="black" strokeWidth="1.5" />
            <path d="M15 15L21 21" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search a trend"
            className="flex-1 bg-transparent text-[18px] text-black outline-none placeholder:text-black/40"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="shrink-0 text-[24px] leading-none text-black"
          >
            ×
          </button>
        </div>
      </form>

      {/* Live results */}
      <div className="flex-1 overflow-y-auto">
        {query && results.length === 0 && (
          <p className="px-6 pt-8 text-[14px] text-black/50">No trends found for “{q.trim()}”.</p>
        )}
        {results.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => onSelect(t)}
            className="flex w-full items-center gap-4 border-b border-black/5 px-6 py-3 text-left hover:bg-black/[0.03]"
          >
            <div className="h-12 w-12 shrink-0 overflow-hidden bg-[#F2F2F2]">
              <img src={t.image} alt="" className="h-full w-full object-cover" draggable={false} />
            </div>
            <div>
              <p className="font-display text-[18px] uppercase leading-none tracking-[-0.5px] text-black">
                {t.title}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-wide text-black/40">{t.status}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
