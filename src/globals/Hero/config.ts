import { GlobalConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { authenticated } from '../../access/authenticated'
import { anyone } from '../../access/anyone'

export const Hero: GlobalConfig = {
  slug: 'hero',
  access: {
    read: anyone,
    update: authenticated,
  },
  admin: {
    group: 'Configurações',
  },
  fields: [
    {
      name: 'leftColumn',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Título Principal',
        },
        {
          name: 'subtitle',
          type: 'richText',
          editor: lexicalEditor(),
          required: true,
          label: 'Subtítulo',
        },
        {
          name: 'buttons',
          type: 'group',
          fields: [
            {
              name: 'primaryButton',
              type: 'group',
              fields: [
                {
                  name: 'enabled',
                  type: 'checkbox',
                  label: 'Habilitar Botão Primário',
                  defaultValue: false,
                },
                {
                  name: 'label',
                  type: 'text',
                  label: 'Texto do Botão',
                  admin: {
                    condition: (_, { enabled }) => Boolean(enabled),
                  },
                },
                {
                  name: 'link',
                  type: 'text',
                  label: 'Link do Botão',
                  admin: {
                    condition: (_, { enabled }) => Boolean(enabled),
                  },
                },
              ],
            },
            {
              name: 'secondaryButton',
              type: 'group',
              fields: [
                {
                  name: 'enabled',
                  type: 'checkbox',
                  label: 'Habilitar Botão Secundário',
                  defaultValue: false,
                },
                {
                  name: 'label',
                  type: 'text',
                  label: 'Texto do Botão',
                  admin: {
                    condition: (_, { enabled }) => Boolean(enabled),
                  },
                },
                {
                  name: 'link',
                  type: 'text',
                  label: 'Link do Botão',
                  admin: {
                    condition: (_, { enabled }) => Boolean(enabled),
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'rightColumn',
      type: 'group',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Imagem do Hero',
        },
      ],
    },
  ],
}
