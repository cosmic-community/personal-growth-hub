import { getPage } from '@/lib/cosmic';
import { Metadata } from 'next';
import { Page } from '@/types';
import { generateSEOMetadata } from '@/lib/seo';
import { getStructuredData } from '@/lib/structured-data';

export async function generateMetadata(): Promise<Metadata> {
  return generateSEOMetadata({
    title: 'About Us - TrueYou Therapy',
    description: 'Learn about our mission to make professional-grade personal development resources accessible to everyone. Our story, values, and commitment to your growth.',
    path: '/about',
    type: 'website'
  });
}

export default async function AboutPage() {
  let aboutPage: Page | null = null;

  try {
    aboutPage = await getPage('about-us');
  } catch (error) {
    console.log('About page not found in Cosmic, using default content');
  }

  const structuredData = getStructuredData({
    type: 'organization',
    title: 'About TrueYou Therapy',
    description: 'Professional therapeutic resources and personalized consultation services for personal growth and mental wellness.',
    url: '/about'
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 py-16">
          {aboutPage ? (
            <>
              <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-600 to-amber-600 bg-clip-text text-transparent mb-6">
                  {aboutPage.metadata?.title || aboutPage.title}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Discover our story and commitment to your personal growth journey
                </p>
              </div>
              <div className="prose prose-lg prose-teal dark:prose-invert max-w-4xl mx-auto">
                <div dangerouslySetInnerHTML={{ __html: aboutPage.metadata?.content || '' }} />
              </div>
            </>
          ) : (
            <>
              <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-600 to-amber-600 bg-clip-text text-transparent mb-6">
                  About TrueYou Therapy
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Empowering personal growth through professional therapeutic resources and personalized guidance
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                    <h2 className="text-3xl font-bold text-teal-600 mb-6">Our Story</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Founded with a passion for making professional-grade mental health resources accessible to everyone, 
                      TrueYou Therapy emerged from the recognition that personal growth shouldn't be limited by geography, 
                      cost, or availability.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      What started as a small collection of therapeutic tools has evolved into a comprehensive platform 
                      offering video series, personalized consultations, and evidence-based resources created by licensed professionals.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                    <h2 className="text-3xl font-bold text-amber-600 mb-6">Our Vision</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      We envision a world where everyone has access to the tools and support they need to thrive mentally 
                      and emotionally. Our platform bridges the gap between professional therapy and self-help resources.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Through innovative digital solutions and personalized guidance, we're making mental wellness 
                      more accessible, affordable, and effective for people from all walks of life.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-teal-500 to-amber-500 rounded-2xl p-1 mb-16">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8">
                    <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-teal-600 to-amber-600 bg-clip-text text-transparent">
                      Our Core Values
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">🎯</span>
                        </div>
                        <h3 className="font-bold text-teal-600 mb-2">Quality</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Every resource is reviewed and approved by licensed mental health professionals
                        </p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">🤝</span>
                        </div>
                        <h3 className="font-bold text-amber-600 mb-2">Accessibility</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Affordable pricing and flexible formats make growth resources available to all
                        </p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">🔒</span>
                        </div>
                        <h3 className="font-bold text-blue-600 mb-2">Privacy</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Your personal growth journey remains completely confidential and secure
                        </p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">💪</span>
                        </div>
                        <h3 className="font-bold text-green-600 mb-2">Support</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Ongoing guidance and community support throughout your journey
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-amber-600 bg-clip-text text-transparent">
                    Join Our Community
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                    Join thousands of individuals who have transformed their lives with our professional resources. 
                    Whether you're beginning your personal growth journey or looking to deepen your practice, 
                    we're here to support you every step of the way.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-teal-600 mb-2">10,000+</div>
                      <div className="text-gray-600 dark:text-gray-300">People Helped</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-amber-600 mb-2">95%</div>
                      <div className="text-gray-600 dark:text-gray-300">Satisfaction Rate</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                      <div className="text-gray-600 dark:text-gray-300">Professional Resources</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}