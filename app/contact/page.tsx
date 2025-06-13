import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - TrueYou Therapy',
  description: 'Get in touch with our team for questions about our therapy resources, products, or to schedule a consultation.',
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@trueyoutherapy.com',
      description: 'Send us a message anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '(555) 123-4567',
      description: 'Mon-Fri, 9AM-6PM EST'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Available Worldwide',
      description: 'Online therapy resources'
    },
    {
      icon: Clock,
      title: 'Response Time',
      details: 'Within 24 hours',
      description: 'We respond quickly'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our resources? Ready to start your journey? We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">How to reach us</h2>
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon size={24} className="text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-primary font-medium">{item.details}</p>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">How quickly will I receive my digital products?</h4>
                  <p className="text-muted-foreground text-sm">Digital products are delivered instantly via email after purchase.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Do you offer refunds?</h4>
                  <p className="text-muted-foreground text-sm">Yes, we offer a 30-day money-back guarantee on all digital products.</p>
                </div>
                <div>
                  <h4 className="font-semibold">Are your resources evidence-based?</h4>
                  <p className="text-muted-foreground text-sm">All our content is created by licensed professionals using proven therapeutic methods.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}