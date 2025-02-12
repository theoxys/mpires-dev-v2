import type { Block } from 'payload'

export const Timeline: Block = {
  slug: 'timeline',
  interfaceName: 'TimelineBlock',
  fields: [
    {
      name: 'professionalExperience',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'companyName',
          type: 'text',
        },
        {
          name: 'workingDate',
          type: 'text',
        },
        {
          name: 'description',
          type: 'text',
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
  labels: {
    singular: 'Timeline',
    plural: 'Timelines',
  },
}
