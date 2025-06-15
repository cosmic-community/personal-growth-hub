import { Metadata } from 'next';
import { generateSEOMetadata } from '@/lib/seo';
import { getStructuredData } from '@/lib/structured-data';

export async function generateMetadata(): Promise<Metadata> {
  return generateSEOMetadata({
    title: 'Our Mission - TrueYou Therapy',
    description: 'Our mission is to democratize access to professional mental health resources and empower individuals worldwide to achieve lasting personal growth and emotional wellness.',
    path: '/about/mission',
    type: 'website'
  });
}

export default function MissionPage() {
  const structuredData = getStructuredData({
    type: 'organization',
    title: 'Our Mission - TrueYou Therapy',
    description: 'Democratizing access to professional mental health resources and empowering personal growth worldwide.',
    url: '/about/mission'
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-teal-600 to-amber-600 bg-clip-text text-transparent mb-6">
              Our Mission
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Democratizing access to professional mental health resources and empowering personal growth worldwide
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-teal-500 to-amber-500 rounded-2xl p-1 mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-amber-600 bg-clip-text text-transparent">
                  Our Core Mission
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  To make professional-grade mental health resources accessible, affordable, and effective for everyone, 
                  regardless of their location, background, or circumstances. We believe that personal growth and 
                  emotional wellness are fundamental human rights, not privileges.
                </p>
              </div>
            </div>

            {/* Mission Pillars */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">🌍</span>
                </div>
                <h3 className="text-2xl font-bold text-teal-600 mb-4">Universal Access</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Breaking down barriers of geography, cost, and availability to ensure that high-quality mental 
                  health resources reach every corner of the globe. No one should be denied the opportunity for 
                  personal growth due to external circumstances.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-amber-600 mb-4">Empowerment</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Providing individuals with the tools, knowledge, and confidence to take control of their mental 
                  wellness journey. We believe in empowering people to become active participants in their own 
                  healing and growth process.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Professional Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Maintaining the highest standards of quality by ensuring all our resources are developed, 
                  reviewed, and approved by licensed mental health professionals. Excellence is not negotiable 
                  when it comes to mental wellness.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">💡</span>
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-4">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Continuously evolving our platform and resources to incorporate the latest research in psychology, 
                  neuroscience, and digital therapeutics. We stay at the forefront of mental health innovation 
                  to serve our community better.
                </p>
              </div>
            </div>

            {/* Vision for the Future */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-12">
              <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-teal-600 to-amber-600 bg-clip-text text-transparent">
                Our Vision for the Future
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  We envision a world where mental health support is as accessible as physical healthcare, 
                  where stigma around mental wellness is eliminated, and where every individual has the 
                  tools they need to thrive emotionally and psychologically.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Our future includes expanding our reach to underserved communities, developing AI-powered 
                  personalization features, and creating immersive virtual reality therapeutic experiences. 
                  We're committed to leveraging technology to make mental health support more effective and engaging.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Most importantly, we aim to foster a global community where individuals support each other's 
                  growth, share their experiences, and celebrate the journey of becoming their truest selves.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-teal-500 to-amber-500 rounded-2xl p-1">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-amber-600 bg-clip-text text-transparent">
                  Join Our Mission
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Be part of a movement that's transforming how the world approaches mental health and personal growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/products"
                    className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Explore Our Resources
                  </a>
                  <a
                    href="/contact"
                    className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Get Involved
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}