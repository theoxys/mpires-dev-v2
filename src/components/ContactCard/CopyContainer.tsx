'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { cn } from '@/utilities/ui'

interface CopyContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string
}

export const CopyContainer = ({ text, className, ...props }: CopyContainerProps) => {
  const [copied, setCopied] = useState(false)

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 1500)
    } catch (err) {
      console.error('Falha ao copiar texto:', err)
    }
  }

  return (
    <div
      className={cn('flex h-10 items-center border border-border rounded-xl bg-element', className)}
      {...props}
    >
      <div
        className="flex-1 px-3 py-2 select-all cursor-default border-r-2  border-border text-neutral/70"
        role="textbox"
        aria-readonly="true"
      >
        {text}
      </div>
      <button
        onClick={copyText}
        className="px-3 h-full grow hover:bg-neutral/10 rounded-r-xl transition-colors cursor-pointer"
      >
        {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  )
}
