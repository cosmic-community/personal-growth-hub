// app/products/[slug]/page.tsx
import { getProduct, getFeaturedReviews } from '@/lib/cosmic';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Star, CheckCircle, Download, Shield } from 'lucide-react';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.title} - Personal Growth Hub`,
    description: product.metadata?.short_description || product.metadata?.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const [product, reviews] = await Promise.all([
    getProduct(slug),
    getFeaturedReviews(),
  ]);

  if (!product) {
    notFound();
  }

  const regularPrice = product.metadata?.regular_price || 0;
  const salePrice = product.metadata?.sale_price;
  const hasDiscount = salePrice && salePrice < regularPrice;
  const imageUrl = product.metadata?.product_image?.imgix_url;
  const categoryName = typeof product.metadata?.category === 'object' 
    ? product.metadata.category.title 
    : '';

  return (
    <div className="min-h-screen bg-white">
      <div className="container-width section-padding py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            {imageUrl ? (
              <div className="aspect-square overflow-hidden rounded-2xl bg-secondary-50">
                <img
                  src={`${imageUrl}?w=800&h=800&fit=crop&auto=format,compress`}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="aspect-square bg-secondary-100 rounded-2xl flex items-center justify-center">
                <span className="text-secondary-400">No image available</span>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {categoryName && (
              <span className="text-sm text-primary-600 font-medium uppercase tracking-wide">
                {categoryName}
              </span>
            )}

            <h1 className="text-3xl md:text-4xl font-bold text-secondary-900">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-secondary-600">(4.9) • 1,234 reviews</span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              {hasDiscount ? (
                <>
                  <span className="text-3xl font-bold text-primary-600">
                    ${salePrice}
                  </span>
                  <span className="text-xl text-secondary-400 line-through">
                    ${regularPrice}
                  </span>
                  <span className="bg-accent-500 text-white px-3 py-1 rounded-lg text-sm font-medium">
                    Save ${regularPrice - (salePrice || 0)}
                  </span>
                </>
              ) : (
                <span className="text-3xl font-bold text-secondary-900">
                  ${regularPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <div className="prose prose-secondary max-w-none">
              <div dangerouslySetInnerHTML={{ __html: product.metadata?.description || '' }} />
            </div>

            {/* Features */}
            <div className="space-y-2">
              <div className="flex items-center text-secondary-700">
                <CheckCircle size={16} className="mr-2 text-green-500" />
                <span>Instant download after purchase</span>
              </div>
              <div className="flex items-center text-secondary-700">
                <Download size={16} className="mr-2 text-green-500" />
                <span>Compatible with all devices</span>
              </div>
              <div className="flex items-center text-secondary-700">
                <Shield size={16} className="mr-2 text-green-500" />
                <span>30-day money-back guarantee</span>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-3">
              <button className="w-full btn-primary py-4 text-lg">
                Add to Cart - ${hasDiscount ? salePrice : regularPrice}
              </button>
              <button className="w-full btn-secondary py-4">
                Buy Now
              </button>
            </div>

            {/* Trust Badges */}
            <div className="text-center text-sm text-secondary-500">
              <p>Secure checkout • 256-bit SSL encryption • Money-back guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}