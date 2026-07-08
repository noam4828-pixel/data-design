export function SearchIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
      <path d="M20 20L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function BookmarkIcon({ className, filled }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M6 3.5H18V21L12 17L6 21V3.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill={filled ? 'currentColor' : 'none'}
      />
    </svg>
  )
}

export function TikTokIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16.6 5.82a4.28 4.28 0 0 1-2.6-3.32h-3.02v13.13a2.6 2.6 0 1 1-1.85-2.49V9.93a5.8 5.8 0 1 0 4.87 5.72V9.4a7.27 7.27 0 0 0 4.2 1.34V7.62a4.28 4.28 0 0 1-1.6-1.8z" />
    </svg>
  )
}

export function PinIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 21s7-6.06 7-11.5A7 7 0 0 0 5 9.5C5 14.94 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function FilterIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="9" cy="7" r="1.8" fill="currentColor" />
      <circle cx="15" cy="12" r="1.8" fill="currentColor" />
      <circle cx="9" cy="17" r="1.8" fill="currentColor" />
    </svg>
  )
}

export function PlayIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M7 4.5v15l13-7.5-13-7.5Z" />
    </svg>
  )
}

export function PlusIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function CheckIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 12.5L9.5 17L19 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ChevronLeftIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M15 5L8 12L15 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ChevronRightIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function InstagramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.15" fill="currentColor" />
    </svg>
  )
}

export function PinterestIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.63 7.86 6.34 9.34-.09-.79-.17-2.01.04-2.88.19-.79 1.23-5.04 1.23-5.04s-.31-.63-.31-1.55c0-1.46.85-2.55 1.9-2.55.9 0 1.33.67 1.33 1.48 0 .9-.57 2.25-.87 3.5-.25 1.05.53 1.9 1.56 1.9 1.87 0 3.13-2.4 3.13-5.25 0-2.17-1.46-3.79-4.12-3.79-3 0-4.87 2.24-4.87 4.74 0 .87.26 1.48.66 1.96.18.22.21.31.14.56-.05.19-.16.65-.21.83-.07.27-.28.37-.51.27-1.43-.58-2.1-2.14-2.1-3.89 0-2.89 2.44-6.36 7.27-6.36 3.89 0 6.45 2.81 6.45 5.83 0 3.99-2.23 6.97-5.51 6.97-1.1 0-2.14-.6-2.49-1.29 0 0-.59 2.36-.71 2.81-.21.81-.63 1.62-1.01 2.25.91.27 1.87.42 2.87.42 5.52 0 10-4.48 10-10S17.52 2 12 2z"
      />
    </svg>
  )
}
