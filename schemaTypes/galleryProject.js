// schemas/galleryProject.js
export default {
  name: 'galleryProject',
  title: 'Gallery Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
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
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Residential', value: 'residential' },
          { title: 'Commercial', value: 'commercial' },
          { title: 'Industrial', value: 'industrial' },
          { title: 'Technology', value: 'technology' },
          { title: 'Process', value: 'process' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'mediaType',
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
      name: 'image',
      title: 'Project Image',
      type: 'image',
      hidden: ({ document }) => document?.mediaType !== 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'video',
      title: 'Video File',
      type: 'file',
      hidden: ({ document }) => document?.mediaType !== 'video',
      options: {
        accept: 'video/*'
      }
    },
    {
      name: 'thumbnail',
      title: 'Video Thumbnail',
      type: 'image',
      hidden: ({ document }) => document?.mediaType !== 'video',
      options: {
        hotspot: true
      }
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
      name: 'specifications',
      title: 'Project Specifications',
      type: 'object',
      fields: [
        {
          name: 'systemSize',
          title: 'System Size',
          type: 'string',
          description: 'e.g., 5kW, 50kW'
        },
        {
          name: 'panelCount',
          title: 'Number of Panels',
          type: 'number'
        },
        {
          name: 'location',
          title: 'Location',
          type: 'string'
        },
        {
          name: 'completionDate',
          title: 'Completion Date',
          type: 'date'
        }
      ]
    },
    {
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      description: 'Show this project prominently in gallery',
      initialValue: false
    },
    {
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Lower numbers appear first'
    }
  ],
  preview: {
    select: {
      title: 'title.english',
      category: 'category',
      media: 'image',
      mediaType: 'mediaType'
    },
    prepare({ title, category, media, mediaType }) {
      return {
        title: title,
        subtitle: `${category} | ${mediaType}`,
        media: media
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
      title: 'Category',
      name: 'categoryAsc',
      by: [
        { field: 'category', direction: 'asc' },
        { field: 'sortOrder', direction: 'asc' }
      ]
    }
  ]
}