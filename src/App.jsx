import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { trackPageView } from './analytics'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import SoftwareIndex from './pages/SoftwareIndex'
import CategoryPage from './pages/CategoryPage'
import SoftwareDetail from './pages/SoftwareDetail'
import BoardsIndex from './pages/BoardsIndex'
import BoardPage from './pages/BoardPage'
import About from './pages/About'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AnalyticsTracker() {
  const { pathname, search } = useLocation()
  useEffect(() => {
    trackPageView(pathname + search)
  }, [pathname, search])
  return null
}

export default function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <AnalyticsTracker />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/software" element={<SoftwareIndex />} />
          <Route path="/software/:categoryId" element={<CategoryPage />} />
          <Route path="/software/:categoryId/:softwareId" element={<SoftwareDetail />} />
          <Route path="/boards" element={<BoardsIndex />} />
          <Route path="/boards/:softwareId" element={<BoardPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
