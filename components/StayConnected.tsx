import { NewsletterSignup } from './NewsletterSignup';
import { Mail, Users, Bell } from 'lucide-react';

export function StayConnected() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Stay Connected
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our community of growth-minded individuals. Get exclusive insights, 
            tips, and resources delivered straight to your inbox.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Weekly Insights</h3>
            <p className="text-muted-foreground">
              Receive curated content on personal growth, productivity, and wellness.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Exclusive Community</h3>
            <p className="text-muted-foreground">
              Connect with like-minded individuals on their growth journey.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Bell className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Early Access</h3>
            <p className="text-muted-foreground">
              Be the first to know about new courses, workshops, and resources.
            </p>
          </div>
        </div>

        <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Join Our Newsletter</h3>
            <p className="text-muted-foreground">
              Subscribe to receive personalized growth tips and exclusive content.
            </p>
          </div>
          
          <NewsletterSignup source="stay connected section" />
          
          <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Mail size={14} />
              No spam, ever
            </span>
            <span className="flex items-center gap-1">
              <Users size={14} />
              Join 1,000+ subscribers
            </span>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            You can unsubscribe at any time. Read our{' '}
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>{' '}
            for more information.
          </p>
        </div>
      </div>
    </section>
  );
}