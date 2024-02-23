export default {
  name: 'startseite',
  title: 'Startseite (AKTUELL NICHT IN VERWENDUNG!)',
  //   title: 'Startseite',
  type: 'document',
  fields: [
    {
      name: 'pictureHeader',
      title: 'Picture Header',
      type: 'object',
      fields: [
        {
          name: 'image1',
          title: 'Bild',
          type: 'image',
        },
        {
          name: 'text',
          title: 'Text',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'subtitle',
              title: 'Subtitle',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [{type: 'string'}],
            },
          ],
        },
      ],
    },
    {
      name: 'textWithImage',
      title: 'Text with Image',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'Bild_zwei',
          title: 'image2',
          type: 'image',
        },
        {
          name: 'text',
          title: 'Text',
          type: 'array',
          of: [{type: 'string'}],
        },
        {
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
        },
        {
          name: 'buttonLink',
          title: 'Button Link',
          type: 'string',
        },
      ],
    },
    {
      name: 'wissensvermittlung',
      title: 'Wissensvermittlung',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'paragraphs',
          title: 'Paragraphs',
          type: 'array',
          of: [{type: 'string'}],
        },
      ],
    },
    {
      name: 'motivationAusEigenerErfahrung',
      title: 'Motivation aus eigener Betroffenenerfahrung',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'Bild_drei',
          title: 'image3',
          type: 'image',
        },
        {
          name: 'paragraphs',
          title: 'Paragraphs',
          type: 'array',
          of: [{type: 'string'}],
        },
      ],
    },
  ],
}
