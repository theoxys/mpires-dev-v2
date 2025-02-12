import type { HeroBlock as HeroBlockProps } from '@/payload-types'
import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'

type Props = {
  className?: string
} & HeroBlockProps

export const HeroBlock: React.FC<Props> = ({ className, title, description, image, waveEmoji }) => {
  return (
    <div className={cn('mx-auto my-8 w-full max-w-[900px]', className)}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-32 h-32 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
          {image && <Media resource={image} className="w-full h-full object-cover" />}
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">
            {title} {waveEmoji}
          </h1>
          <div className="text-lg text-muted-foreground">
            <RichText data={description} />
          </div>
        </div>
      </div>
    </div>
  )
}
