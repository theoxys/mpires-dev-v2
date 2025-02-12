import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Card } from '@/components/Card'

export const BlogPosts = async () => {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 4,
    sort: '-publishedAt',
    where: {
      _status: {
        equals: 'published',
      },
    },
    select: {
      title: true,
      slug: true,
      heroImage: true,
      meta: {
        image: true,
        description: true,
      },
    },
  })

  return (
    <div className="flex flex-col gap-4 w-full items-center justify-center">
      <span className="text-xs tracking-widest text-stone-500 align-middle uppercase">blog</span>
      <h2 className="text-4xl font-semibold">Latest Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
        {posts.docs.map((post, index) => (
          <Card key={index} doc={post} relationTo="posts" className="h-full" />
        ))}
      </div>
    </div>
  )
}
