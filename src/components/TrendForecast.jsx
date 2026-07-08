import { useState } from 'react'
import LifecycleChart from './LifecycleChart.jsx'
import FutureTimeline from './FutureTimeline.jsx'

const ZOOM_MS = 700 // keep in sync with .forecast-zoom in index.css

// Composes the TREND FORECAST chart with its future-timeline detail. Tapping
// the +6-month point zooms into the graph toward that point, then hands off to
// the timeline frame.
export default function TrendForecast() {
  const [view, setView] = useState('chart') // 'chart' | 'zooming' | 'timeline'

  const handleForecastClick = () => {
    if (view !== 'chart') return
    setView('zooming')
    setTimeout(() => setView('timeline'), ZOOM_MS)
  }

  return (
    <div className="relative w-full overflow-hidden">
      {view === 'timeline' ? (
        <div className="forecast-fade-in">
          <button
            type="button"
            onClick={() => setView('chart')}
            className="mx-4 mb-1 flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-gray-500 hover:text-black"
          >
            <span className="text-sm leading-none">←</span> Forecast
          </button>
          <FutureTimeline />
        </div>
      ) : (
        <div className={view === 'zooming' ? 'forecast-zoom' : ''}>
          <LifecycleChart onForecastClick={handleForecastClick} />
        </div>
      )}
    </div>
  )
}
