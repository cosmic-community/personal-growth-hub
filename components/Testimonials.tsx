import TestimonialCard from './TestimonialCard';
import type { Review } from '@/types';

interface TestimonialsProps {
  testimonials: Review[];
  showAll?: boolean;
}

export default function Testimonials({ testimonials, showAll = false }: TestimonialsProps) {
  const displayTestimonials = showAll ? testimonials : testimonials.slice(0, 6);

  return (
    <section className="py-20">
      <div className="container-width section-padding">
        {!showAll && (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real stories from people who have transformed their lives with our resources
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id || index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}