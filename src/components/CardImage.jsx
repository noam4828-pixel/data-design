import { useEffect, useState } from 'react'
import { subscribeTick, getTick } from '../lib/carouselTick.js'

export default function CardImage({ src, images, alt, palette }) {
  const gallery = images && images.length > 0 ? images : [src]
  const [tick, setTick] = useState(getTick)
  const [errored, setErrored] = useState({})
  const [from, to] = palette || []

  useEffect(() => {
    if (gallery.length < 2) return
    return subscribeTick(setTick)
  }, [gallery.length])

  const index = tick % gallery.length
  const allErrored = gallery.every((_, i) => errored[i])

  return (
    <>
      {!allErrored &&
        gallery.map(
          (image, i) =>
            !errored[i] && (
              <img
                key={image}
                src={image}
                alt={alt}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  i === index ? 'opacity-100' : 'opacity-0'
                }`}
                draggable={false}
                onError={() => setErrored((e) => ({ ...e, [i]: true }))}
              />
            )
        )}
      {allErrored && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: `linear-gradient(135deg, ${from?.hex ?? '#d4d4d4'}, ${to?.hex ?? '#404040'})`,
          }}
          role="img"
          aria-label={alt}
        />
      )}
    </>
  )
}
