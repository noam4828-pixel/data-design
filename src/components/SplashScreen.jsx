import { useEffect, useState } from 'react'

// Full-screen intro splash: the LOOK BOOK wordmark on white, held briefly then
// faded out to reveal the app.
export default function SplashScreen({ onDone }) {
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const hold = setTimeout(() => setLeaving(true), 2100)
    const done = setTimeout(() => onDone?.(), 2650)
    return () => {
      clearTimeout(hold)
      clearTimeout(done)
    }
  }, [onDone])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 ${
        leaving ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <h1 className="font-display uppercase text-black text-center text-[64px] leading-[0.95] tracking-[-2px]">
        <span className="splash-line">
          <span style={{ animationDelay: '0.1s' }}>LOOK</span>
        </span>
        <span className="splash-line">
          <span style={{ animationDelay: '0.28s' }}>BOOK</span>
        </span>
      </h1>
    </div>
  )
}
