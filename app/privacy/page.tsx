import { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import { Shield, Lock, Eye, FileText, Users, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - TrueYou Therapy',
  description: 'Learn how TrueYou Therapy protects your privacy and handles your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <Shield size={16} className="mr-2" />
              Privacy Policy
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Privacy Matters to Us
            </h1>
            <p className="text-xl text-muted-foreground">
              We are committed to protecting your personal information and being transparent about how we use it.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: January 1, 2024
            </p>
          </div>

          {/* Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center">
              <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Secure & Encrypted</h3>
              <p className="text-sm text-muted-foreground">
                All data is encrypted in transit and at rest using industry-standard security.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Eye className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Complete Transparency</h3>
              <p className="text-sm text-muted-foreground">
                We clearly explain what data we collect and how we use it.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Your Control</h3>
              <p className="text-sm text-muted-foreground">
                You can access, update, or delete your personal information anytime.
              </p>
            </Card>
          </div>

          {/* Policy Content */}
          <div className="prose prose-lg max-w-none">
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-2 text-primary" />
                Information We Collect
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Personal Information</h3>
                  <p>When you create an account, we collect:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Name and email address</li>
                    <li>Phone number (if provided)</li>
                    <li>Profile information and preferences</li>
                    <li>Payment information (processed securely by our payment partners)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Usage Information</h3>
                  <p>We automatically collect certain information about how you use our service:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Pages visited and features used</li>
                    <li>Time spent on the platform</li>
                    <li>Device and browser information</li>
                    <li>IP address and general location</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Health Information</h3>
                  <p>During consultations or assessments, we may collect:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Assessment responses and results</li>
                    <li>Session notes (with your consent)</li>
                    <li>Progress tracking information</li>
                    <li>Communications with our professionals</li>
                  </ul>
                  <p className="text-sm mt-2 p-3 bg-primary/10 rounded-lg">
                    <strong>HIPAA Compliance:</strong> All health information is protected under HIPAA regulations and handled with the highest level of security and confidentiality.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-2 text-primary" />
                How We Use Your Information
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Service Delivery</h3>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Provide access to digital resources and consultations</li>
                    <li>Personalize your experience and recommendations</li>
                    <li>Process payments and manage your account</li>
                    <li>Send important updates about your account or services</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Communication</h3>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Send educational content and tips (with your consent)</li>
                    <li>Respond to your questions and support requests</li>
                    <li>Notify you about new features or resources</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Improvement & Analytics</h3>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Analyze usage patterns to improve our services</li>
                    <li>Conduct research to develop better resources</li>
                    <li>Ensure platform security and prevent fraud</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Lock className="w-6 h-6 mr-2 text-primary" />
                Information Sharing & Disclosure
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-foreground font-semibold">
                  We do not sell, rent, or share your personal information with third parties, except in the following limited circumstances:
                </p>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Service Providers</h3>
                  <p>We may share information with trusted third-party services that help us operate our platform:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Payment processing (Stripe, PayPal)</li>
                    <li>Email communication services</li>
                    <li>Cloud hosting and storage</li>
                    <li>Analytics and performance monitoring</li>
                  </ul>
                  <p className="text-sm mt-2">All service providers are contractually bound to protect your information.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Legal Requirements</h3>
                  <p>We may disclose information when required by law or to:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Comply with legal processes or government requests</li>
                    <li>Protect our rights, property, or safety</li>
                    <li>Prevent fraud or illegal activities</li>
                    <li>Respond to emergencies involving risk of harm</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Users className="w-6 h-6 mr-2 text-primary" />
                Your Rights & Choices
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Access & Control</h3>
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Access and download your personal information</li>
                    <li>Update or correct your information</li>
                    <li>Delete your account and associated data</li>
                    <li>Opt out of non-essential communications</li>
                    <li>Request data portability</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">How to Exercise Your Rights</h3>
                  <p>To exercise any of these rights, you can:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Update your profile settings in your account</li>
                    <li>Contact us at privacy@trueyoutherapy.com</li>
                    <li>Use the unsubscribe links in our emails</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Lock className="w-6 h-6 mr-2 text-primary" />
                Data Security
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>We implement comprehensive security measures to protect your information:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>Encryption:</strong> All data is encrypted in transit (TLS) and at rest (AES-256)</li>
                  <li><strong>Access Controls:</strong> Strict access controls and authentication for our team</li>
                  <li><strong>Regular Audits:</strong> Security assessments and vulnerability testing</li>
                  <li><strong>Compliance:</strong> SOC 2 Type II and HIPAA compliance</li>
                  <li><strong>Monitoring:</strong> 24/7 security monitoring and incident response</li>
                </ul>
                
                <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg mt-4">
                  <p className="text-amber-800 dark:text-amber-200">
                    <strong>Important:</strong> While we implement strong security measures, no system is 100% secure. 
                    We encourage you to use strong passwords and keep your account information confidential.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-2 text-primary" />
                Data Retention
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>We retain your information for different periods based on the type of data and our legitimate business needs:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>Account Information:</strong> Until you delete your account</li>
                  <li><strong>Usage Data:</strong> Up to 2 years for analytics purposes</li>
                  <li><strong>Health Information:</strong> 7 years as required by healthcare regulations</li>
                  <li><strong>Financial Records:</strong> 7 years as required by law</li>
                  <li><strong>Support Communications:</strong> 3 years</li>
                </ul>
                <p className="mt-4">
                  When you delete your account, we will delete or anonymize your personal information within 30 days, 
                  except where we are required to retain it by law.
                </p>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <div className="text-muted-foreground">
                <p className="mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> privacy@trueyoutherapy.com</p>
                  <p><strong>Phone:</strong> (555) 123-4567</p>
                  <p><strong>Mail:</strong> TrueYou Therapy Privacy Team<br />
                     123 Wellness Street<br />
                     Healthy City, HC 12345</p>
                </div>
                <p className="mt-4 text-sm">
                  We will respond to privacy-related inquiries within 30 days.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}