'use client'

import { usePathname } from 'next/navigation'
import { AccessibilityProvider } from '../contexts/AccessibilityContext'
import Header from './Header'
import Footer from './Footer'
import MobileBottomNav from './MobileBottomNav'
import CallbackModal from './CallbackModal'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isPricesViewer = pathname === '/prices'

  if (isPricesViewer) {
    return <>{children}</>
  }

  return (
    <AccessibilityProvider>
      <Header />
      <main className="flex-grow">{children}</main>
      {/* Spacer for mobile bottom nav */}
      <div className="h-20 md:hidden"></div>
      <Footer />
      <MobileBottomNav />
      <CallbackModal />
    </AccessibilityProvider>
  )
}

