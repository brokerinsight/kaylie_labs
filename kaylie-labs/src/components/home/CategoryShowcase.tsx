'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  CodeBracketIcon, 
  CubeIcon, 
  SparklesIcon, 
  WrenchScrewdriverIcon,
  DocumentTextIcon 
} from '@heroicons/react/24/outline'

const categories = [
  {
    name: 'UI Components',
    slug: 'ui-components',
    description: 'Ready-to-use React, Vue, and vanilla JS components',
    icon: CubeIcon,
    productCount: 150,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600'
  },
  {
    name: 'HTML Tools',
    slug: 'html-tools',
    description: 'Offline utilities for data processing and generation',
    icon: WrenchScrewdriverIcon,
    productCount: 85,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600'
  },
  {
    name: 'Animations',
    slug: 'animations',
    description: 'Stunning CSS and JavaScript animations',
    icon: SparklesIcon,
    productCount: 120,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600'
  },
  {
    name: 'JavaScript Utilities',
    slug: 'js-utilities',
    description: 'Helpful functions and libraries for modern development',
    icon: CodeBracketIcon,
    productCount: 95,
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-50',
    textColor: 'text-yellow-600'
  },
  {
    name: 'Templates',
    slug: 'templates',
    description: 'Complete layouts and starter templates',
    icon: DocumentTextIcon,
    productCount: 45,
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-600'
  }
]

export default function CategoryShowcase() {
  return (
    <section className="py-20 bg-white">
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
            Browse by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find exactly what you need from our carefully organized collection of digital products
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/categories/${category.slug}`}
                className="block group"
              >
                <div className={`${category.bgColor} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className={`text-xl font-bold ${category.textColor} mb-3 group-hover:${category.textColor}/80 transition-colors`}>
                    {category.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {category.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {category.productCount} products
                    </span>
                    <span className={`text-sm font-medium ${category.textColor} group-hover:translate-x-1 transition-transform duration-200`}>
                      Browse →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Categories CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/categories"
            className="inline-flex items-center px-6 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-colors"
          >
            View All Categories
          </Link>
        </motion.div>
      </div>
    </section>
  )
}