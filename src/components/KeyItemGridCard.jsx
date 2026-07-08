import { useState } from 'react'

export default function KeyItemGridCard({ item }) {
  const [errored, setErrored] = useState(false)

  return (
    <div className="w-full">
      <div className="relative w-full aspect-[4/5] bg-[#F2F2F2] overflow-hidden">
        {!errored && (
          <img
            src={item.image}
            alt={`${item.brand} ${item.name}`}
            className={`absolute inset-0 w-full h-full ${item.imageFit === 'cover' ? 'object-cover' : 'object-contain'}`}
            draggable={false}
            onError={() => setErrored(true)}
          />
        )}
      </div>
      <p className="mt-3 text-[16px] font-normal text-black">{item.brand}</p>
      <p className="text-[16px] font-normal text-[#5E5E5E]">{item.name}</p>
      <p className="text-[16px] font-normal text-black">{item.price}</p>
    </div>
  )
}
