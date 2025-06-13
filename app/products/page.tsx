import { getProducts, getProductCategories } from '@/lib/cosmic';
import { Metadata } from 'next';
import ProductGrid from '@/components/ProductGrid';
import CategoryFilter from '@/components/CategoryFilter';

export const metadata: Metadata = {
  title: 'Digital Products - TrueYou Therapy',
  description: 'Browse our complete collection of professional digital resources for personal development, relationship improvement, and therapeutic growth.',
};

// Define interfaces for static products
interface StaticProduct {
  id: string;
  title: string;
  slug: string;
  content: string;
  metadata: {
    price: number;
    description: string;
    category: string;
    image: {
      imgix_url: string;
    };
    features: string[];
  };
}

// Static products data
const staticProducts: StaticProduct[] = [
  {
    id: 'video-series-5hr',
    title: '5-Hour Video Series: Transform Your Inner Voice',
    slug: 'transform-your-inner-voice-video-series',
    content: '',
    metadata: {
      price: 95,
      description: 'A comprehensive 5-hour video series designed to help you identify, challenge, and transform your inner critic into your greatest ally. This professionally crafted program includes guided exercises, real-life examples, and practical techniques you can implement immediately. Perfect for anyone looking to break free from self-limiting beliefs and develop a healthier relationship with themselves.',
      category: 'Self-Development',
      image: {
        imgix_url: 'https://imgix.cosmicjs.com/video-series-placeholder'
      },
      features: [
        '5 hours of professional video content',
        'Downloadable workbook and exercises',
        'Lifetime access to materials',
        'Mobile-friendly streaming',
        'Certificate of completion'
      ]
    }
  },
  {
    id: 'one-on-one-call',
    title: '1-on-1 Therapeutic Consultation Call',
    slug: 'one-on-one-consultation-call',
    content: '',
    metadata: {
      price: 145,
      description: 'A personalized 60-minute one-on-one consultation session with a licensed therapist. This confidential session is tailored to your specific needs and goals, providing professional guidance, therapeutic techniques, and a customized action plan. Ideal for those seeking individual attention and expert support in their personal growth journey.',
      category: 'Consultation',
      image: {
        imgix_url: 'https://imgix.cosmicjs.com/consultation-call-placeholder'
      },
      features: [
        '60-minute private session',
        'Licensed therapist consultation',
        'Personalized action plan',
        'Follow-up email summary',
        'Flexible scheduling options',
        'Secure video platform'
      ]
    }
  }
];

export default async function ProductsPage() {
  let cosmicProducts: any[] = [];
  let categories: any[] = [];
  
  try {
    const [fetchedProducts, fetchedCategories] = await Promise.all([
      getProducts(),
      getProductCategories(),
    ]);
    cosmicProducts = fetchedProducts;
    categories = fetchedCategories;
  } catch (error) {
    console.error('Error fetching Cosmic data:', error);
    // Continue with static products only if Cosmic fails
  }

  // Combine static products with Cosmic products
  const allProducts = [...staticProducts, ...cosmicProducts];

  return (
    <div className="min-h-screen bg-secondary-50 py-12">
      <div className="container-width section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Digital Products
          </h1>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Professional therapeutic resources and personalized consultation services
          </p>
        </div>

        {/* Featured Products Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
            Featured Offerings
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {staticProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      {product.id === 'video-series-5hr' ? (
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8 5v10l8-5-8-5z"/>
                        </svg>
                      ) : (
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                        </svg>
                      )}
                    </div>
                    <p className="text-primary-600 font-semibold">
                      {product.metadata.category}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-secondary-600 mb-4 leading-relaxed">
                    {product.metadata.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-secondary-800 mb-2">What's Included:</h4>
                    <ul className="space-y-1">
                      {product.metadata.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-secondary-600">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary-600">
                      ${product.metadata.price}
                    </div>
                    <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                      {product.id === 'one-on-one-call' ? 'Book Session' : 'Get Access'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter - only show if we have Cosmic categories */}
        {categories.length > 0 && <CategoryFilter categories={categories} />}

        {/* Products Grid - only show if we have Cosmic products */}
        {cosmicProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
              Additional Resources
            </h2>
            <ProductGrid products={cosmicProducts} />
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
            Choose the option that best fits your needs. Whether you prefer self-paced learning or personalized guidance, we're here to support your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Browse All Products
            </button>
            <button className="border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}