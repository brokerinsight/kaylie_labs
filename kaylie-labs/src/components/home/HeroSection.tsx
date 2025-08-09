'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRightIcon, PlayIcon, StarIcon } from '@heroicons/react/24/solid'
import { ShoppingBagIcon, CodeBracketIcon, SparklesIcon } from '@heroicons/react/24/outline'

const stats = [
  { label: 'Happy Customers', value: '10,000+' },
  { label: 'Code Products', value: '500+' },
  { label: 'Downloads', value: '50,000+' },
  { label: 'Average Rating', value: '4.9★' },
]

const featuredKeywords = [
  'UI Components',
  'HTML Tools',
  'CSS Animations',
  'JavaScript Utilities',
  'Loading Spinners',
  'Form Validators',
]

export default function HeroSection() {
  const [currentKeyword, setCurrentKeyword] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeyword((prev) => (prev + 1) % featuredKeywords.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              <StarIcon className="w-4 h-4 text-yellow-400 mr-2" />
              Trusted by 10,000+ developers worldwide
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Premium{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Code Products
              </span>
              <br />
              for Modern Web
            </h1>

            {/* Dynamic Subheadline */}
            <div className="text-xl sm:text-2xl text-white/80 mb-8 h-8">
              <motion.span
                key={currentKeyword}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-purple-300 font-semibold"
              >
                {featuredKeywords[currentKeyword]}
              </motion.span>
              <span> ready for instant download</span>
            </div>

            {/* Value Proposition */}
            <p className="text-lg text-white/70 mb-8 max-w-xl">
              Skip the coding from scratch. Get production-ready UI components, tools, and animations. 
              Copy, paste, customize. Built by developers, for developers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/products"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <ShoppingBagIcon className="w-5 h-5 mr-2" />
                Browse Products
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              
              <button className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20">
                <PlayIcon className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Code Preview Window */}
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl border border-white/10 shadow-2xl overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center px-4 py-3 bg-slate-700/50 border-b border-white/10">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center text-white/60 text-sm">
                  kaylie-labs-component.tsx
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 text-sm font-mono">
                <div className="text-purple-300">import</div>
                <div className="text-white ml-4">&#123; SpinnerComponent &#125;</div>
                <div className="text-purple-300">from</div>
                <div className="text-green-300 ml-2">&apos;@kaylie-labs/ui&apos;</div>
                
                <div className="mt-4 text-blue-300">export default function</div>
                <div className="text-yellow-300 ml-4">LoadingButton() &#123;</div>
                
                <div className="mt-2 ml-4 text-purple-300">return</div>
                <div className="text-white ml-8">&#40;</div>
                <div className="text-red-300 ml-12">&lt;button&gt;</div>
                <div className="text-white ml-16">&#123;loading ? &lt;SpinnerComponent /&gt; : &apos;Submit&apos;&#125;</div>
                <div className="text-red-300 ml-12">&lt;/button&gt;</div>
                <div className="text-white ml-8">&#41;</div>
                <div className="text-yellow-300 ml-4">&#125;</div>
              </div>

              {/* Live Preview Badge */}
              <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></div>
                Live Preview
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-purple-500 text-white p-3 rounded-lg shadow-lg"
            >
              <CodeBracketIcon className="w-6 h-6" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-pink-500 text-white p-3 rounded-lg shadow-lg"
            >
              <SparklesIcon className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 text-center"
        >
          <div className="text-sm mb-2">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto relative">
            <div className="w-1 h-3 bg-white/50 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}