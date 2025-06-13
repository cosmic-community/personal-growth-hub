<!-- README_START -->
# TrueYou Therapy

A modern wellness and personal development platform inspired by BetterHelp's design, built with Next.js and powered by [Cosmic](https://www.cosmicjs.com). This application showcases digital products, educational resources, and tools for individual growth, relationship improvement, and youth development.

![TrueYou Therapy Banner](https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop&auto=format,compress)

## ✨ Features

- **Product Categories**: Browse resources by Individual Coaching, Relationship Tools, and Youth Resources
- **Digital Product Showcase**: Complete product catalog with detailed descriptions and pricing
- **Blog & Resources**: Educational content and self-care guides
- **Customer Reviews**: Social proof with featured testimonials
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **TypeScript**: Full type safety and development experience
- **Optimized Images**: Automatic image optimization with imgix
- **SEO Friendly**: Meta tags and structured data

## Clone this Bucket

## Clone this Bucket

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket to get started instantly:

[![Clone this Bucket](https://img.shields.io/badge/Clone%20this%20Bucket-4F46E5?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=my-ai-dashboard-project-production)

## 🛠 Technologies Used

- **Framework**: Next.js 15 with App Router
- **Content Management**: [Cosmic](https://www.cosmicjs.com) headless CMS
- **Styling**: Tailwind CSS with custom design system
- **Language**: TypeScript for type safety
- **Images**: Optimized with imgix integration
- **Icons**: Lucide React icon library
- **Deployment**: Vercel-ready configuration

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd trueyou-therapy
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Cosmic credentials:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. **Run the development server**
   ```bash
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📚 Cosmic SDK Examples

### Fetching Products with Categories
```typescript
import { cosmic } from '@/lib/cosmic'

// Get all products with category data
const products = await cosmic.objects
  .find({ type: 'products' })
  .props(['title', 'slug', 'metadata'])
  .depth(1)

// Access category information
products.objects.forEach(product => {
  console.log(product.metadata.category.title)
  console.log(product.metadata.category.metadata.background_color)
})
```

### Fetching Blog Posts
```typescript
// Get recent blog posts
const blogPosts = await cosmic.objects
  .find({ type: 'blog-posts' })
  .props(['title', 'slug', 'metadata'])
  .sort('-created_at')
  .limit(6)
```

### Fetching Reviews with Product Data
```typescript
// Get featured reviews with product information
const reviews = await cosmic.objects
  .find({ 
    type: 'reviews',
    'metadata.is_featured': true 
  })
  .depth(1)
```

## 🔧 Cosmic CMS Integration

This application uses [Cosmic](https://www.cosmicjs.com) as a headless CMS with the following content structure:

- **Products**: Digital wellness products with categories, pricing, and images
- **Product Categories**: Organized by Individual, Couples, and Youth resources  
- **Blog Posts**: Educational content and self-care articles
- **Reviews**: Customer testimonials with ratings and product references
- **Pages**: Static content like About Us, Contact, etc.

The integration includes:
- Server-side data fetching for optimal performance
- Proper error handling for missing content
- Image optimization with imgix parameters
- TypeScript interfaces matching your content model

## 🚀 Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Netlify
1. Build command: `bun run build`
2. Publish directory: `.next`
3. Add environment variables in Netlify dashboard

### Environment Variables for Production
Set these in your hosting platform:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY` 
- `COSMIC_WRITE_KEY`

For more information on deployment and CMS integration, visit the [Cosmic documentation](https://www.cosmicjs.com/docs).
<!-- README_END -->