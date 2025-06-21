// schemaTypes/trustIndicator.js
export default {
  name: 'trustIndicator',
  title: 'Trust Indicator',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
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
      title: 'Description',
      type: 'object',
      fields: [
        {
          name: 'english',
          title: 'English Description',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'hindi',
          title: 'Hindi Description',
          type: 'string',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          { title: 'Shield (Licensed)', value: 'Shield' },
          { title: 'Award (Warranty)', value: 'Award' },
          { title: 'Clock (24/7 Support)', value: 'Clock' },
          { title: 'Check (Quality)', value: 'Check' },
          { title: 'Star (Rating)', value: 'Star' },
          { title: 'Users (Customers)', value: 'Users' },
          { title: 'Zap (Energy)', value: 'Zap' },
          { title: 'Leaf (Eco-friendly)', value: 'Leaf' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'number',
      title: 'Number/Value',
      type: 'string',
      description: 'E.g., "25", "100%", "24/7", etc.'
    },
    {
      name: 'gradient',
      title: 'Color Gradient',
      type: 'string',
      options: {
        list: [
          { title: 'Blue to Cyan', value: 'from-blue-500 to-cyan-500' },
          { title: 'Green to Emerald', value: 'from-green-500 to-emerald-500' },
          { title: 'Purple to Violet', value: 'from-purple-500 to-violet-500' },
          { title: 'Orange to Red', value: 'from-orange-500 to-red-500' },
          { title: 'Teal to Cyan', value: 'from-teal-500 to-cyan-500' },
          { title: 'Indigo to Blue', value: 'from-indigo-500 to-blue-500' }
        ]
      },
      initialValue: 'from-blue-500 to-cyan-500'
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
      description: 'Show this trust indicator on the website',
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: 'title.english',
      description: 'description.english',
      icon: 'icon',
      number: 'number'
    },
    prepare({ title, description, icon, number }) {
      return {
        title: title,
        subtitle: `${icon}${number ? ` | ${number}` : ''} | ${description?.slice(0, 50)}...`
      }
    }
  },
  orderings: [
    {
      title: 'Sort Order',
      name: 'sortOrderAsc',
      by: [{ field: 'sortOrder', direction: 'asc' }]
    }
  ]
}