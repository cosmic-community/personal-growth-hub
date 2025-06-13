import { Metadata } from 'next';
import Testimonials from '@/components/Testimonials';
import { getFeaturedReviews } from '@/lib/cosmic';

export const metadata: Metadata = {
  title: 'Client Testimonials - TrueYou Therapy',
  description: 'Read success stories and testimonials from clients who have transformed their lives with TrueYou Therapy resources.',
};

export default async function TestimonialsPage() {
  const testimonials = await getFeaturedReviews();

  return (
    <div className="min-h-screen py-20">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Client Success Stories
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from real people who have transformed their lives with our professional therapy resources and guidance.
          </p>
        </div>
        
        <Testimonials testimonials={testimonials} showAll={true} />
      </div>
    </div>
  );
}