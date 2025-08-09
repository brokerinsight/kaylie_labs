export type OrderStatus = 'pending' | 'processing' | 'completed' | 'cancelled' | 'refunded'
export type ProductType = 'ui_component' | 'html_tool' | 'js_utility' | 'animation' | 'template'
export type LicenseType = 'single' | 'multiple' | 'unlimited'

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  image_url?: string
  parent_id?: string
  is_featured: boolean
  sort_order: number
  created_at: string
  updated_at: string
}

export interface Product {
  id: string
  name: string
  slug: string
  description?: string
  short_description?: string
  price: number
  original_price?: number
  category_id?: string
  product_type: ProductType
  license_type: LicenseType
  
  // Media
  thumbnail_url?: string
  images?: string[]
  demo_url?: string
  preview_images?: string[]
  video_urls?: string[]
  
  // Files
  download_files?: Record<string, string>
  file_size_mb?: number
  
  // SEO
  meta_title?: string
  meta_description?: string
  tags?: string[]
  
  // Features
  features?: string[]
  requirements?: string[]
  browser_support?: string[]
  
  // Analytics
  view_count: number
  download_count: number
  rating: number
  review_count: number
  
  // Status
  is_active: boolean
  is_featured: boolean
  is_trending: boolean
  
  created_at: string
  updated_at: string
  
  // Relations
  category?: Category
}

export interface Order {
  id: string
  order_number: string
  
  // Customer info
  customer_email: string
  customer_name?: string
  customer_phone?: string
  
  // User reference
  user_id?: string
  
  // Order details
  status: OrderStatus
  total_amount: number
  tax_amount: number
  discount_amount: number
  
  // Payment
  payment_intent_id?: string
  payment_method?: string
  payment_status?: string
  paid_at?: string
  
  // Download access
  download_token?: string
  download_expires_at?: string
  download_count: number
  max_downloads: number
  
  // Metadata
  ip_address?: string
  user_agent?: string
  referrer?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  
  created_at: string
  updated_at: string
  
  // Relations
  order_items?: OrderItem[]
}

export interface OrderItem {
  id: string
  order_id: string
  product_id: string
  quantity: number
  price: number
  created_at: string
  
  // Relations
  product?: Product
}

export interface ProductReview {
  id: string
  product_id: string
  order_id?: string
  customer_email: string
  customer_name?: string
  rating: number
  title?: string
  comment?: string
  is_verified: boolean
  is_approved: boolean
  created_at: string
  updated_at: string
}

export interface Coupon {
  id: string
  code: string
  description?: string
  discount_type: 'percentage' | 'fixed'
  discount_value: number
  minimum_amount: number
  usage_limit?: number
  used_count: number
  expires_at?: string
  is_active: boolean
  created_at: string
}

export interface AnalyticsEvent {
  id: string
  event_type: string
  product_id?: string
  order_id?: string
  user_id?: string
  session_id?: string
  ip_address?: string
  user_agent?: string
  referrer?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  metadata?: Record<string, unknown>
  created_at: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt?: string
  content: string
  author_name?: string
  featured_image?: string
  meta_title?: string
  meta_description?: string
  tags?: string[]
  view_count: number
  is_published: boolean
  published_at?: string
  created_at: string
  updated_at: string
}

export interface DownloadLog {
  id: string
  order_id: string
  product_id: string
  download_token?: string
  ip_address?: string
  user_agent?: string
  downloaded_at: string
}

// Cart item type for frontend state management
export interface CartItem {
  product: Product
  quantity: number
}

// Guest checkout form data
export interface GuestCheckoutData {
  email: string
  name: string
  phone?: string
}

// Stripe payment data
export interface PaymentData {
  payment_intent_id: string
  payment_method: string
  amount: number
}