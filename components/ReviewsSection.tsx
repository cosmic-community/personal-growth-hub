import { Star } from 'lucide-react';
import type { Review } from '@/types';

interface ReviewsSectionProps {
  reviews: Review[];
}

export default function ReviewsSection({ reviews }: ReviewsSectionProps) {
  if (!reviews || reviews.length === 0) {
    return null;
  }

  const renderStars = (rating: string) => {
    const numStars = parseInt(rating);
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < numStars ? "text-yellow-400 fill-current" : "text-secondary-300"} 
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            What Our Community Says
          </h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Join thousands who have transformed their lives with our resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="card">
              {/* Rating */}
              <div className="mb-4">
                {review.metadata?.rating && renderStars(review.metadata.rating.key)}
              </div>

              {/* Review Text */}
              <blockquote className="text-secondary-700 mb-6 italic">
                "{review.metadata?.review_text}"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-secondary-900">
                    {review.metadata?.customer_name}
                  </div>
                  {review.metadata?.location && (
                    <div className="text-sm text-secondary-500">
                      {review.metadata.location}
                    </div>
                  )}
                </div>

                {/* Product Reference */}
                {review.metadata?.product && (
                  <div className="text-right">
                    <div className="text-xs text-primary-600 font-medium">
                      {review.metadata.product.title}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">10,000+</div>
            <div className="text-secondary-600">Lives Transformed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">4.9/5</div>
            <div className="text-secondary-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
            <div className="text-secondary-600">Satisfaction Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
}