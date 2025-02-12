import type { CollectionConfig } from 'payload'

import { authenticated } from '../access/authenticated'
import { authenticatedOrPublished } from '../access/authenticatedOrPublished'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const WorkingExperience: CollectionConfig = {
  slug: 'working-experience',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'companyName',
    defaultColumns: ['companyName', 'position', 'startDate', 'endDate'],
  },
  fields: [
    {
      name: 'companyName',
      type: 'text',
      required: true,
    },
    {
      name: 'summary',
      type: 'textarea',
    },
    {
      name: 'position',
      type: 'text',
    },
    {
      name: 'orderToShow',
      type: 'number',
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor(),
    },
    {
      name: 'startDate',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'endDate',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        description: 'Deixe em branco se for o emprego atual',
      },
    },
    {
      name: 'isCurrentJob',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Marque se este for seu emprego atual',
      },
    },
    {
      name: 'companyLogo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'technologies',
      type: 'array',
      label: 'Tecnologias utilizadas',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'companyWebsite',
      type: 'text',
      admin: {
        description: 'URL do site da empresa',
      },
    },
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
  timestamps: true,
  versions: {
    drafts: true,
  },
}
