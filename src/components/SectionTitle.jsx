// Big editorial section heading (Figma: BBH Bartle, 32px, uppercase, tight).
// Words wrap to their own lines to fill the column, matching the design.
export default function SectionTitle({ children, className = '' }) {
  return (
    <h2
      className={`font-display uppercase text-black text-[32px] leading-[40px] tracking-[-0.8px] ${className}`}
    >
      {children}
    </h2>
  )
}
