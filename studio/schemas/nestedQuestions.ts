export default {
  name: 'nestedQuestions',
  title: 'Nested Questions',
  type: 'document',
  fields: [
    {
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'string',
              validation: (Rule: {required: () => any}) => Rule.required(),
              description: 'Text of the question',
              initialValue: 'Frage',
            },
            {
              name: 'subQuestions',
              title: 'Sub Questions',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'text',
                      title: 'Text',
                      type: 'string',
                      validation: (Rule: {required: () => any}) => Rule.required(),
                      description: 'Text of the question',
                      initialValue: 'Frage',
                    },
                    {
                      name: 'subSubQuestions',
                      title: 'Sub Sub Questions',
                      type: 'array',
                      of: [
                        {
                          type: 'object',
                          fields: [
                            {
                              name: 'text',
                              title: 'Text',
                              type: 'string',
                              validation: (Rule: {required: () => any}) => Rule.required(),
                              description: 'Text of the question',
                              initialValue: 'Frage',
                            },
                            {
                              name: 'subSubSubQuestions',
                              title: 'Sub Sub Sub Questions',
                              type: 'array',
                              of: [
                                {
                                  type: 'object',
                                  fields: [
                                    {
                                      name: 'text',
                                      title: 'Text',
                                      type: 'string',
                                      validation: (Rule: {required: () => any}) => Rule.required(),
                                      description: 'Text of the question',
                                      initialValue: 'Frage',
                                    },
                                    {
                                      name: 'subSubSubSubQuestions',
                                      title: 'Sub Sub Sub Sub Questions',
                                      type: 'array',
                                      of: [
                                        {
                                          type: 'object',
                                          fields: [
                                            {
                                              name: 'text',
                                              title: 'Text',
                                              type: 'string',
                                              validation: (Rule: {required: () => any}) =>
                                                Rule.required(),
                                              description: 'Text of the question',
                                              initialValue: 'Frage',
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
    },
  ],
}
