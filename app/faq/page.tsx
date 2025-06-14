import { Metadata } from 'next';
import FAQClient from './faq-client';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - TrueYou Therapy',
  description: 'Find answers to the most commonly asked questions about our therapy resources and services.',
};

export default function FAQPage() {
  return <FAQClient />;
}