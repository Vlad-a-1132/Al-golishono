'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface AccessibilityContextType {
  isAccessibilityMode: boolean
  toggleAccessibilityMode: () => void
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [isAccessibilityMode, setIsAccessibilityMode] = useState(false)

  useEffect(() => {
    // Load saved preference from localStorage
    const saved = localStorage.getItem('accessibilityMode')
    if (saved === 'true') {
      setIsAccessibilityMode(true)
    }
  }, [])

  useEffect(() => {
    // Apply accessibility mode to document
    if (isAccessibilityMode) {
      document.documentElement.classList.add('accessibility-mode')
      document.body.classList.add('accessibility-mode')
      localStorage.setItem('accessibilityMode', 'true')
    } else {
      document.documentElement.classList.remove('accessibility-mode')
      document.body.classList.remove('accessibility-mode')
      localStorage.setItem('accessibilityMode', 'false')
    }
  }, [isAccessibilityMode])

  const toggleAccessibilityMode = () => {
    setIsAccessibilityMode(prev => !prev)
  }

  return (
    <AccessibilityContext.Provider value={{ isAccessibilityMode, toggleAccessibilityMode }}>
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider')
  }
  return context
}

