import React from 'react'
import Link from 'next/link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { Button } from '@/components/ui/button'
import { cn } from '@/utilities/ui'
import { getCachedGlobal } from '@/utilities/getGlobals'
import type { Hero as HeroType } from '@/payload-types'
import { getCachedMediaById } from '@/utilities/getMediaById'
import { Ripple } from '@/components/Ripple/Ripple'

type HeroProps = {
  className?: string
}

export async function Hero({ className }: HeroProps) {
  const heroData: HeroType = (await getCachedGlobal('hero', 1)()) as HeroType
  let mediaResource = null

  console.log(heroData)

  const { leftColumn, rightColumn } = heroData
  const { title, subtitle, buttons } = leftColumn
  const { image } = rightColumn

  if (image && typeof image === 'string') {
    mediaResource = await getCachedMediaById(image)()
  }

  if (image && typeof image === 'object') {
    mediaResource = image
  }

  return (
    <div className={cn('w-full', className)}>
      <div className="flex flex-col justify-between md:flex-row gap-8 items-center">
        <div className="flex flex-col gap-6 md:w-1/2">
          <h1 className="text-5xl font-bold tracking-tight">{title}</h1>
          <div className="text-xl text-muted-foreground">
            <RichText data={subtitle} />
          </div>

          {(buttons?.primaryButton?.enabled || buttons?.secondaryButton?.enabled) && (
            <div className="flex gap-4 mt-4">
              {buttons?.primaryButton?.enabled && (
                <PrimaryButton href={buttons.primaryButton.link || '#'}>
                  {buttons.primaryButton.label || ''}
                </PrimaryButton>
              )}

              {buttons?.secondaryButton?.enabled && (
                <SecondaryButton href={buttons.secondaryButton.link || '#'}>
                  {buttons.secondaryButton.label || ''}
                </SecondaryButton>
              )}
            </div>
          )}
        </div>

        <div className="relative w-[400px] h-[400px] flex items-center justify-center">
          <div className="relative aspect-square w-full max-w-[300px] rounded-full overflow-hidden border-4 border-border shadow-xl">
            {mediaResource && (
              <Media
                resource={mediaResource}
                className="w-full h-full object-cover rounded-2xl"
                fill
              />
            )}
          </div>
          <Ripple
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] -z-10"
            mainCircleSize={200}
            numCircles={5}
            mainCircleOpacity={0.2}
          />
        </div>
      </div>
    </div>
  )
}

const PrimaryButton = ({
  className,
  href,
  children,
}: {
  className?: string
  href: string
  children: React.ReactNode
}) => {
  return (
    <Link
      href={href}
      className={cn(
        'relative h-12 w-40 overflow-hidden rounded-lg flex items-center justify-center',
        'border border-stone-800 bg-stone-800',
        'hover:shadow-stone-500/20 hover:before:-translate-x-40',
        'shadow-transparent shadow-2xl',
        'text-white',
        'transition-all',
        'before:ease before:absolute before:right-0 before:top-0',
        'before:h-12 before:w-6',
        'before:translate-x-12 before:rotate-6',
        'before:bg-white/70 before:opacity-5',
        'before:duration-700',
        'hover:scale-105',
        className,
      )}
    >
      <span className="z-10">{children}</span>
    </Link>
  )
}

const SecondaryButton = ({
  className,
  href,
  children,
}: {
  className?: string
  href: string
  children: React.ReactNode
}) => {
  return (
    <Link
      href={href}
      className={cn(
        'relative h-12 w-fit px-4 overflow-hidden rounded-lg flex items-center justify-center',
        'border border-stone-100 bg-stone-100',
        'hover:shadow-stone-500/20 hover:before:-translate-x-40',
        'shadow-transparent shadow-2xl',
        'text-stone-950',
        'transition-all',
        'before:ease before:absolute before:right-0 before:top-0',
        'before:h-12 before:w-6',
        'before:translate-x-14 before:rotate-6',
        'before:bg-slate-400 before:opacity-10',
        'before:duration-700',
        'hover:scale-105',
        className,
      )}
    >
      <span className="z-10">{children}</span>
    </Link>
  )
}
