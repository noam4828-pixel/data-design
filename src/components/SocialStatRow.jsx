export default function SocialStatRow({ icon, label, value }) {
  return (
    <div className="flex items-center justify-between border border-gray-200 px-4 py-4">
      <div className="flex items-center gap-3">
        <span className="w-5 h-5 text-black">{icon}</span>
        <span className="text-[11px] font-bold uppercase tracking-wide text-black">{label}</span>
      </div>
      <span className="text-xl font-extrabold text-black">{value}%</span>
    </div>
  )
}
