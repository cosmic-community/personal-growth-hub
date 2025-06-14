import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  Heart, 
  Users, 
  Target, 
  Award, 
  MapPin, 
  Clock, 
  DollarSign,
  Briefcase,
  GraduationCap,
  Coffee,
  Zap,
  Globe
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers - TrueYou Therapy',
  description: 'Join our mission to make mental health support accessible to everyone. Explore career opportunities at TrueYou Therapy.',
};

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, mental health support, and wellness stipends'
  },
  {
    icon: Clock,
    title: 'Flexible Schedule',
    description: 'Work-life balance with flexible hours and unlimited PTO policy'
  },
  {
    icon: GraduationCap,
    title: 'Professional Growth',
    description: 'Continuing education budget, conference attendance, and career development'
  },
  {
    icon: Coffee,
    title: 'Great Culture',
    description: 'Collaborative environment with team events and supportive colleagues'
  },
  {
    icon: DollarSign,
    title: 'Competitive Pay',
    description: 'Market-competitive salaries with performance bonuses and equity options'
  },
  {
    icon: Globe,
    title: 'Remote First',
    description: 'Work from anywhere with optional co-working space stipends'
  }
];

const openPositions = [
  {
    id: 1,
    title: 'Licensed Clinical Therapist',
    department: 'Clinical Team',
    location: 'Remote',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Join our clinical team to provide individual consultations and develop therapeutic content. Must be licensed in at least one US state.',
    requirements: [
      'Licensed Clinical Social Worker (LCSW), Licensed Professional Counselor (LPC), or similar',
      'Minimum 3 years of clinical experience',
      'Experience with telehealth platforms',
      'Strong communication and technology skills'
    ]
  },
  {
    id: 2,
    title: 'Content Creator - Mental Health',
    department: 'Content Team',
    location: 'Remote',
    type: 'Full-time',
    experience: '2+ years',
    description: 'Create engaging educational content including video courses, articles, and interactive materials for our digital platform.',
    requirements: [
      'Master\'s degree in Psychology, Social Work, or related field',
      'Experience creating digital content',
      'Video production and editing skills preferred',
      'Understanding of evidence-based therapeutic approaches'
    ]
  },
  {
    id: 3,
    title: 'Product Manager',
    department: 'Product Team',
    location: 'Remote / San Francisco',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Lead product strategy and development for our digital mental health platform, working closely with clinical and engineering teams.',
    requirements: [
      '4+ years of product management experience',
      'Experience with healthcare or mental health products preferred',
      'Strong analytical and user research skills',
      'Technical background with ability to work with engineering teams'
    ]
  },
  {
    id: 4,
    title: 'UX Designer',
    department: 'Design Team',
    location: 'Remote',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Design intuitive and accessible user experiences for our mental health platform, ensuring our tools are both effective and easy to use.',
    requirements: [
      '3+ years of UX design experience',
      'Portfolio demonstrating healthcare or wellness design work',
      'Proficiency in Figma, Sketch, or similar tools',
      'Understanding of accessibility standards'
    ]
  },
  {
    id: 5,
    title: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'Remote',
    type: 'Full-time',
    experience: '2+ years',
    description: 'Support our users throughout their journey, ensuring they get maximum value from our platform and resources.',
    requirements: [
      '2+ years in customer success or support',
      'Experience with SaaS or subscription products',
      'Excellent communication and empathy skills',
      'Background in mental health or wellness preferred'
    ]
  },
  {
    id: 6,
    title: 'Marketing Specialist',
    department: 'Marketing Team',
    location: 'Remote',
    type: 'Full-time',
    experience: '2+ years',
    description: 'Develop and execute marketing campaigns to raise awareness about mental health resources and grow our community.',
    requirements: [
      '2+ years of digital marketing experience',
      'Experience with content marketing and social media',
      'Understanding of healthcare marketing regulations',
      'Analytics and performance measurement skills'
    ]
  }
];

const values = [
  {
    icon: Heart,
    title: 'Compassion First',
    description: 'We lead with empathy and understanding in everything we do'
  },
  {
    icon: Users,
    title: 'Inclusive Community',
    description: 'We celebrate diversity and create belonging for everyone'
  },
  {
    icon: Target,
    title: 'Impact Driven',
    description: 'We measure success by the positive change we create'
  },
  {
    icon: Zap,
    title: 'Continuous Growth',
    description: 'We embrace learning and adapt to serve our mission better'
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-teal-600/5 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Mission to 
              <span className="gradient-text block mt-2">Transform Mental Health</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Help us make professional mental health support accessible, affordable, and effective for everyone. 
              Build a career that truly makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="amber">
                View Open Positions
              </Button>
              <Button size="lg" variant="outline">
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide how we work, make decisions, and treat each other every day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We believe in taking care of our team so you can do your best work and live your best life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to make an impact? Explore our current openings and find your next career opportunity.
            </p>
          </div>
          
          <div className="space-y-6">
            {openPositions.map((position) => (
              <Card key={position.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Briefcase size={14} />
                        <span>{position.department}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award size={14} />
                        <span>{position.experience}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="mt-4 lg:mt-0" variant="outline">
                    Apply Now
                  </Button>
                </div>
                
                <p className="text-muted-foreground mb-4">{position.description}</p>
                
                <div>
                  <h4 className="font-semibold mb-2">Key Requirements:</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {position.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
          
          {openPositions.length === 0 && (
            <Card className="p-12 text-center">
              <Briefcase className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Open Positions Right Now</h3>
              <p className="text-muted-foreground mb-6">
                We're not actively hiring at the moment, but we're always interested in meeting talented people.
              </p>
              <Button variant="outline">
                Submit Your Resume
              </Button>
            </Card>
          )}
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Hiring Process</h2>
              <p className="text-xl text-muted-foreground">
                We believe in a fair, transparent hiring process that helps us get to know each other.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Application</h3>
                <p className="text-sm text-muted-foreground">
                  Submit your resume and cover letter through our application portal.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Screening</h3>
                <p className="text-sm text-muted-foreground">
                  Phone or video screening with our talent team to discuss your background.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Interviews</h3>
                <p className="text-sm text-muted-foreground">
                  Meet with team members and hiring managers to explore fit and skills.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Decision</h3>
                <p className="text-sm text-muted-foreground">
                  We'll make a decision and provide feedback within one week.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join us in our mission to make mental health support accessible to everyone. 
              Your skills and passion can help transform lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="amber">
                Browse Open Positions
              </Button>
              <Button size="lg" variant="outline">
                Contact Our Team
              </Button>
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Don't see the right role?</strong> We're always interested in connecting with talented people. 
                Send us your resume at careers@trueyoutherapy.com and tell us how you'd like to contribute.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}