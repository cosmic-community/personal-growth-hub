import { Metadata } from 'next';
import { Play, Clock, Users, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { cosmic } from '@/lib/cosmic';
import { Product, ProductCategory } from '@/types';

export const metadata: Metadata = {
  title: 'Video Series - TrueYou Therapy',
  description: 'Comprehensive video courses designed to help you grow and transform. Expert-led sessions with practical exercises and tools.',
};

interface VideoSeriesPageProps {}

async function getVideoSeries(): Promise<Product[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'products' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    // Filter for video series/courses
    const videoSeries = response.objects.filter((product: Product) => 
      product.metadata.name?.toLowerCase().includes('course') ||
      product.metadata.name?.toLowerCase().includes('series') ||
      product.metadata.description?.toLowerCase().includes('video')
    );
    
    return videoSeries;
  } catch (error) {
    console.error('Error fetching video series:', error);
    return [];
  }
}

export default async function VideoSeriesPage(): Promise<JSX.Element> {
  const videoSeries = await getVideoSeries();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <Play size={16} className="mr-2" />
              Video Learning Series
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Transform Your Life with 
              <span className="gradient-text block mt-2">Expert Video Courses</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Dive deep into professional-grade content with our comprehensive video series. 
              Learn at your own pace with structured lessons, practical exercises, and downloadable resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="amber">
                Browse All Courses
              </Button>
              <Button size="lg" variant="outline">
                Watch Preview
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert-Led Content</h3>
              <p className="text-muted-foreground">
                Learn from licensed professionals with years of experience in therapy and personal development.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Learn at Your Pace</h3>
              <p className="text-muted-foreground">
                Access your courses 24/7 and progress through lessons at a comfortable pace that works for you.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Practical Tools</h3>
              <p className="text-muted-foreground">
                Every course includes downloadable worksheets, exercises, and resources you can use immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Series Grid */}
      <section className="section-padding section-bg-slate">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Available Video Series</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our collection of comprehensive courses designed to support your personal growth journey.
            </p>
          </div>

          {videoSeries.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videoSeries.map((course) => (
                <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative bg-gradient-to-br from-primary/20 to-primary/10">
                    {course.metadata.product_image?.imgix_url ? (
                      <img
                        src={`${course.metadata.product_image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                        alt={course.metadata.name || course.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <Play className="w-16 h-16 text-primary/60" />
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      Video Course
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {course.metadata.category && typeof course.metadata.category === 'object' && (
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {course.metadata.category.metadata?.name || course.metadata.category.title}
                        </span>
                      )}
                      <div className="flex items-center text-amber-500">
                        <Star size={14} className="fill-current" />
                        <span className="text-sm ml-1">4.9</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{course.metadata.name || course.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {course.metadata.short_description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>4+ hours</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users size={14} />
                          <span>All levels</span>
                        </div>
                      </div>
                      <div className="text-right">
                        {course.metadata.sale_price ? (
                          <div>
                            <span className="text-sm text-muted-foreground line-through">
                              ${course.metadata.regular_price}
                            </span>
                            <div className="text-xl font-bold text-primary">
                              ${course.metadata.sale_price}
                            </div>
                          </div>
                        ) : (
                          <div className="text-xl font-bold text-primary">
                            ${course.metadata.regular_price}
                          </div>
                        )}
                      </div>
                    </div>
                    <Button className="w-full mt-4" variant="amber">
                      Enroll Now
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">New Courses Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                We're preparing amazing video content for you. Check back soon!
              </p>
              <Button variant="outline">
                Notify Me When Available
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">What You'll Learn</h2>
              <p className="text-xl text-muted-foreground">
                Our video courses cover essential skills and techniques for personal growth and well-being.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Evidence-based therapeutic techniques',
                'Practical communication strategies',
                'Stress management and coping skills',
                'Mindfulness and self-awareness practices',
                'Relationship building and maintenance',
                'Goal setting and achievement methods',
                'Emotional regulation techniques',
                'Self-care and wellness strategies',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding section-bg-emerald">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of people who have transformed their lives through our expert video courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="amber">
                Browse All Courses
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}