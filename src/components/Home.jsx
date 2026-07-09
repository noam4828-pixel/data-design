import TrendCard from './TrendCard.jsx'

export default function Home({ trends, onSelect }) {
  const hero = trends.slice(0, 3)
  const medium = trends.slice(3, 9)
  const small = trends.slice(9, 21)
  const micro = trends.slice(21)

  return (
    <div>
      <div className="flex flex-col gap-0">
        {hero.map((trend) => (
          <TrendCard
            key={trend.id}
            trend={trend}
            variant="hero"
            onSelect={onSelect}
            tall={trend.id === 1}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-0">
        {medium.map((trend) => (
          <TrendCard key={trend.id} trend={trend} variant="medium" onSelect={onSelect} />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-0">
        {small.map((trend) => (
          <TrendCard key={trend.id} trend={trend} variant="small" onSelect={onSelect} />
        ))}
      </div>

      {micro.length > 0 && (
        <div className="grid grid-cols-4 gap-0">
          {micro.map((trend) => (
            <TrendCard key={trend.id} trend={trend} variant="micro" onSelect={onSelect} />
          ))}
        </div>
      )}
    </div>
  )
}
