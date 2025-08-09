'use client'

import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    id: 1,
    name: 'Alex Thompson',
    role: 'Senior Frontend Developer',
    company: 'TechFlow Inc.',
    content: 'Kaylie Labs saved me countless hours! Their React components are production-ready and incredibly well-documented. Best investment for my development workflow.',
    rating: 5,
    avatar: 'AT'
  },
  {
    id: 2,
    name: 'Maria Rodriguez',
    role: 'UI/UX Designer',
    company: 'Creative Studio',
    content: 'The animation library is absolutely stunning. Clean code, smooth animations, and perfect for modern web apps. My clients love the results!',
    rating: 5,
    avatar: 'MR'
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'Full Stack Developer',
    company: 'StartupXYZ',
    content: 'Amazing HTML tools that work offline. Perfect for quick prototyping and data processing. The quality and attention to detail is impressive.',
    rating: 5,
    avatar: 'DC'
  },
  {
    id: 4,
    name: 'Sarah Johnson',
    role: 'Technical Lead',
    company: 'Enterprise Corp',
    content: 'Professional grade components with excellent TypeScript support. Our team productivity increased significantly after adopting these tools.',
    rating: 5,
    avatar: 'SJ'
  },
  {
    id: 5,
    name: 'Michael Kim',
    role: 'Freelance Developer',
    company: 'Independent',
    content: 'Great value for money! The spinner pack alone paid for itself in the first project. Clean, customizable, and easy to implement.',
    rating: 5,
    avatar: 'MK'
  },
  {
    id: 6,
    name: 'Emily Davis',
    role: 'Product Manager',
    company: 'Digital Agency',
    content: 'Our development team loves these components. Faster delivery times and consistent quality across all our projects. Highly recommended!',
    rating: 5,
    avatar: 'ED'
  }
]

const stats = [
  { label: 'Happy Customers', value: '10,000+' },
  { label: 'Projects Completed', value: '50,000+' },
  { label: 'Average Rating', value: '4.9/5' },
  { label: 'Return Customers', value: '85%' }
]

export default function SocialProof() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Loved by Developers Worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of developers who trust Kaylie Labs for their digital product needs
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Placeholder for company logos/trust badges */}
            <div className="text-gray-400 text-sm">Trusted by companies worldwide</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}