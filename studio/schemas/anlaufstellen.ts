import {HomeIcon} from '@sanity/icons'

export default {
  name: 'anlaufstellen',
  title: 'Anlaufstellen',
  type: 'document',
  icon: HomeIcon,
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string',
      description: 'Der Name der Anlaufstelle, wird in der Card der Anlaufstelle angezeigt',
      validation: (Rule: {required: () => any}) => Rule.required(),
    },
    {
      title: 'Kategrorie',
      name: 'category',
      type: 'array',
      description:
        'Oberkategorie der ANlaufstelle, unter der die Anlaufstelle auf der Website gefiltert wird. Kann mehrere Kategorien haben.',
      of: [{type: 'string'}],
      options: {
        sortable: true,
        list: [
          {title: 'Erste Hilfe / Opferhilfe', value: 'erste_hilfe_opferhilfe'},
          {title: 'Gewalt gegen Frauen', value: 'gewalt_gegen_frauen'},
          {title: 'Gewalt im eigenen Zuhause / in der Partnerschaft', value: 'gewalt_im_zuhause'},
          {title: 'Gewalt am Arbeitsplatz', value: 'gewalt_am_arbeitsplatz'},
          {title: 'Digitale Gewalt', value: 'digitale_gewalt'},
          {
            title: 'Gewalt an Kindern und Jugendlichen',
            value: 'gewalt_an_kindern_und_jugendlichen',
          },
          {title: 'Branchenspezifische Anlaufstellen', value: 'branchenspezifische_anlaufstellen'},
          {title: 'Diskriminierung (Geschlecht, LGBTQI+, Rassismus)', value: 'diskriminierung'},
          {title: 'Gewalt gegen Männer', value: 'gewalt_gegen_maenner'},
          {
            title: 'Beratungsstellen für (potenzielle) Täter',
            value: 'beratungsstellen_fuer_taeter',
          },
        ],
      },
    },
    {
      name: 'link',
      title: 'Link',
      description: 'Link zur Website der Anlaufstelle',
      type: 'url',
      //   validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
      validation: (Rule: {required: () => any}) => Rule.required().uri({scheme: ['http', 'https']}),
    },
    {
      name: 'logo',
      title: 'Logo',
      description:
        'Logo der Anlaufstelle, wird in der Card der Anlaufstelle angezeigt. Muss als URL angegeben werden.',
      type: 'url',
      validation: (Rule: {required: () => any}) => Rule.required().uri({scheme: ['http', 'https']}),
      //   validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      description:
        'Tags, die die Anlaufstelle beschreiben. Werden auf der Website aktuell nicht angezeigt. Kann mehrere Tags haben.',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Opferhilfe', value: 'opferhilfe'},
          {title: 'Erste Hilfe', value: 'erste_hilfe'},
          {title: 'Körperliche Gewalt', value: 'koerperliche_gewalt'},
          {title: 'Psychische Gewalt', value: 'psychische_gewalt'},
          {title: 'Gewalt gegen Frauen', value: 'gewalt_gegen_frauen'},
          {title: 'Häusliche Gewalt', value: 'haeusliche_gewalt'},
          {title: 'Gewalt am Arbeitsplatz', value: 'gewalt_am_arbeitsplatz'},
          {title: 'Mobbing', value: 'mobbing'},
          {title: 'Sexuelle Belästigung', value: 'sexuelle_belaestigung'},
          {title: 'Digitale Gewalt', value: 'digitale_gewalt'},
          {title: 'Sexueller Missbrauch', value: 'sexueller_missbrauch'},
          {title: 'Narzissmus', value: 'narzissmus'},
          {title: 'Gewalt gegen LGBTQI', value: 'gewalt_gegen_lgbtqi'},
          {title: 'Rassismus', value: 'rassismus'},
          {title: 'Prozessbegleitung', value: 'prozessbegleitung'},
          {title: 'Kindesmissbrauch', value: 'kindesmissbrauch'},
          {title: 'Kind', value: 'kind'},
        ],
      },
    },
  ],
}
