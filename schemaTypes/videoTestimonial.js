// schemas/videoTestimonial.js
export default {
  name: 'videoTestimonial',
  title: 'Video Testimonial',
  type: 'document',
  fields: [
    {
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Video Title',
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
      title: 'Video Description',
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
      name: 'youtubeId',
      title: 'YouTube Video ID',
      type: 'string',
      description: 'Just the ID from YouTube URL (e.g., dQw4w9WgXcQ)',
      validation: Rule => Rule.required()
    },
    {
      name: 'duration',
      title: 'Video Duration',
      type: 'string',
      description: 'e.g., 2:45',
      validation: Rule => Rule.required()
    },
    {
      name: 'thumbnail',
      title: 'Custom Thumbnail',
      type: 'image',
      description: 'Optional: Upload custom thumbnail (YouTube thumbnail used if not provided)',
      options: {
        hotspot: true
      }
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(5),
      initialValue: 5
    },
    {
      name: 'projectDetails',
      title: 'Project Details',
      type: 'object',
      fields: [
        {
          name: 'systemSize',
          title: 'System Size',
          type: 'string',
          description: 'e.g., 8kW Residential'
        },
        {
          name: 'annualSavings',
          title: 'Annual Savings',
          type: 'string',
          description: 'e.g., ₹2,64,000/year'
        },
        {
          name: 'installationDate',
          title: 'Installation Date',
          type: 'date'
        }
      ]
    },
    {
      name: 'gradient',
      title: 'Color Gradient',
      type: 'string',
      options: {
        list: [
          { title: 'Red to Pink', value: 'from-red-500 to-pink-500' },
          { title: 'Green to Emerald', value: 'from-green-500 to-emerald-500' },
          { title: 'Orange to Red', value: 'from-orange-500 to-red-500' },
          { title: 'Blue to Cyan', value: 'from-blue-500 to-cyan-500' },
          { title: 'Purple to Violet', value: 'from-purple-500 to-violet-500' },
          { title: 'Teal to Cyan', value: 'from-teal-500 to-cyan-500' }
        ]
      },
      initialValue: 'from-red-500 to-pink-500'
    },
    {
      name: 'featured',
      title: 'Featured Video',
      type: 'boolean',
      description: 'Show this video prominently',
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
      title: 'customerName',
      subtitle: 'title.english',
      duration: 'duration',
      media: 'thumbnail'
    },
    prepare({ title, subtitle, duration, media }) {
      return {
        title: title,
        subtitle: `${subtitle} | ${duration}`,
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
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        { field: 'featured', direction: 'desc' },
        { field: 'sortOrder', direction: 'asc' }
      ]
    }
  ]
}