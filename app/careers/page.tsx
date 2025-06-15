import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';
import { generateStructuredData } from '@/lib/structured-data';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: 'Careers - TrueYou Therapy',
    description: 'Join our mission to make professional mental health resources accessible worldwide. Explore career opportunities with our growing team of licensed professionals.',
    path: '/careers',
    type: 'website'
  });
}

export default function CareersPage() {
  const structuredData = generateStructuredData({
    type: 'organization',
    title: 'Careers - TrueYou Therapy',
    description: 'Career opportunities in mental health, therapy, and digital wellness technology.',
    url: '/careers'
  });

  const openPositions = [
    {
      title: 'Senior Licensed Therapist',
      department: 'Clinical Team',
      location: 'Remote (US)',
      type: 'Full-time',
      description: 'Lead content development for our video therapy series and provide clinical oversight for new therapeutic resources.',
      requirements: [
        'Ph.D. or Master\'s in Psychology, Counseling, or related field',
        'Current license in good standing (LMFT, LCSW, LPC, or equivalent)',
        '5+ years of clinical experience',
        'Experience with digital mental health platforms preferred',
        'Strong communication and presentation skills'
      ],
      responsibilities: [
        'Develop and review therapeutic content and resources',
        'Create video-based therapy modules and presentations',
        'Provide clinical supervision and guidance to junior team members',
        'Collaborate with research team on evidence-based interventions',
        'Participate in user feedback analysis and product improvement'
      ]
    },
    {
      title: 'UX/UI Designer - Mental Health Focus',
      department: 'Product & Design',
      location: 'Remote (Global)',
      type: 'Full-time',
      description: 'Design intuitive, accessible interfaces for our mental health platform with a focus on user empathy and therapeutic outcomes.',
      requirements: [
        'Bachelor\'s degree in Design, HCI, or related field',
        '3+ years of UX/UI design experience',
        'Experience designing for healthcare or mental health applications',
        'Proficiency in Figma, Sketch, or similar design tools',
        'Understanding of accessibility standards and inclusive design'
      ],
      responsibilities: [
        'Design user-centered interfaces for therapeutic tools and resources',
        'Conduct user research and usability testing with mental health focus',
        'Create design systems that support therapeutic goals',
        'Collaborate with clinical team to ensure designs support user wellbeing',
        'Develop prototypes and interactive mockups for new features'
      ]
    },
    {
      title: 'Content Marketing Specialist',
      department: 'Marketing & Outreach',
      location: 'Remote (US)',
      type: 'Full-time',
      description: 'Create compelling, educational content that destigmatizes mental health and promotes our therapeutic resources.',
      requirements: [
        'Bachelor\'s degree in Marketing, Communications, Psychology, or related field',
        '2+ years of content marketing experience',
        'Understanding of mental health topics and sensitivity required',
        'Experience with SEO, social media, and email marketing',
        'Excellent writing and communication skills'
      ],
      responsibilities: [
        'Develop content strategy for blog, social media, and email campaigns',
        'Create educational content about mental health and personal growth',
        'Collaborate with clinical team to ensure content accuracy',
        'Manage social media presence and community engagement',
        'Track and analyze content performance metrics'
      ]
    },
    {
      title: 'Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote (Global)',
      type: 'Full-time',
      description: 'Build and maintain our digital platform, ensuring security, scalability, and user privacy in mental health applications.',
      requirements: [
        'Bachelor\'s degree in Computer Science or equivalent experience',
        '4+ years of full-stack development experience',
        'Experience with React, Node.js, and modern web technologies',
        'Understanding of healthcare data privacy (HIPAA compliance preferred)',
        'Experience with cloud platforms (AWS, Azure, or GCP)'
      ],
      responsibilities: [
        'Develop and maintain web applications and APIs',
        'Implement security measures for sensitive mental health data',
        'Collaborate with UX team to create seamless user experiences',
        'Optimize platform performance and scalability',
        'Participate in code reviews and maintain development best practices'
      ]
    },
    {
      title: 'Research Coordinator',
      department: 'Research & Development',
      location: 'Remote (US)',
      type: 'Full-time',
      description: 'Coordinate research initiatives to validate the effectiveness of our digital therapeutic interventions.',
      requirements: [
        'Master\'s degree in Psychology, Public Health, or related field',
        '2+ years of research experience, preferably in mental health',
        'Experience with statistical analysis software (R, SPSS, or similar)',
        'Knowledge of research ethics and IRB processes',
        'Strong organizational and project management skills'
      ],
      responsibilities: [
        'Design and coordinate research studies on digital therapeutics',
        'Analyze user data and therapeutic outcomes',
        'Prepare research reports and presentations',
        'Ensure compliance with research ethics and privacy regulations',
        'Collaborate with academic partners and research institutions'
      ]
    },
    {
      title: 'Customer Success Specialist',
      department: 'Customer Experience',
      location: 'Remote (US)',
      type: 'Full-time',
      description: 'Provide empathetic support to users on their personal growth journey and help them maximize the value of our resources.',
      requirements: [
        'Bachelor\'s degree preferred, with background in psychology or counseling helpful',
        '2+ years of customer service or support experience',
        'Excellent communication and active listening skills',
        'Experience with mental health or wellness industry preferred',
        'Ability to handle sensitive conversations with empathy and professionalism'
      ],
      responsibilities: [
        'Provide personalized support to users via email, chat, and phone',
        'Help users navigate resources and maximize therapeutic benefits',
        'Collect and analyze user feedback for product improvement',
        'Develop support documentation and resources',
        'Collaborate with clinical team on user safety protocols'
      ]
    }
  ];

  const benefits = [
    {
      icon: '💰',
      title: 'Competitive Compensation',
      description: 'Market-rate salaries with performance bonuses and equity options for full-time employees.'
    },
    {
      icon: '🏥',
      title: 'Comprehensive Health Benefits',
      description: 'Full medical, dental, and vision coverage, plus mental health benefits and wellness stipends.'
    },
    {
      icon: '🌍',
      title: 'Remote-First Culture',
      description: 'Work from anywhere with flexible hours and a results-oriented culture that values work-life balance.'
    },
    {
      icon: '📚',
      title: 'Professional Development',
      description: 'Annual learning budget, conference attendance, and continuing education support for licensed professionals.'
    },
    {
      icon: '🎯',
      title: 'Mission-Driven Work',
      description: 'Make a meaningful impact on mental health accessibility while working with a passionate, purpose-driven team.'
    },
    {
      icon: '⏰',
      title: 'Flexible PTO',
      description: 'Unlimited paid time off policy with mandatory mental health days and sabbatical opportunities.'
    }
  ];

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
              Join Our Mission
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Help us make professional mental health resources accessible to everyone. 
              Build your career while making a meaningful impact on people's lives.
            </p>
          </div>

          {/* Company Culture */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-teal-500 to-amber-500 rounded-2xl p-1">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-teal-600 to-amber-600 bg-clip-text text-transparent">
                  Why Work With Us?
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-teal-600 mb-4">Our Values</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="flex items-center"><span className="mr-2">🎯</span> Impact-driven work that changes lives</li>
                      <li className="flex items-center"><span className="mr-2">🤝</span> Collaborative, supportive team environment</li>
                      <li className="flex items-center"><span className="mr-2">🌱</span> Continuous learning and growth opportunities</li>
                      <li className="flex items-center"><span className="mr-2">💙</span> Emphasis on employee mental health and wellbeing</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-600 mb-4">Our Culture</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="flex items-center"><span className="mr-2">🚀</span> Innovation and creative problem-solving</li>
                      <li className="flex items-center"><span className="mr-2">🏡</span> Remote-first with flexible working arrangements</li>
                      <li className="flex items-center"><span className="mr-2">🎨</span> Diversity, equity, and inclusion at our core</li>
                      <li className="flex items-center"><span className="mr-2">⚖️</span> Work-life balance and mental health support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-teal-600 to-amber-600 bg-clip-text text-transparent">
              Benefits & Perks
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="text-3xl mb-4">{benefit.icon}</div>
                  <h3 className="font-bold text-gray-800 dark:text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-teal-600 to-amber-600 bg-clip-text text-transparent">
              Open Positions
            </h2>
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 text-sm">
                        <span className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-3 py-1 rounded-full">
                          {position.department}
                        </span>
                        <span className="bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 px-3 py-1 rounded-full">
                          {position.location}
                        </span>
                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                      Apply Now
                    </button>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{position.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white mb-3">Requirements:</h4>
                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2 text-teal-600">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white mb-3">Responsibilities:</h4>
                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        {position.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2 text-amber-600">•</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Application Process */}
          <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-teal-600 to-amber-600 bg-clip-text text-transparent">
              Application Process
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal-600">1</span>
                </div>
                <h3 className="font-bold mb-2">Apply</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Submit your application with resume and cover letter</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-600">2</span>
                </div>
                <h3 className="font-bold mb-2">Screen</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Initial phone/video screening with our team</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="font-bold mb-2">Interview</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">In-depth interviews with team members</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">4</span>
                </div>
                <h3 className="font-bold mb-2">Join</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Welcome to the team! Begin your onboarding</p>
              </div>
            </div>
          </div>

          {/* Contact for General Inquiries */}
          <div className="mt-16 text-center bg-gradient-to-r from-teal-500 to-amber-500 rounded-2xl p-1 max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-amber-600 bg-clip-text text-transparent">
                Don't See Your Role?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We're always looking for talented individuals who share our mission. 
                Send us your resume and tell us how you'd like to contribute.
              </p>
              <a
                href="mailto:careers@trueyoutherapy.com"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}