'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqItems: FAQItem[] = [
  {
    id: '1',
    category: 'Getting Started',
    question: 'How do I get started with TrueYou Therapy?',
    answer: 'Getting started is simple! First, create your free account by clicking the "Sign Up" button. Once registered, you can browse our resources, take our assessment to find personalized recommendations, or book a consultation with one of our licensed professionals.'
  },
  {
    id: '2',
    category: 'Getting Started',
    question: 'Do I need any special software or equipment?',
    answer: 'No special software is required! Our platform works on any modern web browser. For video consultations, you\'ll need a device with a camera and microphone (computer, tablet, or smartphone). We recommend Chrome, Safari, or Firefox for the best experience.'
  },
  {
    id: '3',
    category: 'Digital Products',
    question: 'What types of digital resources do you offer?',
    answer: 'We offer a wide variety of resources including guided video courses, downloadable worksheets, audio meditations, interactive exercises, and educational materials. All content is created by licensed mental health professionals and based on evidence-based therapeutic approaches.'
  },
  {
    id: '4',
    category: 'Digital Products',
    question: 'How long do I have access to purchased content?',
    answer: 'Once you purchase any digital product, you have lifetime access to that content. You can download materials, stream videos, and access resources whenever you need them, with no expiration date.'
  },
  {
    id: '5',
    category: 'Digital Products',
    question: 'Can I download content for offline use?',
    answer: 'Yes! Most of our resources can be downloaded for offline use, including PDFs, audio files, and video content. This allows you to access your materials anywhere, even without an internet connection.'
  },
  {
    id: '6',
    category: 'Consultations',
    question: 'What\'s the difference between a consultation and therapy?',
    answer: 'Our consultations are designed to provide guidance, education, and support around specific goals or challenges. While our professionals are licensed, these sessions focus on coaching and skill-building rather than ongoing therapeutic treatment.'
  },
  {
    id: '7',
    category: 'Consultations',
    question: 'How do I prepare for my consultation?',
    answer: 'Before your session, think about your specific goals and what you\'d like to achieve. You may also want to complete any recommended assessments or worksheets. We\'ll send you a preparation guide when you book your consultation.'
  },
  {
    id: '8',
    category: 'Consultations',
    question: 'Can I reschedule or cancel my consultation?',
    answer: 'Yes, you can reschedule or cancel your consultation up to 24 hours before the scheduled time without penalty. Changes made with less than 24 hours notice may be subject to a fee.'
  },
  {
    id: '9',
    category: 'Privacy & Security',
    question: 'Is my information confidential?',
    answer: 'Absolutely. We take privacy very seriously and are HIPAA compliant. All personal information and session content is kept strictly confidential and encrypted. We never share your information with third parties without your explicit consent.'
  },
  {
    id: '10',
    category: 'Privacy & Security',
    question: 'How secure are video consultations?',
    answer: 'Our video platform uses end-to-end encryption and meets all healthcare security standards. Sessions are not recorded unless specifically requested and consented to by you. All communication is secure and private.'
  },
  {
    id: '11',
    category: 'Billing',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and Apple Pay. All transactions are processed securely through our encrypted payment system.'
  },
  {
    id: '12',
    category: 'Billing',
    question: 'Do you offer refunds?',
    answer: 'Yes, we offer a 30-day money-back guarantee on all digital products. If you\'re not satisfied with your purchase, contact our support team within 30 days for a full refund. Consultation fees are refundable if cancelled within 24 hours of booking.'
  },
  {
    id: '13',
    category: 'Billing',
    question: 'Are there any subscription fees?',
    answer: 'No, we don\'t have any mandatory subscription fees. You only pay for the specific products or consultations you choose. Some premium resources may offer optional subscription access for ongoing content.'
  },
  {
    id: '14',
    category: 'Technical Support',
    question: 'I\'m having trouble accessing my content. What should I do?',
    answer: 'First, try refreshing your browser and clearing your cache. If the issue persists, check that you\'re logged into the correct account. For continued problems, contact our technical support team at support@trueyoutherapy.com.'
  },
  {
    id: '15',
    category: 'Technical Support',
    question: 'The video quality is poor during my consultation. How can I improve it?',
    answer: 'Poor video quality is usually due to internet connection. Try closing other applications, moving closer to your router, or switching to a wired connection if possible. Contact us if problems persist, and we can help troubleshoot.'
  }
];

const categories = Array.from(new Set(faqItems.map(item => item.category)));

function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <Card key={item.id} className="overflow-hidden">
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full p-6 text-left hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold pr-4">{item.question}</h3>
              {openItems.has(item.id) ? (
                <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              ) : (
                <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              )}
            </div>
          </button>
          {openItems.has(item.id) && (
            <div className="px-6 pb-6">
              <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}

export default function FAQClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredItems = selectedCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our services, products, and platform.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-accent'
                }`}
              >
                All Questions
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-accent'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="mb-12">
            <FAQAccordion items={filteredItems} />
          </div>

          {/* Contact Section */}
          <Card className="p-8 text-center bg-gradient-to-br from-primary/5 to-teal-600/5">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Contact Support
              </a>
              <a
                href="/help"
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg font-semibold hover:bg-accent transition-colors"
              >
                Browse Help Center
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}