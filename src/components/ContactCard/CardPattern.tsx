'use client'
import { cn } from '@/utilities/ui'
import { useEffect, useState } from 'react'
export const CardPattern = () => {
  const [theme, setTheme] = useState('')

  useEffect(() => {
    const updateTheme = () => {
      setTheme(document.documentElement.getAttribute('data-theme') ?? '')
    }

    updateTheme()

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          updateTheme()
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={cn(
        'absolute top-0 flex bg-repeat z-30 rounded-lg m-[2px]',
        'w-full h-full z-10 pointer-events-none',
        theme === 'dark' ? 'opacity-[2%]' : 'opacity-[5%]',
      )}
      style={{
        backgroundImage:
          theme === 'dark'
            ? `url("/media/card-pattern-white.svg")`
            : `url("/media/card-pattern.svg")`,
      }}
    />
  )
}
