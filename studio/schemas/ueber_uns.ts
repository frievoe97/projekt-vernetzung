export default {
  name: 'ueber_uns',
  title: 'Über Uns (AKTUELL NICHT IN VERWENDUNG!)',
  //   title: 'Über Uns',
  type: 'document',
  fields: [
    {
      name: 'missionTitel',
      title: 'Mission Titel',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'paragraphs1',
          title: 'Paragraphs 1',
          type: 'array',
          of: [{type: 'string'}],
        },
        {
          name: 'list',
          title: 'List',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'text',
                  title: 'Text',
                  type: 'string',
                },
                {
                  name: 'elements',
                  title: 'Elements',
                  type: 'array',
                  of: [{type: 'string'}],
                },
              ],
            },
          ],
        },
        {
          name: 'paragraphs2',
          title: 'Paragraphs 2',
          type: 'array',
          of: [{type: 'string'}],
        },
      ],
    },
    {
      name: 'iconTextRows',
      title: 'Icon Text Rows',
      type: 'object',
      fields: [
        {
          name: 'data',
          title: 'Data',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'iconPath',
                  title: 'Icon Path',
                  type: 'string',
                },
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                },
                {
                  name: 'text',
                  title: 'Text',
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'warumJetztWarumWir',
      title: 'Warum Jetzt Warum Wir',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'paragraph',
              title: 'Paragraph',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                    },
                    {
                      name: 'text',
                      title: 'Text',
                      type: 'array',
                      of: [{type: 'string'}],
                    },
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
