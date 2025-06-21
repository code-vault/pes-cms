// sanity.config.js - Optimized for deployment
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'purvodaya-energy',
  title: 'Purvodaya Energy Solutions CMS',
  
  projectId: 'v7cam0qp',
  dataset: 'production',

  // Studio configuration for deployment
  basePath: '/', // The path where studio will be hosted

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content Management')
          .items([
            // Translations
            S.listItem()
              .title('Translations')
              .icon(() => '🌐')
              .child(
                S.list()
                  .title('Translations by Category')
                  .items([
                    S.listItem()
                      .title('All Translations')
                      .child(S.documentTypeList('translation')),
                    S.divider(),
                    S.listItem()
                      .title('Header')
                      .child(
                        S.documentList()
                          .title('Header Translations')
                          .filter('_type == "translation" && category == "header"')
                      ),
                    S.listItem()
                      .title('Hero Section')
                      .child(
                        S.documentList()
                          .title('Hero Translations')
                          .filter('_type == "translation" && category == "hero"')
                      ),
                    S.listItem()
                      .title('Services')
                      .child(
                        S.documentList()
                          .title('Services Translations')
                          .filter('_type == "translation" && category == "services"')
                      ),
                    S.listItem()
                      .title('Gallery')
                      .child(
                        S.documentList()
                          .title('Gallery Translations')
                          .filter('_type == "translation" && category == "gallery"')
                      ),
                    S.listItem()
                      .title('Testimonials')
                      .child(
                        S.documentList()
                          .title('Testimonials Translations')
                          .filter('_type == "translation" && category == "testimonials"')
                      ),
                    S.listItem()
                      .title('Contact')
                      .child(
                        S.documentList()
                          .title('Contact Translations')
                          .filter('_type == "translation" && category == "contact"')
                      ),
                    S.listItem()
                      .title('AI Chatbot')
                      .child(
                        S.documentList()
                          .title('AI Chatbot Translations')
                          .filter('_type == "translation" && category == "aiChatbot"')
                      ),
                    S.listItem()
                      .title('FAQ')
                      .child(
                        S.documentList()
                          .title('FAQ Translations')
                          .filter('_type == "translation" && category == "faq"')
                      )
                  ])
              ),
            
            S.divider(),
            
            // Gallery Projects
            S.listItem()
              .title('Gallery Projects')
              .icon(() => '🖼️')
              .child(S.documentTypeList('galleryProject')),
            
            // Testimonials
            S.listItem()
              .title('Customer Testimonials')
              .icon(() => '💬')
              .child(
                S.list()
                  .title('Testimonials')
                  .items([
                    S.listItem()
                      .title('Text Testimonials')
                      .child(S.documentTypeList('testimonial')),
                    S.listItem()
                      .title('Video Testimonials')
                      .child(S.documentTypeList('videoTestimonial'))
                  ])
              ),
            
            // Contact Form
            S.listItem()
              .title('Contact Form Steps')
              .icon(() => '📝')
              .child(S.documentTypeList('contactFormStep')),
            
            S.divider(),
            
            // Media Assets
            S.listItem()
              .title('Media Assets')
              .icon(() => '📁')
              .child(S.documentTypeList('mediaAsset')),
            
            // Trust Indicators
            S.listItem()
              .title('Trust Indicators')
              .icon(() => '✅')
              .child(S.documentTypeList('trustIndicator')),
            
            // Contact Information
            S.listItem()
              .title('Contact Information')
              .icon(() => '📞')
              .child(S.documentTypeList('contactInfo'))
          ])
    }),
    // Only include vision tool in development
    ...(process.env.NODE_ENV === 'development' ? [visionTool()] : [])
  ],

  schema: {
    types: schemaTypes,
  },
  
  // Remove vision tool in production for security
  tools: (prev) => {
    if (process.env.NODE_ENV === 'production') {
      return prev.filter((tool) => tool.name !== 'vision')
    }
    return prev
  },

  // Studio customization for better UX
  studio: {
    components: {
      // Custom logo (optional)
      logo: () => {
        return (
          <div style={{ display: 'flex', alignItems: 'center', fontSize: '1.2rem', fontWeight: 'bold', color: '#f97316' }}>
            🌞 Purvodaya CMS
          </div>
        )
      }
    }
  },

  // Document actions configuration
  document: {
    actions: (prev, context) => {
      // Customize available actions per document type
      if (context.schemaType === 'translation') {
        return prev.filter(action => 
          action.action !== 'delete' || 
          context.currentUser?.roles?.some(role => role.name === 'administrator')
        )
      }
      return prev
    }
  }
})