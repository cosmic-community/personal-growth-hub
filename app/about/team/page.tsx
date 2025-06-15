import { Metadata } from 'next';
import { generateSEOMetadata } from '@/lib/seo';
import { getStructuredData } from '@/lib/structured-data';

export async function generateMetadata(): Promise<Metadata> {
  return generateSEOMetadata({
    title: 'Our Team - TrueYou Therapy',
    description: 'Meet our team of licensed therapists, certified coaches, and mental health professionals dedicated to creating exceptional therapeutic resources.',
    path: '/about/team',
    type: 'website'
  });
}

export default function TeamPage() {
  const structuredData = getStructuredData({
    type: 'organization',
    title: 'Our Team - TrueYou Therapy',
    description: 'Licensed therapists, certified coaches, and mental health professionals creating exceptional therapeutic resources.',
    url: '/about/team'
  });

  const teamMembers = [
    {
      name: 'Dr. Sarah Williams',
      role: 'Founder & Clinical Director',
      credentials: 'Ph.D. in Clinical Psychology, Licensed Therapist',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&auto=format,compress',
      bio: 'With over 15 years of clinical experience, Dr. Williams specializes in cognitive behavioral therapy and trauma-informed care. She founded TrueYou Therapy to make evidence-based mental health resources accessible to everyone.',
      specialties: ['Cognitive Behavioral Therapy', 'Trauma Recovery', 'Anxiety Disorders']
    },
    {
      name: 'Marcus Chen',
      role: 'Lead Content Developer',
      credentials: 'M.S. in Counseling Psychology, Licensed Professional Counselor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format,compress',
      bio: 'Marcus brings 12 years of experience in developing therapeutic interventions and digital mental health tools. He leads our content creation team and ensures all resources meet the highest professional standards.',
      specialties: ['Digital Therapeutics', 'Mindfulness-Based Interventions', 'Relationship Counseling']
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Research & Development Director',
      credentials: 'Ph.D. in Psychology, Certified Life Coach',
      image: 'https://images.unsplash.com/photo-1594824163-3b9f27bd48f6?w=400&h=400&fit=crop&auto=format,compress',
      bio: 'Dr. Rodriguez oversees our research initiatives and ensures our content is backed by the latest scientific evidence. She has published numerous papers on digital mental health interventions and positive psychology.',
      specialties: ['Positive Psychology', 'Research Methodology', 'Stress Management']
    },
    {
      name: 'James Thompson',
      role: 'Senior Therapist & Video Series Creator',
      credentials: 'M.A. in Marriage & Family Therapy, Licensed Therapist',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop&auto=format,compress',
      bio: 'James creates and presents our video therapy series, bringing complex therapeutic concepts to life in accessible formats. His warm, engaging approach has helped thousands of individuals on their growth journey.',
      specialties: ['Family Systems Therapy', 'Communication Skills', 'Conflict Resolution']
    },
    {
      name: 'Dr. Aisha Patel',
      role: 'Cultural Diversity & Inclusion Specialist',
      credentials: 'Ph.D. in Multicultural Psychology, Licensed Therapist',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&auto=format,compress',
      bio: 'Dr. Patel ensures our resources are culturally sensitive and inclusive. She specializes in multicultural therapy approaches and works to make our content accessible to diverse communities worldwide.',
      specialties: ['Multicultural Therapy', 'Cultural Adaptation', 'Community Mental Health']
    },
    {
      name: 'Michael Foster',
      role: 'Technology & User Experience Director',
      credentials: 'M.S. in Human-Computer Interaction, UX Research Specialist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format,compress',
      bio: 'Michael leads our technology team and focuses on creating user-friendly, accessible digital experiences. He combines his background in psychology with technical expertise to build platforms that truly serve our users.',
      specialties: ['Digital Mental Health', 'User Experience Design', 'Accessibility Technology']
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
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our diverse team of licensed professionals is dedicated to creating exceptional therapeutic resources 
              and supporting your personal growth journey
            </p>
          </div>

          {/* Team Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-teal-600 mb-2">25+</div>
              <div className="text-gray-600 dark:text-gray-300">Team Members</div>
            </div>
            <div className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-amber-600 mb-2">150+</div>
              <div className="text-gray-600 dark:text-gray-300">Years Combined Experience</div>
            </div>
            <div className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
              <div className="text-gray-600 dark:text-gray-300">Licensed Therapists</div>
            </div>
            <div className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">8</div>
              <div className="text-gray-600 dark:text-gray-300">Specialized Areas</div>
            </div>
          </div>

          {/* Team Members */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-center mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-teal-600 font-semibold mb-1">{member.role}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{member.credentials}</p>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Values */}
          <div className="mt-16 bg-gradient-to-r from-teal-500 to-amber-500 rounded-2xl p-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-teal-600 to-amber-600 bg-clip-text text-transparent">
                What Drives Us
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <h3 className="font-bold text-teal-600 mb-2">Continuous Learning</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    We stay current with the latest research and continuously enhance our skills to provide 
                    the most effective resources possible.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💙</span>
                  </div>
                  <h3 className="font-bold text-amber-600 mb-2">Compassionate Care</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Every resource we create is infused with genuine care and understanding for the human 
                    experience and the courage it takes to grow.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌟</span>
                  </div>
                  <h3 className="font-bold text-blue-600 mb-2">Excellence</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    We hold ourselves to the highest standards, ensuring every piece of content meets 
                    professional therapeutic guidelines and ethical standards.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Join Our Team CTA */}
          <div className="mt-16 text-center bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-amber-600 bg-clip-text text-transparent">
              Join Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Are you a licensed mental health professional passionate about making therapeutic resources 
              more accessible? We'd love to hear from you.
            </p>
            <a
              href="/careers"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </div>
    </>
  );
}