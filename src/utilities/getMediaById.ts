import type { Media } from '../payload-types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { unstable_cache } from 'next/cache'

async function getMediaById(id: string): Promise<Media | null> {
  const payload = await getPayload({ config: configPromise })

  const media = await payload.findByID({
    collection: 'media',
    id,
  })

  return media || null
}

/**
 * Retorna uma função unstable_cache mapeada com a tag de cache para o ID da mídia
 */
export const getCachedMediaById = (id: string) =>
  unstable_cache(async () => getMediaById(id), ['media', id], {
    tags: [`media_${id}`],
  })
