import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Ticker from '../components/Ticker'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

export default function MainLayout() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return (
    <>
      <Ticker />
      <Navbar />
      <main><Outlet /></main>
      <Footer />
      <BackToTop />
    </>
  )
}
