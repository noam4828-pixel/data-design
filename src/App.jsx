import { useState } from 'react'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import TrendDetail from './components/TrendDetail.jsx'
import KeyItemsPage from './components/KeyItemsPage.jsx'
import SplashScreen from './components/SplashScreen.jsx'
import SearchOverlay from './components/SearchOverlay.jsx'
import { trends } from './data/trends.js'

export default function App() {
  const [selected, setSelected] = useState(null)
  const [page, setPage] = useState('home') // 'home' | 'detail' | 'keyItems'
  const [showSplash, setShowSplash] = useState(true)
  const [searchOpen, setSearchOpen] = useState(false)

  const handleSelect = (trend) => {
    setSelected(trend)
    setPage('detail')
    setSearchOpen(false)
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
      ? { title: 'LOOK BOOK', leftIcon: 'menu', onLeftClick: undefined, rightIcon: 'search', onRightClick: () => setSearchOpen(true) }
      : page === 'detail'
        ? { title: 'LOOK BOOK', leftIcon: 'back', onLeftClick: handleBack }
        : { title: 'KEY ITEMS', leftIcon: 'back', onLeftClick: handleBack }

  return (
    <div className="max-w-[480px] mx-auto bg-white min-h-screen overflow-y-auto border-x border-black/5">
      {showSplash && <SplashScreen onDone={() => setShowSplash(false)} />}
      <Header {...headerProps} />
      {/* Spacer matching the fixed header's height so content isn't hidden beneath it */}
      <div className="h-[103px]" aria-hidden="true" />
      {page === 'home' && <Home trends={trends} onSelect={handleSelect} />}
      {page === 'detail' && selected && (
        <TrendDetail trend={selected} onViewAllKeyItems={handleViewAllKeyItems} />
      )}
      {page === 'keyItems' && selected && <KeyItemsPage trend={selected} />}
      {searchOpen && (
        <SearchOverlay trends={trends} onSelect={handleSelect} onClose={() => setSearchOpen(false)} />
      )}
    </div>
  )
}
