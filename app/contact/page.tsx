import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import AnimatedBackground from '@/components/AnimatedBackground';
import FloatingActionButton from '@/components/FloatingActionButton';
import { Mail, Phone, MapPin, Clock, Users, Award, Zap, Heart } from 'lucide-react';
import { generateSEOMetadata } from '@/lib/seo';
import { getStructuredData } from '@/lib/structured-data';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Contact Our Expert Team - TrueYou Therapy',
  description: 'Ready to transform your life? Connect with our team of licensed professionals. Fast response times, personalized support, and life-changing guidance await.',
  type: 'website'
});

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Response',
      details: 'hello@trueyoutherapy.com',
      description: 'Get detailed responses within hours',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Priority Line',
      details: '(555) 123-4567',
      description: 'Mon-Fri, 9AM-6PM EST',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Global Reach',
      details: 'Available Worldwide',
      description: 'Supporting clients in 50+ countries',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Rapid Response',
      details: 'Under 4 hours',
      description: 'Average response time',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Lives Transformed', icon: Users },
    { number: '98%', label: 'Satisfaction Rate', icon: Heart },
    { number: '24/7', label: 'Support Available', icon: Clock },
    { number: '15+', label: 'Years Experience', icon: Award }
  ];

  const reasons = [
    {
      icon: Zap,
      title: 'Lightning-Fast Support',
      description: 'Our team responds faster than any other therapy platform'
    },
    {
      icon: Heart,
      title: 'Personalized Care',
      description: 'Every interaction is tailored to your unique journey'
    },
    {
      icon: Award,
      title: 'Expert Guidance',
      description: 'Licensed professionals with proven track records'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Join thousands who have transformed their lives'
    }
  ];

  const structuredData = getStructuredData({
    type: 'ContactPage',
    title: 'Contact Our Expert Team - TrueYou Therapy',
    description: 'Ready to transform your life? Connect with our team of licensed professionals.',
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen relative overflow-hidden">
        <AnimatedBackground />
        
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="container-width section-padding">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6 animate-pulse">
                <Zap size={16} className="mr-2" />
                Average 4-hour response time
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Let's Transform Your Life Together
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Ready to take the next step? Our expert team is standing by to provide personalized guidance, 
                answer your questions, and help you begin your transformation journey.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index} 
                    className="text-center group hover:scale-105 transition-all duration-300 cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="relative py-20">
          <div className="container-width section-padding">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-20">
              {/* Contact Form */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    Start Your Journey Today
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Fill out the form below and one of our expert team members will reach out within 4 hours. 
                    Your transformation begins with a single message.
                  </p>
                </div>
                <ContactForm />
              </div>

              {/* Contact Information & Features */}
              <div className="space-y-12">
                {/* Contact Methods */}
                <div>
                  <h3 className="text-3xl font-bold mb-8">Multiple Ways to Connect</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {contactInfo.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div 
                          key={index} 
                          className="group relative overflow-hidden bg-card border border-border rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
                          style={{ animationDelay: `${index * 150}ms` }}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                          
                          <div className="relative">
                            <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                              <Icon size={24} className="text-white" />
                            </div>
                            <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                            <p className="text-primary font-semibold mb-1">{item.details}</p>
                            <p className="text-muted-foreground text-sm">{item.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Why Choose Us */}
                <div>
                  <h3 className="text-3xl font-bold mb-8">Why Our Clients Choose Us</h3>
                  <div className="space-y-6">
                    {reasons.map((reason, index) => {
                      const Icon = reason.icon;
                      return (
                        <div 
                          key={index} 
                          className="flex items-start space-x-4 group hover:bg-card/50 rounded-lg p-4 transition-all duration-300 hover:scale-105"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                              <Icon size={20} className="text-white" />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-2 text-primary">{reason.title}</h4>
                            <p className="text-muted-foreground">{reason.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Quick FAQ */}
                <div className="bg-gradient-to-r from-primary/5 to-purple-600/5 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Quick Answers</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-primary">How quickly will I hear back?</h4>
                      <p className="text-muted-foreground text-sm">Our team responds within 4 hours during business hours, often much faster.</p>
                    </div>
                    <div className="border-l-4 border-purple-600 pl-4">
                      <h4 className="font-semibold text-purple-600">Is there a consultation fee?</h4>
                      <p className="text-muted-foreground text-sm">Your first 15-minute consultation is completely free with no obligations.</p>
                    </div>
                    <div className="border-l-4 border-pink-600 pl-4">
                      <h4 className="font-semibold text-pink-600">What if I'm not ready to start?</h4>
                      <p className="text-muted-foreground text-sm">No pressure! We're here to answer questions and support you when you're ready.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary/5 to-purple-600/5">
          <div className="container-width section-padding text-center">
            <h2 className="text-4xl font-bold mb-8">Trusted by Thousands Worldwide</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Join the growing community of individuals who have transformed their lives with our expert guidance and support.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <div className="text-2xl font-bold">50,000+ Lives Changed</div>
              <div className="w-2 h-2 bg-current rounded-full"></div>
              <div className="text-2xl font-bold">98% Success Rate</div>
              <div className="w-2 h-2 bg-current rounded-full"></div>
              <div className="text-2xl font-bold">Licensed Professionals</div>
            </div>
          </div>
        </section>

        <FloatingActionButton />
      </div>
    </>
  );
}