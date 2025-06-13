import { Star } from 'lucide-react';
import { Card } from './ui/Card';
import type { Review } from '@/types';

interface TestimonialCardProps {
  testimonial: Review;
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

  return (
    <Card className="p-6 h-full flex flex-col">
      <div className="flex items-center mb-4">
        {renderStars(testimonial.metadata.rating || 5)}
      </div>
      
      <blockquote className="flex-1 mb-4">
        <p className="text-muted-foreground italic">
          "{testimonial.metadata.review}"
        </p>
      </blockquote>
      
      <div className="flex items-center">
        {testimonial.metadata.photo?.imgix_url && (
          <img
            src={`${testimonial.metadata.photo.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
            alt={testimonial.metadata.name}
            className="w-10 h-10 rounded-full mr-3 object-cover"
          />
        )}
        <div>
          <div className="font-semibold text-sm">
            {testimonial.metadata.name}
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