'use client'

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Product } from '@/types/database'

interface SearchModalProps {
  open: boolean
  onClose: () => void
}

// Mock search results
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Loading Spinner Pack',
    slug: 'premium-loading-spinner-pack',
    short_description: 'Beautiful CSS animations for modern loading states',
    price: 29.99,
    product_type: 'animation',
    license_type: 'single',
    rating: 4.9,
    review_count: 127,
    view_count: 2500,
    download_count: 450,
    is_active: true,
    is_featured: true,
    is_trending: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'React Component Library',
    slug: 'react-component-library',
    short_description: 'Production-ready React components with TypeScript',
    price: 79.99,
    product_type: 'ui_component',
    license_type: 'single',
    rating: 5.0,
    review_count: 203,
    view_count: 4200,
    download_count: 680,
    is_active: true,
    is_featured: true,
    is_trending: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }
]

export default function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Product[]>([])
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = async (searchQuery: string) => {
    setQuery(searchQuery)
    
    if (searchQuery.trim().length === 0) {
      setResults([])
      return
    }

    setIsSearching(true)
    
    // Simulate API call
    setTimeout(() => {
      const filtered = mockProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.short_description?.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setResults(filtered)
      setIsSearching(false)
    }, 300)
  }

  const handleClose = () => {
    setQuery('')
    setResults([])
    onClose()
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-2xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
              {/* Search Input */}
              <div className="relative">
                <MagnifyingGlassIcon
                  className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <input
                  type="text"
                  className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Search products..."
                  value={query}
                  onChange={(e) => handleSearch(e.target.value)}
                  autoFocus
                />
                <button
                  type="button"
                  className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-500"
                  onClick={handleClose}
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>

              {/* Search Results */}
              {query.trim().length > 0 && (
                <div className="max-h-96 overflow-y-auto py-2">
                  {isSearching ? (
                    <div className="px-4 py-8 text-center">
                      <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-purple-600 border-t-transparent"></div>
                      <p className="mt-2 text-sm text-gray-500">Searching...</p>
                    </div>
                  ) : results.length > 0 ? (
                    <div>
                      <p className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wide">
                        Products ({results.length})
                      </p>
                      {results.map((product) => (
                        <Link
                          key={product.id}
                          href={`/products/${product.slug}`}
                          onClick={handleClose}
                          className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
                        >
                          {/* Product Image */}
                          <div className="h-10 w-10 flex-shrink-0 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mr-3">
                            <span className="text-purple-600 font-bold text-sm">
                              {product.name.charAt(0)}
                            </span>
                          </div>

                          {/* Product Info */}
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {product.name}
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                              {product.short_description}
                            </p>
                          </div>

                          {/* Price */}
                          <div className="flex-shrink-0 text-sm font-medium text-gray-900">
                            ${product.price}
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="px-4 py-8 text-center">
                      <MagnifyingGlassIcon className="mx-auto h-12 w-12 text-gray-400" />
                      <h3 className="mt-2 text-sm font-medium text-gray-900">No products found</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Try adjusting your search terms or browse our categories.
                      </p>
                      <div className="mt-4">
                        <Link
                          href="/products"
                          onClick={handleClose}
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-purple-600 bg-purple-100 hover:bg-purple-200"
                        >
                          Browse All Products
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Quick Links when no search */}
              {query.trim().length === 0 && (
                <div className="py-2">
                  <p className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Popular Categories
                  </p>
                  {[
                    { name: 'UI Components', href: '/categories/ui-components' },
                    { name: 'HTML Tools', href: '/categories/html-tools' },
                    { name: 'Animations', href: '/categories/animations' },
                    { name: 'JavaScript Utilities', href: '/categories/js-utilities' }
                  ].map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      onClick={handleClose}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}

              {/* Footer */}
              <div className="px-4 py-3 text-xs text-gray-500 bg-gray-50">
                <div className="flex items-center justify-between">
                  <span>Press ESC to close</span>
                  <span className="flex items-center space-x-2">
                    <kbd className="inline-flex items-center rounded border border-gray-200 px-2 py-1 text-xs font-sans font-medium text-gray-400">
                      ⌘K
                    </kbd>
                    <span>to search</span>
                  </span>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}