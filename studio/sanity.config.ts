import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {markdownSchema} from 'sanity-plugin-markdown'
import {colorInput} from '@sanity/color-input'

import {deskTool} from 'sanity/desk'
import {StructureBuilder} from 'sanity/desk'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

import './custom.css'

export default defineConfig({
  name: 'default',
  title: 'projekt-vernetzung-sanity',

  projectId: 'bd249yuo',
  dataset: 'production',

  plugins: [
    // deskTool({
    //   structure: (S, context) => {
    //     return S.list()
    //       .title('Content')
    //       .items([
    //         // Minimum required configuration
    //         orderableDocumentListDeskItem({type: 'glossary', S, context}),
    //       ])
    //   },
    // }),
    deskTool(),
    visionTool(),
    markdownSchema(),
    colorInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
