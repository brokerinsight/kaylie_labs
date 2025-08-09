'use client'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, PlusIcon, MinusIcon, TrashIcon } from '@heroicons/react/24/outline'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useCart } from '@/contexts/CartContext'

interface CartSidebarProps {
  open: boolean
  onClose: () => void
}

export default function CartSidebar({ open, onClose }: CartSidebarProps) {
  const { items, total, itemCount, updateQuantity, removeFromCart } = useCart()

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    {/* Header */}
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping Cart ({itemCount})
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={onClose}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      {/* Cart Items */}
                      <div className="mt-8">
                        {items.length === 0 ? (
                          <div className="text-center py-12">
                            <ShoppingBagIcon className="mx-auto h-12 w-12 text-gray-400" />
                            <h3 className="mt-2 text-sm font-medium text-gray-900">Your cart is empty</h3>
                            <p className="mt-1 text-sm text-gray-500">
                              Start adding some awesome products!
                            </p>
                            <div className="mt-6">
                              <Link
                                href="/products"
                                onClick={onClose}
                                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                              >
                                Browse Products
                              </Link>
                            </div>
                          </div>
                        ) : (
                          <div className="flow-root">
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                              {items.map((item) => (
                                <li key={item.product.id} className="flex py-6">
                                  {/* Product Image */}
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <div className="h-full w-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                                      <span className="text-purple-600 font-bold text-lg">
                                        {item.product.name.charAt(0)}
                                      </span>
                                    </div>
                                  </div>

                                  {/* Product Details */}
                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <Link
                                            href={`/products/${item.product.slug}`}
                                            onClick={onClose}
                                            className="hover:text-purple-600"
                                          >
                                            {item.product.name}
                                          </Link>
                                        </h3>
                                        <p className="ml-4">${item.product.price}</p>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                                        {item.product.short_description}
                                      </p>
                                    </div>

                                    {/* Quantity and Remove */}
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <div className="flex items-center space-x-3">
                                        <span className="text-gray-500">Qty:</span>
                                        <div className="flex items-center border border-gray-300 rounded">
                                          <button
                                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                            className="p-1 hover:bg-gray-100"
                                            disabled={item.quantity <= 1}
                                          >
                                            <MinusIcon className="h-4 w-4" />
                                          </button>
                                          <span className="px-3 py-1 text-center min-w-[3rem]">
                                            {item.quantity}
                                          </span>
                                          <button
                                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                            className="p-1 hover:bg-gray-100"
                                          >
                                            <PlusIcon className="h-4 w-4" />
                                          </button>
                                        </div>
                                      </div>

                                      <button
                                        type="button"
                                        onClick={() => removeFromCart(item.product.id)}
                                        className="font-medium text-red-600 hover:text-red-500 flex items-center"
                                      >
                                        <TrashIcon className="h-4 w-4 mr-1" />
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Footer */}
                    {items.length > 0 && (
                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        {/* Subtotal */}
                        <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                          <p>Subtotal</p>
                          <p>${total.toFixed(2)}</p>
                        </div>
                        
                        <p className="mt-0.5 text-sm text-gray-500 mb-6">
                          Instant download after purchase. No shipping fees.
                        </p>

                        {/* Checkout Button */}
                        <div className="space-y-3">
                          <Link
                            href="/checkout"
                            onClick={onClose}
                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-purple-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-purple-700"
                          >
                            Checkout
                          </Link>
                          
                          <Link
                            href="/products"
                            onClick={onClose}
                            className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                          >
                            Continue Shopping
                          </Link>
                        </div>

                        {/* Trust Signals */}
                        <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <span className="mr-1">🔒</span>
                            Secure Payment
                          </span>
                          <span className="flex items-center">
                            <span className="mr-1">⚡</span>
                            Instant Download
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}