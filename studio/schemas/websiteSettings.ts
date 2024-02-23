import {CogIcon} from '@sanity/icons'

export default {
  name: 'websiteSettings',
  // title: 'Webseiten-Einstellungen',
  title: 'Webseiten-Einstellungen (AKTUELL NICHT IN VERWENDUNG!)',
  type: 'document',
  icon: CogIcon,
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string',
      readOnly: true,
      hidden: true,
    },
    {
      name: 'isOnline',
      title: 'Webseite ist aktuell online',
      description:
        'Aktiviere diese Option, wenn die Webseite online ist. Wird aktuell nicht verwendet.',
      type: 'boolean',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      name: 'maintenanceMessage',
      title: 'Wartungsnachricht',
      description:
        'Eine Nachricht, die angezeigt wird, wenn die Webseite offline ist. Wird aktuell nicht verwendet.',
      type: 'text',
      rows: 3,
    },
    // Weitere Optionen können hier hinzugefügt werden
  ],
  __experimental_actions: ['update', 'publish', 'create'],
  initialValue: {
    title: 'Webseiten-Einstellungen', // Standardmäßiger Wert für den Titel
    isOnline: true, // Standardmäßig ist die Webseite offline
    maintenanceMessage: '', // Standardmäßig keine Wartungsnachricht
  },
}
