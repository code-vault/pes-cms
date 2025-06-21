// schemaTypes/contactInfo.js
export default {
  name: 'contactInfo',
  title: 'Contact Information',
  type: 'document',
  fields: [
    {
      name: 'type',
      title: 'Contact Type',
      type: 'string',
      options: {
        list: [
          { title: 'Phone Number', value: 'phone' },
          { title: 'Email Address', value: 'email' },
          { title: 'Physical Address', value: 'address' },
          { title: 'Business Hours', value: 'hours' },
          { title: 'Social Media', value: 'social' },
          { title: 'Emergency Contact', value: 'emergency' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'label',
      title: 'Label',
      type: 'object',
      fields: [
        {
          name: 'english',
          title: 'English Label',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'hindi',
          title: 'Hindi Label',
          type: 'string',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'value',
      title: 'Contact Value',
      type: 'text',
      description: 'The actual contact information (phone, email, address, etc.)',
      validation: Rule => Rule.required()
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          { title: 'Phone', value: 'Phone' },
          { title: 'Mail', value: 'Mail' },
          { title: 'Map Pin', value: 'MapPin' },
          { title: 'Clock', value: 'Clock' },
          { title: 'Globe', value: 'Globe' },
          { title: 'Alert Circle', value: 'AlertCircle' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'link',
      title: 'Link/URL',
      type: 'url',
      description: 'Optional link (tel:, mailto:, maps link, etc.)'
    },
    {
      name: 'description',
      title: 'Description',
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
      name: 'primary',
      title: 'Primary Contact',
      type: 'boolean',
      description: 'Mark as primary contact method',
      initialValue: false
    },
    {
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Lower numbers appear first'
    },
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Show this contact info on the website',
      initialValue: true
    }
  ],
  preview: {
    select: {
      label: 'label.english',
      value: 'value',
      type: 'type',
      primary: 'primary'
    },
    prepare({ label, value, type, primary }) {
      return {
        title: label,
        subtitle: `${type.toUpperCase()}${primary ? ' (Primary)' : ''} | ${value}`
      }
    }
  },
  orderings: [
    {
      title: 'Sort Order',
      name: 'sortOrderAsc',
      by: [{ field: 'sortOrder', direction: 'asc' }]
    },
    {
      title: 'Primary First',
      name: 'primaryFirst',
      by: [
        { field: 'primary', direction: 'desc' },
        { field: 'sortOrder', direction: 'asc' }
      ]
    }
  ]
}