'use client'

import { motion } from 'framer-motion'
import { 
  ShieldCheckIcon, 
  CreditCardIcon, 
  ClockIcon, 
  UserGroupIcon,
  CheckBadgeIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

const trustFeatures = [
  {
    icon: ShieldCheckIcon,
    title: 'Secure Payments',
    description: 'SSL encrypted checkout with Stripe',
  },
  {
    icon: ClockIcon,
    title: 'Instant Downloads',
    description: 'Get your files immediately after purchase',
  },
  {
    icon: CheckBadgeIcon,
    title: 'Quality Guaranteed',
    description: '30-day money back guarantee',
  },
  {
    icon: UserGroupIcon,
    title: '24/7 Support',
    description: 'Expert support when you need it',
  },
  {
    icon: CreditCardIcon,
    title: 'Multiple Payment Methods',
    description: 'PayPal, Cards, MPESA supported',
  },
  {
    icon: GlobeAltIcon,
    title: 'Global Access',
    description: 'Available worldwide, all time zones',
  },
]

const securityBadges = [
  { name: 'SSL Secured', logo: '/badges/ssl.svg' },
  { name: 'Stripe Verified', logo: '/badges/stripe.svg' },
  { name: 'GDPR Compliant', logo: '/badges/gdpr.svg' },
  { name: 'ISO 27001', logo: '/badges/iso.svg' },
]

const testimonialPreview = {
  rating: 5,
  text: "Amazing quality code! Saved me weeks of development time. The UI components are production-ready and beautifully designed.",
  author: "Sarah Chen",
  role: "Frontend Developer",
  company: "TechCorp"
}

export default function TrustSignals() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Security Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-8">
            Trusted & Secure Platform
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {securityBadges.map((badge, index) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                  <div className="w-8 h-8 bg-gray-300 rounded"></div>
                </div>
                <span className="text-xs text-gray-500">{badge.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4 p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex-shrink-0">
                <feature.icon className="w-8 h-8 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 lg:p-12 text-center">
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonialPreview.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl lg:text-2xl text-gray-700 font-medium mb-8 leading-relaxed">
              &ldquo;{testimonialPreview.text}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mr-4">
                <span className="text-purple-700 font-semibold text-lg">
                  {testimonialPreview.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">
                  {testimonialPreview.author}
                </div>
                <div className="text-gray-600 text-sm">
                  {testimonialPreview.role} at {testimonialPreview.company}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-900 rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">&lt; 2s</div>
              <div className="text-gray-400 text-sm">Download Speed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">256-bit</div>
              <div className="text-gray-400 text-sm">SSL Encryption</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Monitoring</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}