'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from './ui/Card';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do I access my digital products after purchase?",
    answer: "After completing your purchase, you'll receive an instant email with download links and access instructions. All products are available immediately - no waiting required."
  },
  {
    question: "Are your therapy resources evidence-based?",
    answer: "Yes, all our content is created by licensed mental health professionals using proven therapeutic methods including CBT, DBT, and mindfulness-based approaches."
  },
  {
    question: "Do you offer refunds if I'm not satisfied?",
    answer: "We offer a 30-day money-back guarantee on all digital products. If you're not completely satisfied, contact us for a full refund."
  },
  {
    question: "Can I use these resources alongside traditional therapy?",
    answer: "Absolutely! Our resources are designed to complement traditional therapy and can be used as additional tools in your mental health journey."
  },
  {
    question: "Are the 1-on-1 sessions conducted by licensed therapists?",
    answer: "Yes, all our 1-on-1 sessions are conducted by licensed mental health professionals with specialized training in their respective areas."
  },
  {
    question: "Do you accept HSA/FSA payments?",
    answer: "Yes, we accept HSA and FSA payments for individual and teen therapy sessions. Digital products may also qualify - check with your provider."
  },
  {
    question: "How long do I have access to the video series?",
    answer: "Once you purchase our 5-hour video series, you have lifetime access. You can watch and rewatch the content as many times as needed."
  },
  {
    question: "Is my personal information kept confidential?",
    answer: "Yes, we maintain strict confidentiality standards and are HIPAA compliant. Your personal information and session details are completely secure."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got questions? We've got answers. Here are the most common questions about our services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-muted-foreground flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}