export default function Badge({ status, size = 'md' }) {
  const sizeClasses =
    size === 'sm'
      ? 'text-[6px] px-1 py-[2px]'
      : 'text-[9px] px-2 py-1 tracking-wider'
  return (
    <span
      className={`absolute top-2 left-2 z-20 bg-black text-white font-semibold uppercase ${sizeClasses}`}
    >
      {status}
    </span>
  )
}
