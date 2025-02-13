'use client'

import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import React, { useState, useEffect } from 'react'

import { useTheme } from '..'
import { Theme, themeLocalStorageKey } from './types'

export const ThemeSelector: React.FC = () => {
  const { setTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState<Theme>('light')

  const toggleTheme = () => {
    const newTheme: Theme = currentTheme === 'light' ? 'dark' : 'light'
    setCurrentTheme(newTheme)
    setTheme(newTheme)
    window.localStorage.setItem(themeLocalStorageKey, newTheme)
  }

  useEffect(() => {
    const preference = window.localStorage.getItem(themeLocalStorageKey)
    setCurrentTheme((preference as Theme) ?? 'light')
  }, [])

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Alternar tema"
      className="w-9 h-9"
    >
      {currentTheme === 'dark' ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  )
}
