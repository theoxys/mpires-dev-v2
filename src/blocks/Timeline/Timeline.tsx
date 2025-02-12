import { Laptop } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'
import { Media, TimelineBlock as TimelineBlockType } from '@/payload-types'

export interface TimelineItemProps {
  companyName: string
  workingDate: string
  description: string
  logo: Media
}

const TimelineItem: FC<TimelineItemProps> = ({ companyName, description, workingDate, logo }) => {
  return (
    <div className="flex gap-2 max-w-lg h-full">
      <aside className="flex flex-col items-center gap-2">
        <div className="flex max-h-8 max-w-8 w-8 h-full rounded-full border border-slate-700 bg-emerald-500/10 items-center justify-center shadow-lg shadow-emerald-500/20">
          <Laptop size={14} className="text-emerald-300" />
        </div>
        <div className="w-[1px] h-full bg-gradient-to-t from-slate-900/40 to-slate-800"></div>
      </aside>
      <section className="flex flex-col gap-2 pb-8">
        <div className="h-8">
          <span className="uppercase text-xs tracking-widest text-slate-500 align-middle">
            {workingDate}
          </span>
        </div>
        <div className="flex gap-4 border border-slate-800 rounded-2xl p-4 bg-slate-700/10">
          <div className="h-8 w-8 mt-1 min-w-[32px]">
            {logo && typeof logo !== 'string' && (
              <Image
                src={logo.url ?? ''}
                alt={`${companyName} Logo`}
                width={32}
                height={32}
                className="rounded-lg"
              />
            )}
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-md font-semibold">{companyName}</h1>
            <p className="text-sm font-light text-slate-300">{description}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export const Timeline: FC<TimelineBlockType> = ({ professionalExperience }) => {
  return (
    <div className="flex flex-col gap-1">
      {professionalExperience?.map((company, index) => (
        <TimelineItem
          key={index}
          companyName={company.companyName ?? ''}
          workingDate={company.workingDate ?? ''}
          description={company.description ?? ''}
          logo={company.logo as Media}
        />
      ))}
    </div>
  )
}
