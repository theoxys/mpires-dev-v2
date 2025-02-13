'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { cn } from '@/utilities/ui'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const [theme, setTheme] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'w-full fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-border',
        isScrolled && 'bg-background/70 border-b backdrop-blur-2xl shadow-xs',
      )}
    >
      <div className="container px-4 overflow-x-hidden w-full mx-auto">
        <div
          className={cn(
            'max-w-[900px] mx-auto flex justify-between items-center transition-all ease-in-out duration-200',
            isScrolled ? 'py-6' : 'py-8',
          )}
        >
          <Link href="/">
            <Logo
              className={cn(
                'invert dark:invert-0 h-8 transition-all ease-in-out duration-200',
                isScrolled ? 'h-6' : 'h-8',
              )}
            />
          </Link>
          <HeaderNav data={data} />
        </div>
      </div>
    </header>
  )
}
