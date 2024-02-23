import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {markdownSchema} from 'sanity-plugin-markdown'
import {colorInput} from '@sanity/color-input'

import {deskTool} from 'sanity/desk'

import './custom.css'

export default defineConfig({
  name: 'default',
  title: 'projekt-vernetzung-sanity',

  projectId: 'bd249yuo',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), markdownSchema(), colorInput()],

  schema: {
    types: schemaTypes,
  },
})
