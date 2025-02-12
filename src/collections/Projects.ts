import type { CollectionConfig } from 'payload'

import { authenticated } from '../access/authenticated'
import { authenticatedOrPublished } from '../access/authenticatedOrPublished'
import { slugField } from '@/fields/slug'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor(),
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'technologies',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
    {
      name: 'githubUrl',
      type: 'text',
      admin: {
        description: 'URL do repositório no GitHub',
      },
    },
    {
      name: 'liveUrl',
      type: 'text',
      admin: {
        description: 'URL do projeto em produção',
      },
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Marque para destacar este projeto na página inicial',
      },
    },
    {
      name: 'featuredData',
      type: 'group',
      admin: {
        condition: (_, { isFeatured }) => Boolean(isFeatured),
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'gradientStart',
          type: 'text',

          defaultValue: '#000000',
        },
        {
          name: 'gradientEnd',
          type: 'text',

          defaultValue: '#000000',
        },
      ],
    },
    ...slugField(),
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        return {
          ...data,
          updatedAt: new Date(),
        }
      },
    ],
  },
  versions: {
    drafts: true,
  },
}
