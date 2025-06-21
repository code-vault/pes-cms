// schemas/contactFormStep.js
export default {
  name: 'contactFormStep',
  title: 'Contact Form Step',
  type: 'document',
  fields: [
    {
      name: 'stepNumber',
      title: 'Step Number',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(5)
    },
    {
      name: 'title',
      title: 'Step Title',
      type: 'object',
      fields: [
        {
          name: 'english',
          title: 'English Title',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'hindi',
          title: 'Hindi Title',
          type: 'string',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'description',
      title: 'Step Description',
      type: 'object',
      fields: [
        {
          name: 'english',
          title: 'English Description',
          type: 'text'
        },
        {
          name: 'hindi',
          title: 'Hindi Description',
          type: 'text'
        }
      ]
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          { title: 'User (Personal Info)', value: 'User' },
          { title: 'Home (Property Details)', value: 'Home' },
          { title: 'Credit Card (Energy Usage)', value: 'CreditCard' },
          { title: 'Phone (Contact)', value: 'Phone' },
          { title: 'Check (Confirmation)', value: 'Check' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'fields',
      title: 'Form Fields',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'fieldName',
              title: 'Field Name',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'fieldType',
              title: 'Field Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Text', value: 'text' },
                  { title: 'Email', value: 'email' },
                  { title: 'Phone', value: 'tel' },
                  { title: 'Textarea', value: 'textarea' },
                  { title: 'Number', value: 'number' }
                ]
              }
            },
            {
              name: 'label',
              title: 'Field Label',
              type: 'object',
              fields: [
                {
                  name: 'english',
                  title: 'English Label',
                  type: 'string'
                },
                {
                  name: 'hindi',
                  title: 'Hindi Label',
                  type: 'string'
                }
              ]
            },
            {
              name: 'placeholder',
              title: 'Placeholder Text',
              type: 'object',
              fields: [
                {
                  name: 'english',
                  title: 'English Placeholder',
                  type: 'string'
                },
                {
                  name: 'hindi',
                  title: 'Hindi Placeholder',
                  type: 'string'
                }
              ]
            },
            {
              name: 'required',
              title: 'Required Field',
              type: 'boolean',
              initialValue: false
            }
          ]
        }
      ]
    },
    {
      name: 'active',
      title: 'Active Step',
      type: 'boolean',
      description: 'Is this step currently active in the form?',
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: 'title.english',
      stepNumber: 'stepNumber',
      icon: 'icon'
    },
    prepare({ title, stepNumber, icon }) {
      return {
        title: `Step ${stepNumber}: ${title}`,
        subtitle: `Icon: ${icon}`
      }
    }
  },
  orderings: [
    {
      title: 'Step Number',
      name: 'stepNumberAsc',
      by: [{ field: 'stepNumber', direction: 'asc' }]
    }
  ]
}