import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Logo } from '@/components/Logo/Logo'
import { CopyContainer } from './CopyContainer'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/utilities/ui'
import { CardPattern } from './CardPattern'

const SocialLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-foreground/70 text-sm hover:text-foreground transition-colors flex items-center group"
    >
      {label}{' '}
      <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-90 transition-opacity" />
    </a>
  )
}

export const ContactCard = async () => {
  const payload = await getPayload({ config: configPromise })

  const profile = await payload.findGlobal({
    slug: 'profile',
  })

  const { firstName, lastName, email, socialMedia, jobTitle } = profile

  return (
    <div className="flex flex-col gap-4 w-full items-center justify-center">
      <span className="text-xs tracking-widest text-neutral/70 align-middle uppercase">
        contact
      </span>
      <h2 className="text-4xl font-semibold">Get in Touch</h2>

      <div className="relative w-full py-12 bg-surface rounded-2xl flex flex-col items-center gap-4 border border-border">
        <CardPattern />
        <Logo className="w-20 h-20 text-neutral" />

        <div className="flex flex-col gap-1 items-center z-20">
          <h3 className="text-4xl font-semibold text-neutral">
            {firstName} {lastName}
          </h3>
          <span className="text-sm text-neutral/70 uppercase">{jobTitle}</span>
        </div>

        <div className="flex items-center gap-2 z-20">
          <CopyContainer text={email} />
        </div>

        <div className="flex gap-4 z-20">
          {socialMedia?.linkedin && <SocialLink href={socialMedia.linkedin} label="Linkedin" />}

          {socialMedia?.github && <SocialLink href={socialMedia.github} label="GitHub" />}

          <SocialLink href="https://link.mpires.dev/resume" label="My Resume" />
        </div>
      </div>
    </div>
  )
}
