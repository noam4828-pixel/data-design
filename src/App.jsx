import { useState } from 'react'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import TrendDetail from './components/TrendDetail.jsx'
import KeyItemsPage from './components/KeyItemsPage.jsx'
import { trends } from './data/trends.js'

export default function App() {
  const [selected, setSelected] = useState(null)
  const [page, setPage] = useState('home') // 'home' | 'detail' | 'keyItems'

  const handleSelect = (trend) => {
    setSelected(trend)
    setPage('detail')
    window.scrollTo(0, 0)
  }

  const handleViewAllKeyItems = () => {
    setPage('keyItems')
    window.scrollTo(0, 0)
  }

  const handleBack = () => {
    if (page === 'keyItems') {
      setPage('detail')
    } else {
      setPage('home')
      setSelected(null)
    }
    window.scrollTo(0, 0)
  }

  const headerProps =
    page === 'home'
      ? { title: 'TREND REPORT', leftIcon: 'menu', onLeftClick: undefined }
      : page === 'detail'
        ? { title: 'TREND REPORT', leftIcon: 'back', onLeftClick: handleBack }
        : { title: 'KEY ITEMS', leftIcon: 'back', onLeftClick: handleBack }

  return (
    <div className="max-w-[480px] mx-auto bg-white min-h-screen overflow-y-auto border-x border-black/5">
      <Header {...headerProps} />
      {page === 'home' && <Home trends={trends} onSelect={handleSelect} />}
      {page === 'detail' && selected && (
        <TrendDetail trend={selected} onViewAllKeyItems={handleViewAllKeyItems} />
      )}
      {page === 'keyItems' && selected && <KeyItemsPage trend={selected} />}
    </div>
  )
}
