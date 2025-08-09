import { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import CategoryShowcase from '@/components/home/CategoryShowcase'
import TrustSignals from '@/components/home/TrustSignals'
import NewsletterCTA from '@/components/home/NewsletterCTA'
import SocialProof from '@/components/home/SocialProof'

export const metadata: Metadata = {
  title: 'Kaylie Labs - Premium Digital Code Products | UI Components, Tools & Animations',
  description: 'Discover premium digital code products including stunning UI components, offline HTML tools, animations, and JavaScript utilities. Instant download, modern designs, ready-to-use code.',
  keywords: ['UI components', 'HTML tools', 'animations', 'JavaScript utilities', 'code products', 'web development', 'digital downloads'],
  openGraph: {
    title: 'Kaylie Labs - Premium Digital Code Products',
    description: 'Premium UI components, tools & animations for modern web development',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaylie Labs - Premium Digital Code Products',
    description: 'Premium UI components, tools & animations for modern web development',
    images: ['/og-image.jpg'],
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Trust Signals */}
      <TrustSignals />
      
      {/* Featured Products */}
      <FeaturedProducts />
      
      {/* Category Showcase */}
      <CategoryShowcase />
      
      {/* Social Proof */}
      <SocialProof />
      
      {/* Newsletter CTA */}
      <NewsletterCTA />
    </main>
  )
}
