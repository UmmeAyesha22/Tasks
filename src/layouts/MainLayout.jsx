import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Ticker from '../components/Ticker'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

export default function MainLayout() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return (
    <div className="flex min-h-screen flex-col">
      <Ticker />
      <Navbar />
      <main className="flex-1"><Outlet /></main>
      <Footer />
      <BackToTop />
    </div>
  )
}
