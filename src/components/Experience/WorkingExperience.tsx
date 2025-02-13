import { Laptop } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'
import { Media, WorkingExperience as WorkingExperienceType } from '@/payload-types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

// Função para formatar a data de trabalho
function formatWorkingDate(
  startDate: string | null,
  endDate: string | null,
  isCurrentJob: boolean,
): string {
  const start = startDate
    ? new Date(startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
    : ''
  const end = isCurrentJob
    ? 'Present'
    : endDate
      ? new Date(endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
      : ''

  return `${start} - ${end}`
}

// Função para buscar as experiências
async function getWorkingExperiences(): Promise<WorkingExperienceType[]> {
  const payload = await getPayload({ config: configPromise })

  const experiences = await payload.find({
    collection: 'working-experience',
    sort: '-startDate', // Ordena do mais recente para o mais antigo
    depth: 1,
  })

  return experiences.docs
}

const TimelineItem: FC<{
  companyName: string
  summary: string | null
  startDate: string | null
  endDate: string | null
  isCurrentJob: boolean | null
  companyLogo: Media
}> = ({ companyName, summary, startDate, endDate, isCurrentJob, companyLogo }) => {
  return (
    <div className="flex gap-2 max-w-lg h-full">
      <aside className="flex flex-col items-center gap-2">
        <div className="flex max-h-8 max-w-8 w-8 h-full rounded-full border border-stone-700 bg-stone-500/10 items-center justify-center shadow-lg shadow-stone-500/20">
          <Laptop size={14} className="text-white" />
        </div>
        <div className="w-[1px] h-full bg-linear-to-t from-stone-900/40 to-stone-800"></div>
      </aside>
      <section className="flex flex-col gap-2 pb-8">
        <div className="h-8">
          <span className="uppercase text-xs tracking-widest text-stone-500 align-middle">
            {formatWorkingDate(startDate, endDate, isCurrentJob || false)}
          </span>
        </div>
        <div className="flex gap-4 border border-stone-800 rounded-2xl p-4 bg-stone-700/10">
          <div className="relative h-[36px] w-[36px] mt-1 min-w-[36px]">
            {companyLogo && typeof companyLogo !== 'string' && (
              <Image
                src={companyLogo.fileUrl ?? ''}
                alt={`${companyName} Logo`}
                width={36}
                height={36}
                className="rounded-lg"
              />
            )}
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-md font-semibold">{companyName}</h1>
            <p className="text-sm font-light text-stone-300">{summary}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export const WorkingExperience: FC = async () => {
  const experiences = await getWorkingExperiences()

  return (
    <div className="flex flex-col md:flex-row gap-1 w-full justify-between">
      <div className="flex flex-col gap-4">
        <span className="text-xs tracking-widest text-stone-500 align-middle uppercase">
          Timeline
        </span>
        <h1 className="text-4xl font-semibold">Working Experience</h1>
        <p className="text-lg font-light text-stone-300">
          Here are some of the companies I have worked for.
        </p>
      </div>
      <div className="flex flex-col gap-1 max-w-[466px]">
        {experiences.map((experience) => (
          <TimelineItem
            key={experience.id}
            companyName={experience.companyName ?? ''}
            summary={experience.summary ?? null}
            startDate={experience.startDate ?? null}
            endDate={experience.endDate ?? null}
            isCurrentJob={experience.isCurrentJob ?? false}
            companyLogo={experience.companyLogo as Media}
          />
        ))}
      </div>
    </div>
  )
}
