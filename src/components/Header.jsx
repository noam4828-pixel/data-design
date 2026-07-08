// Top app bar — built to match Figma node 0:165:
// 103px tall, content (a 50px row) bottom-aligned with 6px of breathing room,
// laid out as three auto-layout regions — left icon | centred title | right
// icon — so the title stays optically centred regardless of the side icons.
export default function Header({ title = 'LOOK BOOK', leftIcon = 'menu', onLeftClick, rightIcon, onRightClick }) {
  return (
    <header className="sticky top-0 z-30 flex items-end bg-[#f9f9f9] border-b border-black h-[103px] pb-[6px] px-6">
      <div className="flex w-full items-center h-[50px]">
        {/* Left region */}
        <div className="flex-1 flex items-center">
          <button
            type="button"
            onClick={onLeftClick}
            aria-label={leftIcon === 'back' ? 'Back' : 'Menu'}
            className="flex items-center justify-center"
          >
            {leftIcon === 'back' ? (
              <svg viewBox="0 0 12 18" fill="none" className="w-[12px] h-[18px]">
                <path d="M10 2L3 9L10 16" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 18 12" fill="none" className="w-[18px] h-[12px]">
                <path d="M0 1H18" stroke="black" strokeWidth="1.5" />
                <path d="M0 6H18" stroke="black" strokeWidth="1.5" />
                <path d="M0 11H18" stroke="black" strokeWidth="1.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Centred title */}
        <h1 className="font-display uppercase text-[24px] leading-none tracking-[-2px] text-black text-center whitespace-nowrap">
          {title}
        </h1>

        {/* Right region */}
        <div className="flex-1 flex items-center justify-end">
          {rightIcon === 'search' && (
            <button type="button" onClick={onRightClick} aria-label="Search" className="flex items-center justify-center">
              <svg viewBox="0 0 23 23" fill="none" className="w-[23px] h-[23px]">
                <circle cx="9.5" cy="9.5" r="7.5" stroke="black" strokeWidth="1.5" />
                <path d="M15 15L21 21" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
