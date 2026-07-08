import { useState } from 'react'

export default function KeyItemCard({ item }) {
  const [errored, setErrored] = useState(false)

  return (
    <div className="w-[159px] flex-shrink-0">
      <div className="relative w-[159px] h-[159px] bg-[#F2F2F2] overflow-hidden">
        {!errored && (
          <img
            src={item.image}
            alt={`${item.brand} ${item.name}`}
            className="absolute inset-0 w-full h-full object-contain"
            draggable={false}
            onError={() => setErrored(true)}
          />
        )}
      </div>
      <p className="mt-2 text-[16px] font-normal text-black">{item.brand}</p>
      <p className="text-[16px] font-normal text-[#5E5E5E]">{item.name}</p>
      <p className="text-[16px] font-normal text-black">{item.price}</p>
    </div>
  )
}
