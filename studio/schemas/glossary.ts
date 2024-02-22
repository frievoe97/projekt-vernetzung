import {BookIcon} from '@sanity/icons'

export default {
  name: 'glossary',
  title: 'Glossar',
  type: 'document',
  icon: BookIcon,
  fields: [
    {
      name: 'term',
      title: 'Begriff',
      description: 'Der Begriff, der im Glossar angezeigt wird',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'websiteText',
      title: 'Website-Text',
      description: 'Der Text, der auf der Website angezeigt wird',
      type: 'text',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'websiteLink',
      title: 'Website-Verlinkung',
      description: 'Der Link der geöffnet wird, wenn auf "Weiterlesen" geklickt wird',
      type: 'url',
    },
    {
      name: 'sources',
      title: 'Quellen',
      description: 'Der Kurzbeleg der Quelle, welche unten rechts unter dem Text angezeigt wird',
      type: 'text',
      rows: 2,
    },
    {
      name: 'additionalLinkText',
      description: 'Aktuell nicht in benutzung. Wird nicht auf der Website angezeigt.',
      title: 'Zusatz-Link-Text',
      type: 'string',
    },
    {
      name: 'additionalLinkURL',
      title: 'Zusatz-Link-URL',
      description: 'Aktuell nicht in benutzung. Wird nicht auf der Website angezeigt.',
      type: 'url',
    },
    {
      title: 'Kategrorie',
      name: 'category',
      description:
        'Kategorie des Begriffs, um ihn auf der Website zu filtern. Kann mehrere Kategorien haben.',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Allgemeine Begrifflichkeiten', value: 'general'},
          {title: 'Psychische Gewalt', value: 'psychologicalViolence'},
          {title: 'Körperliche Gewalt', value: 'physicalViolence'},
          {title: 'Gewalt in der Arbeitswelt', value: 'workplaceViolence'},
          {title: 'Häusliche Gewalt', value: 'domesticViolence'},
          {title: 'Digitale Gewalt', value: 'digitalViolence'},
        ],
      },
    },
  ],
}
