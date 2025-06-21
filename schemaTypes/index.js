// schemas/index.js - Main schema file
import translation from './translation'
import mediaAsset from './mediaAsset'
import galleryProject from './galleryProject'
import testimonial from './testimonial'
import videoTestimonial from './videoTestimonial'
import contactFormStep from './contactFormStep'
import trustIndicator from './trustIndicator'
import contactInfo from './contactInfo'

export const schemaTypes = [
  translation,
  mediaAsset,
  galleryProject,
  testimonial,
  videoTestimonial,
  contactFormStep,
  trustIndicator,
  contactInfo
]