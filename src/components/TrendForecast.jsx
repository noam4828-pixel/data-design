import LifecycleChart from './LifecycleChart.jsx'

// The TREND FORECAST chart. Tapping the +6-month point previously opened a
// future-timeline card; that card was removed and a new one will be wired in
// here later. For now the tap is a no-op (the point keeps its glow affordance).
export default function TrendForecast({ trajectory = 'peak' }) {
  return (
    <div className="relative w-full">
      <LifecycleChart trajectory={trajectory} onForecastClick={() => {}} />
    </div>
  )
}
