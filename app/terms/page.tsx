import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { FileText, Shield, CreditCard, Users, AlertTriangle, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service - TrueYou Therapy',
  description: 'Read our terms of service and understand your rights and responsibilities when using TrueYou Therapy.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <Scale size={16} className="mr-2" />
              Terms of Service
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground">
              Please read these terms carefully before using our services.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: January 1, 2024
            </p>
          </div>

          {/* Terms Content */}
          <div className="prose prose-lg max-w-none">
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-2 text-primary" />
                1. Acceptance of Terms
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  By accessing or using TrueYou Therapy's services, website, or mobile application (collectively, the "Service"), 
                  you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, 
                  you may not access or use our Service.
                </p>
                <p>
                  These Terms constitute a legally binding agreement between you and TrueYou Therapy. 
                  We may update these Terms from time to time, and the updated Terms will be effective when posted.
                </p>
              </div>
            </Card>

            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Users className="w-6 h-6 mr-2 text-primary" />
                2. Description of Service
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  TrueYou Therapy provides digital mental health and personal development resources, including:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Educational content and self-help resources</li>
                  <li>Video courses and guided programs</li>
                  <li>One-on-one consultations with licensed professionals</li>
                  <li>Interactive tools and assessments</li>
                  <li>Community features and support</li>
                </ul>
                
                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                  <p className="text-amber-800 dark:text-amber-200">
                    <strong>Important:</strong> Our services are not a substitute for professional medical or psychiatric treatment. 
                    If you are experiencing a mental health crisis, please contact emergency services or a crisis hotline immediately.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-2 text-primary" />
                3. User Accounts and Responsibilities
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Account Creation</h3>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>You must be at least 18 years old to create an account</li>
                    <li>You must provide accurate and complete information</li>
                    <li>You are responsible for maintaining the security of your account</li>
                    <li>You must notify us immediately of any unauthorized access</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Acceptable Use</h3>
                  <p>You agree to use our Service only for lawful purposes and in accordance with these Terms. You may not:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Share your account credentials with others</li>
                    <li>Use the Service for any illegal or unauthorized purpose</li>
                    <li>Interfere with or disrupt the Service or servers</li>
                    <li>Attempt to gain unauthorized access to other accounts</li>
                    <li>Upload malicious code or harmful content</li>
                    <li>Harass or abuse other users or our staff</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <CreditCard className="w-6 h-6 mr-2 text-primary" />
                4. Payments and Refunds
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Payment Terms</h3>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>All fees are stated in US dollars and are non-refundable except as stated below</li>
                    <li>Payment is due immediately upon purchase</li>
                    <li>We accept major credit cards and PayPal</li>
                    <li>Prices may change at any time with notice</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Refund Policy</h3>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li><strong>Digital Products:</strong> 30-day money-back guarantee</li>
                    <li><strong>Consultations:</strong> Refundable if cancelled 24+ hours in advance</li>
                    <li><strong>Subscription Services:</strong> No partial refunds for subscription periods</li>
                  </ul>
                  <p className="mt-2">
                    To request a refund, contact our support team at support@trueyoutherapy.com within the applicable timeframe.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-2 text-primary" />
                5. Professional Services and Limitations
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Nature of Services</h3>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Our consultations are educational and supportive in nature</li>
                    <li>They are not intended to replace ongoing therapy or medical treatment</li>
                    <li>No doctor-patient relationship is established through our services</li>
                    <li>Our professionals are licensed but operate within defined scope</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Crisis Situations</h3>
                  <p className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <strong className="text-red-800 dark:text-red-200">
                      If you are experiencing a mental health emergency, do not use our Service. Instead, contact:
                    </strong>
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                    <li>Emergency services (911)</li>
                    <li>National Suicide Prevention Lifeline: 988</li>
                    <li>Crisis Text Line: Text HOME to 741741</li>
                    <li>Your local emergency room</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-2 text-primary" />
                6. Intellectual Property
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Our Content</h3>
                  <p>
                    All content on our Service, including text, videos, images, audio, and software, 
                    is owned by TrueYou Therapy or our licensors and is protected by copyright and other laws.
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                    <li>You may use our content for personal, non-commercial purposes only</li>
                    <li>You may not copy, modify, distribute, or sell our content</li>
                    <li>Downloaded materials are for your personal use only</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">User Content</h3>
                  <p>
                    When you submit content to our Service (reviews, comments, etc.), you grant us a non-exclusive, 
                    royalty-free license to use, modify, and display that content in connection with our Service.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2 text-primary" />
                7. Disclaimers and Limitations of Liability
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Service Disclaimers</h3>
                  <p>Our Service is provided "as is" and "as available." We make no warranties, expressed or implied, including:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>That the Service will be uninterrupted or error-free</li>
                    <li>That the Service will meet your specific needs</li>
                    <li>That any results or outcomes will be achieved</li>
                    <li>That the information provided is complete or accurate</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Limitation of Liability</h3>
                  <p>
                    To the maximum extent permitted by law, TrueYou Therapy shall not be liable for any indirect, 
                    incidental, special, consequential, or punitive damages, including lost profits, data, or goodwill.
                  </p>
                  <p className="mt-2">
                    Our total liability to you for any claims arising from these Terms or your use of the Service 
                    shall not exceed the amount you paid us in the 12 months preceding the claim.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Privacy and Data Protection</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Your privacy is important to us. Our collection, use, and protection of your personal information 
                  is governed by our Privacy Policy, which is incorporated into these Terms by reference.
                </p>
                <p>
                  By using our Service, you consent to the collection and use of your information as described in our Privacy Policy.
                </p>
                <p>
                  <a href="/privacy" className="text-primary hover:underline">
                    Read our full Privacy Policy →
                  </a>
                </p>
              </div>
            </Card>

            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Termination by You</h3>
                  <p>
                    You may terminate your account at any time by contacting us or using the account deletion feature. 
                    Upon termination, your access to the Service will cease immediately.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Termination by Us</h3>
                  <p>We may terminate or suspend your account immediately if you:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Violate these Terms</li>
                    <li>Engage in fraudulent or illegal activities</li>
                    <li>Abuse our Service or harm other users</li>
                    <li>Fail to pay required fees</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">10. General Provisions</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Governing Law</h3>
                  <p>
                    These Terms are governed by the laws of the State of California, without regard to conflict of law principles.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Dispute Resolution</h3>
                  <p>
                    Any disputes arising from these Terms or your use of the Service will be resolved through binding arbitration 
                    in accordance with the rules of the American Arbitration Association.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Severability</h3>
                  <p>
                    If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Entire Agreement</h3>
                  <p>
                    These Terms, together with our Privacy Policy, constitute the entire agreement between you and TrueYou Therapy.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="text-muted-foreground">
                <p className="mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> legal@trueyoutherapy.com</p>
                  <p><strong>Phone:</strong> (555) 123-4567</p>
                  <p><strong>Mail:</strong> TrueYou Therapy Legal Department<br />
                     123 Wellness Street<br />
                     Healthy City, HC 12345</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}