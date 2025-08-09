'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { StarIcon, EyeIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useCart } from '@/contexts/CartContext'
import { Product } from '@/types/database'

// Mock featured products data
const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Loading Spinner Pack',
    slug: 'premium-loading-spinner-pack',
    short_description: 'Beautiful CSS animations for modern loading states',
    price: 29.99,
    original_price: 49.99,
    product_type: 'animation',
    license_type: 'single',
    thumbnail_url: '/products/spinner-pack.jpg',
    rating: 4.9,
    review_count: 127,
    view_count: 2500,
    download_count: 450,
    is_active: true,
    is_featured: true,
    is_trending: true,
    tags: ['css', 'animation', 'loading', 'spinner'],
    features: ['10 unique spinners', 'CSS-only animations', 'Customizable colors', 'Responsive design'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'HTML Utility Toolkit',
    slug: 'html-utility-toolkit',
    short_description: 'Offline tools for data processing and generation',
    price: 19.99,
    product_type: 'html_tool',
    license_type: 'single',
    thumbnail_url: '/products/utility-toolkit.jpg',
    rating: 4.8,
    review_count: 89,
    view_count: 1800,
    download_count: 320,
    is_active: true,
    is_featured: true,
    is_trending: false,
    tags: ['html', 'javascript', 'utilities', 'tools'],
    features: ['Random generator', 'Data sorter', 'Base64 encoder', 'Color picker'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'React Component Library',
    slug: 'react-component-library',
    short_description: 'Production-ready React components with TypeScript',
    price: 79.99,
    original_price: 99.99,
    product_type: 'ui_component',
    license_type: 'single',
    thumbnail_url: '/products/react-components.jpg',
    rating: 5.0,
    review_count: 203,
    view_count: 4200,
    download_count: 680,
    is_active: true,
    is_featured: true,
    is_trending: true,
    tags: ['react', 'typescript', 'components', 'ui'],
    features: ['50+ components', 'TypeScript support', 'Storybook docs', 'Dark mode'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }
]

export default function FeaturedProducts() {
  const { addToCart } = useCart()

  const handleAddToCart = (product: Product) => {
    addToCart(product)
  }

  return (
    <section className="py-20 bg-gray-50">
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
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hand-picked premium code products that developers love. Save hours of development time with our production-ready solutions.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Product Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden">
                {/* Placeholder image */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-lg">
                        {product.name.charAt(0)}
                      </span>
                    </div>
                    <span className="text-sm">Preview Image</span>
                  </div>
                </div>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.is_trending && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      Trending
                    </span>
                  )}
                  {product.original_price && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      Sale
                    </span>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link
                    href={`/products/${product.slug}`}
                    className="bg-white/90 backdrop-blur-sm p-2 rounded-lg hover:bg-white transition-colors"
                  >
                    <EyeIcon className="w-4 h-4 text-gray-700" />
                  </Link>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Title and Rating */}
                <div className="mb-3">
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-lg font-semibold text-gray-900 hover:text-purple-600 transition-colors line-clamp-2"
                  >
                    {product.name}
                  </Link>
                  
                  <div className="flex items-center mt-2 space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.review_count})
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.short_description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {product.features?.slice(0, 2).map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                    {product.features && product.features.length > 2 && (
                      <span className="text-xs text-gray-500">
                        +{product.features.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                    {product.original_price && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.original_price}
                      </span>
                    )}
                  </div>
                  
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium flex items-center space-x-2"
                  >
                    <ShoppingBagIcon className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Products CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/products"
            className="inline-flex items-center px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
          >
            View All Products
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}