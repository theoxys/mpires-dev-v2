import { Hero } from '@/globals/Hero/Hero'
import { generateMetadata } from './pages/[slug]/page'
import { WorkingExperience } from '@/components/Experience/WorkingExperience'
import { BgLight } from '@/components/BackgroundLight/BgLight'
import { ServicesGrid } from '@/components/ServicesGrid/ServicesGrid'
import { BlogPosts } from '@/components/BlogPosts/BlogPosts'
import { ContactCard } from '@/components/ContactCard/ContactCard'
export { generateMetadata }

export default function Page() {
  return (
    <article className="pt-16 pb-24 overflow-x-hidden relative">
      <div className="my-16 mx-auto max-w-[900px] flex flex-col gap-24">
        <div
          id="bg-light-1"
          className="fixed top-0 left-0 rotate-180 w-[852px] h-[582px] -translate-x-3/4 -scale-x-100 blur-3xl opacity-70 pointer-events-none z-20"
          aria-hidden="true"
        >
          <BgLight className="absolute top-0 left-0 w-full h-full" width="852px" height="582px" />
        </div>
        <div
          id="bg-light-2"
          className="fixed top-0 right-0 -translate-y-1/2 translate-x-1/4 blur-3xl opacity-70 pointer-events-none w-[852px] h-[582px]"
          aria-hidden="true"
        >
          <BgLight className="absolute top-0 left-0 w-full h-full" width="852px" height="582px" />
        </div>

        <Hero />
        <WorkingExperience />
        <ServicesGrid />
        <BlogPosts />
        <ContactCard />
      </div>
    </article>
  )
}
