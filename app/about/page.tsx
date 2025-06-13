import { getPage } from '@/lib/cosmic';
import { Metadata } from 'next';
import { Page } from '@/types';

export const metadata: Metadata = {
  title: 'About Us - Personal Growth Hub',
  description: 'Learn about our mission to make professional-grade personal development resources accessible to everyone.',
};

export default async function AboutPage() {
  let aboutPage: Page | null = null;

  try {
    aboutPage = await getPage('about-us');
  } catch (error) {
    // Handle case where page doesn't exist in Cosmic
    console.log('About page not found in Cosmic, using default content');
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container-width section-padding py-12">
        {aboutPage ? (
          <>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-8 text-center">
              {aboutPage.metadata?.title || aboutPage.title}
            </h1>
            <div className="prose prose-lg prose-secondary dark:prose-invert max-w-4xl mx-auto">
              <div dangerouslySetInnerHTML={{ __html: aboutPage.metadata?.content || '' }} />
            </div>
          </>
        ) : (
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-8">
              About Our Mission
            </h1>
            <div className="prose prose-lg prose-secondary dark:prose-invert max-w-4xl mx-auto">
              <p>
                We believe everyone deserves access to high-quality resources for personal growth and well-being. 
                Our digital products are created by licensed professionals and based on proven therapeutic techniques.
              </p>
              <h2>Our Story</h2>
              <p>
                Founded in 2020, we started with a simple goal: make professional-grade self-help resources 
                accessible to everyone. What began as a small collection of worksheets has grown into a 
                comprehensive library of courses, tools, and resources.
              </p>
              <h2>Our Values</h2>
              <ul>
                <li><strong>Quality:</strong> Every resource is reviewed by licensed professionals</li>
                <li><strong>Accessibility:</strong> Affordable pricing and multiple format options</li>
                <li><strong>Privacy:</strong> Your personal growth journey stays private</li>
                <li><strong>Support:</strong> We're here to help you succeed</li>
              </ul>
              <h2>Our Team</h2>
              <p>
                Our team consists of licensed therapists, certified coaches, and experienced content creators 
                who are passionate about mental health and personal development. We work together to ensure 
                every resource meets the highest standards of quality and effectiveness.
              </p>
              <h2>Join Our Community</h2>
              <p>
                Join thousands of people who have transformed their lives with our resources. Whether you're 
                just starting your personal growth journey or looking to deepen your practice, we're here 
                to support you every step of the way.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}