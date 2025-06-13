import { Shield, Award, Users, Clock } from 'lucide-react';

const trustBadges = [
  {
    icon: Shield,
    title: 'HIPAA Compliant',
    description: 'Your privacy is protected'
  },
  {
    icon: Award,
    title: 'Licensed Professionals',
    description: 'All content by certified therapists'
  },
  {
    icon: Users,
    title: '10,000+ Helped',
    description: 'Trusted by thousands worldwide'
  },
  {
    icon: Clock,
    title: '30-Day Guarantee',
    description: 'Money-back promise'
  }
];

export default function TrustBadges() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{badge.title}</h3>
                <p className="text-muted-foreground text-sm">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}