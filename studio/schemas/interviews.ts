import {DocumentTextIcon} from '@sanity/icons'

export default {
  name: 'interview',
  title: 'Interviews',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string',
      description: 'Titel des Interviews (wird nirgendwo auf der Website angezeigt)',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'headline',
      title: 'Überschrift',
      description:
        'Überschrift des Interviews (wird auf der Übersichtsseite und im Header des Interviews angezeigt)',
      type: 'text',
      rows: 2,
      validation: (Rule: {
        required: () => {(): any; new (): any; max: {(arg0: number): any; new (): any}}
      }) => Rule.required().max(200),
    },
    // https://projekt-vernetzung.org/#/interviews-und-beitraege/bei-partnerschaftlicher-gewalt-geht-es-nicht-um-strafe-oder-die-gewalt-an-sich-es-geht-immer-einzig-und-alleine-um-macht
    // bei-partnerschaftlicher-gewalt-geht-es-nicht-um-strafe-oder-die-gewalt-an-sich,-es-geht-immer-einzig-und-alleine-um-macht.
    {
      title: 'URL des Interviews (beta)',
      description: 'Gibt die URL des Interviews an, welche auf der Website angezeigt wird.',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'headline',
        // maxLength: 200, // will be ignored if slugify is set
        slugify: (input: string) =>
          'https://projekt-vernetzung.org/#/interviews-und-beitraege/' +
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      title: 'Veröffentlichungsdatum',
      description: 'Gibt an, wann das Interview veröffentlicht wird',
      name: 'launchDate',
      type: 'datetime',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'textTeaser',
      title: 'Teaser',
      description:
        'Kurze Beschreibung des Interviews, welche auf der Übersichtsseite und im Header des Interviews angezeigt wird',
      type: 'text',
      validation: (Rule: {
        required: () => {(): any; new (): any; max: {(arg0: number): any; new (): any}}
      }) => Rule.required().max(500),
    },
    {
      name: 'image',
      title: 'Bild',
      description:
        'Bild des Interviews, welches auf der Übersichtsseite und im Header des Interviews angezeigt wird',
      type: 'image',
      options: {
        metadata: ['exif', 'location', 'lqip', 'palette'],
        accept: '',
      },
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'backgroundColor',
      title: 'Hintergrundfarbe',
      description: 'Hintergrundfarbe des Interviews',
      type: 'color',
      options: {
        disableAlpha: true,
        colorList: ['#D7E0FF', '#FB819B', '#BEA5A9', '#EFE9EA'],
      },
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'quotationMarkColor',
      title: 'Farbe des Anführungszeichens',
      description: 'Farbe des Anführungszeichens im Header des Interviews',
      type: 'color',
      options: {
        disableAlpha: true,
        colorList: ['#D7E0FF', '#FB819B', '#BEA5A9', '#EFE9EA'],
      },
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      type: 'markdown',
      description: 'Interview im Markdown-Format',
      name: 'Interview',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
  ],
}
