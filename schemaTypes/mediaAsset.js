export default {
  name: 'mediaAsset',
  title: 'Media Assets',
  type: 'document',
  fields: [
    {
      name: 'key',
      title: 'Media Key',
      type: 'string',
      description: 'e.g., gallery.project1, hero.backgroundVideo',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'type',
      title: 'Media Type',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'file',
      title: 'Media File',
      type: 'file',
      validation: Rule => Rule.required()
    },
    {
      name: 'altText',
      title: 'Alt Text (for images)',
      type: 'string',
      description: 'Important for SEO and accessibility'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Gallery', value: 'gallery' },
          { title: 'Hero', value: 'hero' },
          { title: 'Testimonials', value: 'testimonials' },
          { title: 'About', value: 'about' },
          { title: 'Services', value: 'services' }
        ]
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'key',
      media: 'file'
    }
  }
}