import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Logo } from '@/components/Logo/Logo'
import { CopyButton } from './CopyButton'

export const ContactCard = async () => {
  const payload = await getPayload({ config: configPromise })

  const profile = await payload.findGlobal({
    slug: 'profile',
  })

  const { firstName, lastName, email, socialMedia, jobTitle } = profile

  return (
    <div className="flex flex-col gap-4 w-full items-center justify-center">
      <span className="text-xs tracking-widest text-stone-500 align-middle uppercase">contact</span>
      <h2 className="text-4xl font-semibold">Get in Touch</h2>

      <div className="w-full py-12 bg-stone-900 rounded-2xl flex flex-col items-center gap-4 border border-border">
        <Logo className="w-20 h-20" />

        <div className="flex flex-col gap-1 items-center">
          <h3 className="text-4xl font-semibold text-white">
            {firstName} {lastName}
          </h3>
          <span className="text-sm text-stone-400 uppercase">{jobTitle}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-white">{email}</span>
          <CopyButton email={email} />
        </div>

        <div className="flex gap-4">
          {socialMedia?.linkedin && (
            <a
              href={socialMedia.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-stone-300 transition-colors"
            >
              LinkedIn
            </a>
          )}

          {socialMedia?.github && (
            <a
              href={socialMedia.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-stone-300 transition-colors"
            >
              GitHub
            </a>
          )}

          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-stone-300 transition-colors"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  )
}
