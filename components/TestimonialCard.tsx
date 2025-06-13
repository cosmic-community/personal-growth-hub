import { Star } from 'lucide-react';
import { Card } from './ui/Card';

interface TestimonialMetadata {
  customer_name: string;
  review_text: string;
  rating?: { key: string; value: string } | number;
  product?: any;
  location?: string;
  is_featured?: boolean;
  photo?: {
    imgix_url: string;
  };
}

interface Testimonial {
  metadata: TestimonialMetadata;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  // Handle rating conversion from Cosmic select-dropdown format to number
  const getRatingValue = (rating?: { key: string; value: string } | number): number => {
    if (typeof rating === 'number') {
      return rating;
    }
    if (rating && typeof rating === 'object' && 'value' in rating) {
      return parseInt(rating.value) || 5;
    }
    return 5;
  };

  return (
    <Card className="p-6 h-full flex flex-col">
      <div className="flex items-center mb-4">
        {renderStars(getRatingValue(testimonial.metadata.rating))}
      </div>
      
      <blockquote className="flex-1 mb-4">
        <p className="text-muted-foreground italic">
          "{testimonial.metadata.review_text}"
        </p>
      </blockquote>
      
      <div className="flex items-center">
        {testimonial.metadata.photo?.imgix_url && (
          <img
            src={`${testimonial.metadata.photo.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
            alt={testimonial.metadata.customer_name}
            className="w-10 h-10 rounded-full mr-3 object-cover"
          />
        )}
        <div>
          <div className="font-semibold text-sm">
            {testimonial.metadata.customer_name}
          </div>
          {testimonial.metadata.location && (
            <div className="text-xs text-muted-foreground">
              {testimonial.metadata.location}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}