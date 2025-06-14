import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  Search, 
  MessageCircle, 
  Book, 
  Download, 
  CreditCard, 
  Shield,
  Clock,
  Mail,
  Phone
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Help Center - TrueYou Therapy',
  description: 'Find answers to common questions and get support for your TrueYou Therapy experience.',
};

const helpCategories = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Learn how to begin your journey with our platform',
    icon: Book,
    articles: [
      'How to create your account',
      'Choosing the right resources for you',
      'Setting up your profile',
      'Your first session guide'
    ]
  },
  {
    id: 'digital-products',
    title: 'Digital Products',
    description: 'Everything about our courses and resources',
    icon: Download,
    articles: [
      'How to access your purchases',
      'Downloading materials',
      'Video playback issues',
      'Mobile app usage'
    ]
  },
  {
    id: 'consultations',
    title: 'Consultations',
    description: 'Support for booking and attending sessions',
    icon: MessageCircle,
    articles: [
      'How to book a consultation',
      'Rescheduling appointments',
      'Technical setup for video calls',
      'What to expect in your session'
    ]
  },
  {
    id: 'billing',
    title: 'Billing & Payments',
    description: 'Payment questions and account management',
    icon: CreditCard,
    articles: [
      'Payment methods accepted',
      'Refund policy',
      'Subscription management',
      'Billing issues'
    ]
  },
  {
    id: 'privacy',
    title: 'Privacy & Security',
    description: 'Your data protection and privacy',
    icon: Shield,
    articles: [
      'How we protect your data',
      'Privacy policy overview',
      'Account security tips',
      'HIPAA compliance'
    ]
  },
  {
    id: 'technical',
    title: 'Technical Support',
    description: 'Troubleshooting and technical help',
    icon: Search,
    articles: [
      'Browser compatibility',
      'Connection issues',
      'App troubleshooting',
      'System requirements'
    ]
  }
];

const contactOptions = [
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Get help via email',
    contact: 'support@trueyoutherapy.com',
    responseTime: 'Usually within 24 hours'
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak with our team',
    contact: '(555) 123-4567',
    responseTime: 'Mon-Fri, 9AM-6PM EST'
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Chat with support',
    contact: 'Available in app',
    responseTime: 'Mon-Fri, 9AM-9PM EST'
  }
];

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-teal-600/5 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How Can We Help You?
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find answers to common questions or reach out to our support team for personalized assistance.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full pl-12 pr-4 py-4 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Browse Help Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.articles.map((article, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="text-sm text-primary hover:underline block"
                        >
                          {article}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Download className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Download Resources</h3>
                <p className="text-muted-foreground mb-4">
                  Access your purchased materials and worksheets
                </p>
                <Button variant="outline">Go to Downloads</Button>
              </Card>
              
              <Card className="p-6 text-center">
                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Book Consultation</h3>
                <p className="text-muted-foreground mb-4">
                  Schedule a session with our licensed professionals
                </p>
                <Button variant="outline">Book Now</Button>
              </Card>
              
              <Card className="p-6 text-center">
                <CreditCard className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Billing Support</h3>
                <p className="text-muted-foreground mb-4">
                  Manage your payments and subscription
                </p>
                <Button variant="outline">View Billing</Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
              <p className="text-xl text-muted-foreground">
                Our support team is here to help you with any questions or concerns.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <Card key={index} className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                    <p className="text-muted-foreground mb-3">{option.description}</p>
                    <p className="font-medium text-primary mb-2">{option.contact}</p>
                    <div className="flex items-center justify-center text-sm text-muted-foreground">
                      <Clock size={14} className="mr-1" />
                      {option.responseTime}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}