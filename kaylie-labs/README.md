# Kaylie Labs - Premium Digital Code Products

A modern, high-converting eCommerce platform built with Next.js for selling digital code products including UI components, HTML tools, animations, and JavaScript utilities.

## 🚀 Features

### Core eCommerce Features
- **Guest Checkout** - Purchase without account creation for maximum conversion
- **Instant Digital Delivery** - Secure file downloads immediately after payment
- **Responsive Design** - Mobile-first, optimized for all devices
- **Shopping Cart** - Persistent cart with localStorage
- **Search & Filtering** - Advanced product discovery
- **Multiple Payment Methods** - Stripe, PayPal, M-PESA support

### Product Management
- **Categories** - Organized product catalog
- **Reviews & Ratings** - Customer feedback system
- **Product Previews** - Live demos and code samples
- **Video Integration** - YouTube, TikTok embeds on product pages
- **SEO Optimization** - Rich metadata and structured data

### User Experience
- **Trust Signals** - Security badges, testimonials, guarantees
- **Social Proof** - Customer reviews and usage statistics
- **Performance Optimized** - Fast loading with Cloudflare CDN
- **Analytics** - Comprehensive tracking and insights

### Security & Reliability
- **SSL Encryption** - Secure data transmission
- **Row Level Security** - Database-level access control
- **Download Tokens** - Secure file access with expiration
- **GDPR Compliant** - Privacy-focused data handling

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, TailwindCSS
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Payments**: Stripe, PayPal
- **CDN/Storage**: Cloudflare
- **Email**: Resend (transactional emails)
- **Analytics**: Built-in tracking system
- **UI Components**: Headless UI, Heroicons, Framer Motion

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ and npm
- Supabase account
- Stripe account
- Cloudflare account (optional but recommended)

### 1. Clone and Install
```bash
git clone <your-repo-url>
cd kaylie-labs
npm install
```

### 2. Environment Setup
Copy `.env.local` and configure your environment variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Stripe Configuration  
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Email Configuration
RESEND_API_KEY=re_...

# Cloudflare Configuration (Optional)
CLOUDFLARE_API_TOKEN=...
CLOUDFLARE_ZONE_ID=...
```

### 3. Database Setup
1. Create a new Supabase project
2. Run the SQL schema from `database/schema.sql` in the Supabase SQL editor
3. Enable Row Level Security (RLS) policies
4. Configure authentication settings

### 4. Stripe Setup
1. Create Stripe account and get API keys
2. Configure webhook endpoints:
   - `https://yourdomain.com/api/webhooks/stripe`
   - Events: `payment_intent.succeeded`, `payment_intent.payment_failed`

### 5. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🗂 Project Structure

```
kaylie-labs/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── page.tsx           # Landing page
│   │   ├── layout.tsx         # Root layout
│   │   ├── globals.css        # Global styles
│   │   └── ...
│   ├── components/            # React components
│   │   ├── home/             # Landing page components
│   │   ├── layout/           # Navigation, footer
│   │   ├── cart/             # Shopping cart
│   │   ├── search/           # Search functionality
│   │   └── ...
│   ├── contexts/             # React contexts
│   │   ├── CartContext.tsx   # Shopping cart state
│   │   └── AuthContext.tsx   # Authentication state
│   ├── lib/                  # Utilities and configurations
│   │   ├── supabase/         # Supabase client setup
│   │   └── ...
│   └── types/                # TypeScript type definitions
├── database/                 # Database schema and migrations
├── public/                   # Static assets
└── ...
```

## 🎯 Key Components

### Landing Page
- **Hero Section** - Compelling value proposition with animated elements
- **Trust Signals** - Security badges, testimonials, statistics
- **Featured Products** - Showcasing bestsellers with strong CTAs
- **Category Showcase** - Visual product categorization
- **Social Proof** - Customer testimonials and reviews
- **Newsletter CTA** - Lead capture with benefits

### Shopping Experience
- **Product Catalog** - Grid/list views with filtering
- **Product Pages** - Detailed info, previews, videos, reviews
- **Cart Sidebar** - Quick access to cart with quantity management
- **Guest Checkout** - Streamlined purchase flow without signup
- **Search Modal** - Fast product discovery

### User Features
- **Authentication** - Secure login/signup with Supabase
- **User Dashboard** - Order history, downloads, account settings
- **Download Management** - Secure file access with token system

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
The application can be deployed on any platform supporting Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

### Domain & CDN Setup
1. Configure custom domain
2. Set up Cloudflare for CDN and security
3. Configure SSL certificates
4. Update CORS settings in Supabase

## 🔧 Configuration

### Payment Methods
- **Stripe**: Credit cards, Apple Pay, Google Pay
- **PayPal**: PayPal account and credit cards
- **M-PESA**: For African markets (requires additional setup)

### File Storage
- **Development**: Local storage simulation
- **Production**: Cloudflare R2 or Supabase Storage

### Email Templates
Configure transactional emails for:
- Order confirmations
- Download links
- Password resets
- Newsletter subscriptions

## 📊 Analytics & Monitoring

The platform includes built-in analytics for:
- Product views and purchases
- Conversion funnels
- Customer behavior
- Revenue tracking
- Download analytics

### External Analytics
Integrate with:
- Google Analytics 4
- Mixpanel
- PostHog
- Plausible

## 🔒 Security Features

- **SSL/TLS encryption** for all data transmission
- **Row Level Security** in Supabase database
- **Secure download tokens** with expiration
- **Input validation** and sanitization
- **CSRF protection** built into Next.js
- **Rate limiting** for API endpoints

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Email: hello@kaylielabs.com
- Documentation: [docs.kaylielabs.com](https://docs.kaylielabs.com)
- GitHub Issues: [Create an issue](https://github.com/kaylielabs/kaylie-labs/issues)

## 🎉 Acknowledgments

- [Next.js](https://nextjs.org) - React framework
- [Supabase](https://supabase.com) - Backend as a Service
- [Stripe](https://stripe.com) - Payment processing
- [TailwindCSS](https://tailwindcss.com) - Utility-first CSS
- [Framer Motion](https://framer.com/motion) - Animation library

---

Built with ❤️ by the Kaylie Labs team
