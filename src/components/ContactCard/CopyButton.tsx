'use client'

import { Button } from '@/components/ui/button'
import { Copy } from 'lucide-react'

export const CopyButton = ({ email }: { email: string }) => {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
    } catch (err) {
      console.error('Falha ao copiar email:', err)
    }
  }

  return (
    <Button variant="ghost" size="icon" onClick={copyEmail} className="hover:bg-slate-600">
      <Copy className="h-4 w-4 text-white" />
    </Button>
  )
}
