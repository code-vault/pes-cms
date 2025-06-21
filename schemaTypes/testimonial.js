// schemas/testimonial.js
export default {
  name: 'testimonial',
  title: 'Text Testimonial',
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
      name: 'testimonialText',
      title: 'Testimonial Text',
      type: 'object',
      fields: [
        {
          name: 'english',
          title: 'English Testimonial',
          type: 'text',
          validation: Rule => Rule.required()
        },
        {
          name: 'hindi',
          title: 'Hindi Testimonial',
          type: 'text',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(5),
      initialValue: 5
    },
    {
      name: 'customerPhoto',
      title: 'Customer Photo',
      type: 'image',
      options: {
        hotspot: true
      }
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
          description: 'e.g., 5kW Residential System'
        },
        {
          name: 'annualSavings',
          title: 'Annual Savings',
          type: 'string',
          description: 'e.g., ₹1,20,000/year'
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
      name: 'featured',
      title: 'Featured Testimonial',
      type: 'boolean',
      description: 'Show this testimonial prominently',
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
      subtitle: 'location',
      rating: 'rating',
      media: 'customerPhoto'
    },
    prepare({ title, subtitle, rating, media }) {
      const stars = '★'.repeat(rating || 0);
      return {
        title: title,
        subtitle: `${subtitle} | ${stars}`,
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
      title: 'Rating (Highest First)',
      name: 'ratingDesc',
      by: [{ field: 'rating', direction: 'desc' }]
    }
  ]
}