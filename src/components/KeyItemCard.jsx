import { useState } from 'react'

// `nameOnly` renders a "Shop Your Closet"-style card: image + a single item
// name, without brand or price.
export default function KeyItemCard({ item, nameOnly }) {
  const [errored, setErrored] = useState(false)

  return (
    <div className="w-[159px] flex-shrink-0">
      <div className="relative w-[159px] h-[159px] bg-[#F2F2F2] overflow-hidden">
        {item.image && !errored && (
          <img
            src={item.image}
            alt={nameOnly ? item.name : `${item.brand} ${item.name}`}
            className={`absolute inset-0 w-full h-full ${
              item.imageFit === 'cover' ? 'object-cover' : 'object-contain'
            }`}
            draggable={false}
            onError={() => setErrored(true)}
          />
        )}
      </div>
      {nameOnly ? (
        <p className="mt-4 text-[16px] font-normal text-black">{item.name}</p>
      ) : (
        <>
          <p className="mt-2 text-[16px] font-normal text-black">{item.brand}</p>
          <p className="text-[16px] font-normal text-[#5E5E5E]">{item.name}</p>
          <p className="text-[16px] font-normal text-black">{item.price}</p>
        </>
      )}
    </div>
  )
}
