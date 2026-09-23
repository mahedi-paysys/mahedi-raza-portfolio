import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { GlobalBackground } from '@/components/layout/GlobalBackground'
import { PageTransition } from '@/components/layout/PageTransition'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import { HomePage } from '@/pages/HomePage'
import { WorkPage } from '@/pages/WorkPage'
import { ProjectDetailPage } from '@/pages/ProjectDetailPage'
import { AboutPage } from '@/pages/AboutPage'
import { ExperiencePage } from '@/pages/ExperiencePage'
import { ContactPage } from '@/pages/ContactPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

function withTransition(element: React.ReactNode) {
  return <PageTransition>{element}</PageTransition>
}

export function AppRouter() {
  const location = useLocation()
  useScrollToTop()

  return (
    <>
      <GlobalBackground />
      <Header />
      <main className="min-h-screen relative z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={withTransition(<HomePage />)} />
            <Route path="/work" element={withTransition(<WorkPage />)} />
            <Route path="/projects" element={<Navigate to="/work" replace />} />
            <Route path="/work/:slug" element={withTransition(<ProjectDetailPage />)} />
            <Route path="/about" element={withTransition(<AboutPage />)} />
            <Route path="/experience" element={withTransition(<ExperiencePage />)} />
            <Route path="/contact" element={withTransition(<ContactPage />)} />
            <Route path="*" element={withTransition(<NotFoundPage />)} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}
