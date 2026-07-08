export default function Header({ title = 'TREND REPORT', leftIcon = 'menu', onLeftClick }) {
  return (
    <header className="sticky top-0 z-30 flex items-center bg-white border-b border-black/10 h-[91px] px-4">
      <button
        type="button"
        onClick={onLeftClick}
        aria-label={leftIcon === 'back' ? 'Back' : 'Menu'}
        className="flex items-center justify-center w-8 h-8 -ml-1"
      >
        {leftIcon === 'back' ? (
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
            <path d="M15 5L8 12L15 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
            <path d="M3 6H21" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <path d="M3 12H21" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <path d="M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>
      <h1 className="flex-1 text-center text-[17px] font-extrabold tracking-tight text-black pr-8">
        {title}
      </h1>
    </header>
  )
}
