import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Notices from './pages/Notices'
import NoticeDetails from './pages/NoticeDetails'
import Programs from './pages/Programs'
import ProgramDetails from './pages/ProgramDetails'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/notices/:id" element={<NoticeDetails />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:id" element={<ProgramDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
