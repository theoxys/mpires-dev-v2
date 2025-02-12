import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { authenticated } from '../../access/authenticated'
import { anyone } from '../../access/anyone'
import { GlobalConfig } from 'payload'

export const Profile: GlobalConfig = {
  slug: 'profile',
  access: {
    read: anyone,
    update: authenticated,
  },
  admin: {
    group: 'Configurações',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Informações Pessoais',
          fields: [
            {
              name: 'firstName',
              type: 'text',
              required: true,
              label: 'Nome',
            },
            {
              name: 'lastName',
              type: 'text',
              required: true,
              label: 'Sobrenome',
            },
            {
              name: 'profileImage',
              type: 'upload',
              relationTo: 'media',
              required: true,
              label: 'Foto de Perfil',
            },
            {
              name: 'jobTitle',
              type: 'text',
              required: true,
              label: 'Cargo',
            },
            {
              name: 'summary',
              type: 'richText',
              editor: lexicalEditor(),
              required: true,
              label: 'Resumo Profissional',
            },
            {
              name: 'location',
              type: 'group',
              fields: [
                {
                  name: 'city',
                  type: 'text',
                  required: true,
                  label: 'Cidade',
                },
                {
                  name: 'state',
                  type: 'text',
                  required: true,
                  label: 'Estado',
                },
                {
                  name: 'country',
                  type: 'text',
                  required: true,
                  label: 'País',
                },
              ],
            },
          ],
        },
        {
          label: 'Contato & Social',
          fields: [
            {
              name: 'email',
              type: 'email',
              required: true,
            },
            {
              name: 'phone',
              type: 'text',
            },
            {
              name: 'socialMedia',
              type: 'group',
              fields: [
                {
                  name: 'github',
                  type: 'text',
                  label: 'GitHub URL',
                },
                {
                  name: 'linkedin',
                  type: 'text',
                  label: 'LinkedIn URL',
                },
                {
                  name: 'twitter',
                  type: 'text',
                  label: 'Twitter URL',
                },
                {
                  name: 'instagram',
                  type: 'text',
                  label: 'Instagram URL',
                },
              ],
            },
          ],
        },
        {
          label: 'Profissional',
          fields: [
            {
              name: 'availableForWork',
              type: 'checkbox',
              label: 'Disponível para Trabalho',
              defaultValue: false,
            },
            {
              name: 'skills',
              type: 'array',
              label: 'Habilidades',
              fields: [
                {
                  name: 'category',
                  type: 'text',
                  required: true,
                  label: 'Categoria',
                },
                {
                  name: 'items',
                  type: 'array',
                  label: 'Itens',
                  fields: [
                    {
                      name: 'name',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'proficiency',
                      type: 'select',
                      options: [
                        { label: 'Iniciante', value: 'beginner' },
                        { label: 'Intermediário', value: 'intermediate' },
                        { label: 'Avançado', value: 'advanced' },
                        { label: 'Especialista', value: 'expert' },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: 'languages',
              type: 'array',
              label: 'Idiomas',
              fields: [
                {
                  name: 'language',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'proficiency',
                  type: 'select',
                  required: true,
                  options: [
                    { label: 'Básico', value: 'basic' },
                    { label: 'Intermediário', value: 'intermediate' },
                    { label: 'Avançado', value: 'advanced' },
                    { label: 'Nativo', value: 'native' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
