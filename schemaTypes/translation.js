// schemas/translation.js
export default {
  name: 'translation',
  title: 'Translation',
  type: 'document',
  fields: [
    {
      name: 'key',
      title: 'Translation Key',
      type: 'string',
      validation: Rule => Rule.required(),
      description: 'Unique key for this translation (e.g., hero.title, services.residential.title)'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Header', value: 'header' },
          { title: 'Hero Section', value: 'hero' },
          { title: 'Services', value: 'services' },
          { title: 'About', value: 'about' },
          { title: 'Gallery', value: 'gallery' },
          { title: 'Testimonials', value: 'testimonials' },
          { title: 'Contact', value: 'contact' },
          { title: 'Footer', value: 'footer' },
          { title: 'FAQ', value: 'faq' },
          { title: 'Common', value: 'common' },
          { title: 'AI Chatbot', value: 'aiChatbot' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'english',
      title: 'English Text',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'hindi',
      title: 'Hindi Text (हिंदी)',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Optional description of what this translation is used for'
    },
    {
      name: 'variables',
      title: 'Variables',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of variables used in this translation (e.g., {name}, {count})'
    },
    {
      name: 'context',
      title: 'Context',
      type: 'string',
      options: {
        list: [
          { title: 'Button Text', value: 'button' },
          { title: 'Heading', value: 'heading' },
          { title: 'Body Text', value: 'body' },
          { title: 'Navigation', value: 'navigation' },
          { title: 'Form Label', value: 'form' },
          { title: 'Error Message', value: 'error' },
          { title: 'Success Message', value: 'success' }
        ]
      }
    }
  ],
  preview: {
    select: {
      title: 'key',
      subtitle: 'english',
      category: 'category'
    },
    prepare({ title, subtitle, category }) {
      return {
        title: title,
        subtitle: `${category} | ${subtitle?.slice(0, 50)}${subtitle?.length > 50 ? '...' : ''}`
      }
    }
  },
  orderings: [
    {
      title: 'By Category',
      name: 'categoryAsc',
      by: [
        { field: 'category', direction: 'asc' },
        { field: 'key', direction: 'asc' }
      ]
    },
    {
      title: 'By Key',
      name: 'keyAsc',
      by: [{ field: 'key', direction: 'asc' }]
    }
  ]
}