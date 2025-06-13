import { Metadata } from 'next';
import { Calendar, Clock, Users, CheckCircle, Star, Video, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: '1-on-1 Consultation - TrueYou Therapy',
  description: 'Get personalized guidance with our professional 1-on-1 consultation services. Expert therapists ready to help you achieve your goals.',
};

interface ConsultationPageProps {}

const consultationTypes = [
  {
    id: '1',
    name: 'Individual Therapy Session',
    duration: '50 minutes',
    price: 120,
    description: 'One-on-one therapy session focused on your personal growth and well-being.',
    features: [
      'Personalized treatment approach',
      'Evidence-based therapeutic techniques',
      'Goal-oriented sessions',
      'Follow-up resources',
    ],
    type: 'video',
  },
  {
    id: '2',
    name: 'Couples Consultation',
    duration: '75 minutes',
    price: 180,
    description: 'Relationship counseling session designed to improve communication and connection.',
    features: [
      'Communication skills training',
      'Conflict resolution techniques',
      'Relationship assessment',
      'Home practice exercises',
    ],
    type: 'video',
  },
  {
    id: '3',
    name: 'Life Coaching Session',
    duration: '45 minutes',
    price: 100,
    description: 'Goal-focused coaching to help you create positive changes in your life.',
    features: [
      'Goal setting and planning',
      'Accountability support',
      'Skill development',
      'Action plan creation',
    ],
    type: 'video',
  },
  {
    id: '4',
    name: 'Crisis Support Session',
    duration: '60 minutes',
    price: 150,
    description: 'Immediate support for urgent mental health concerns and crisis situations.',
    features: [
      'Immediate availability',
      'Crisis intervention techniques',
      'Safety planning',
      'Resource referrals',
    ],
    type: 'phone',
  },
];

const benefits = [
  {
    icon: Users,
    title: 'Licensed Professionals',
    description: 'Work with experienced, licensed therapists and counselors.',
  },
  {
    icon: Video,
    title: 'Flexible Formats',
    description: 'Choose between video calls, phone sessions, or in-person meetings.',
  },
  {
    icon: Calendar,
    title: 'Easy Scheduling',
    description: 'Book appointments that fit your schedule, including evenings and weekends.',
  },
  {
    icon: CheckCircle,
    title: 'Personalized Care',
    description: 'Receive tailored treatment plans designed specifically for your needs.',
  },
];

export default async function ConsultationPage(): Promise<JSX.Element> {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <MessageCircle size={16} className="mr-2" />
              Professional Consultation
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Get Personalized Support with
              <span className="gradient-text block mt-2">1-on-1 Consultation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with licensed professionals for personalized guidance, support, and expert advice 
              tailored to your unique situation and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="amber">
                Book Consultation
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Our Consultation Services?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference that personalized, professional support can make in your life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="section-padding section-bg-slate">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Available Consultation Services</h2>
            <p className="text-xl text-muted-foreground">
              Choose the type of consultation that best fits your needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultationTypes.map((consultation) => (
              <Card key={consultation.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1 text-primary">
                          {consultation.type === 'video' ? (
                            <Video size={16} />
                          ) : (
                            <MessageCircle size={16} />
                          )}
                          <span className="text-sm font-medium">
                            {consultation.type === 'video' ? 'Video Call' : 'Phone Call'}
                          </span>
                        </div>
                        <div className="flex items-center text-amber-500">
                          <Star size={14} className="fill-current" />
                          <span className="text-sm ml-1">4.9</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{consultation.name}</h3>
                      <p className="text-muted-foreground mb-4">{consultation.description}</p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-2xl font-bold text-primary">${consultation.price}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock size={14} />
                        {consultation.duration}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                      What's Included:
                    </h4>
                    {consultation.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1" variant="amber">
                      Book Session
                    </Button>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-xl text-muted-foreground">
                Getting started with your consultation is simple and straightforward.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Choose Your Service</h3>
                <p className="text-muted-foreground">
                  Select the type of consultation that best matches your needs and goals.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Schedule Your Session</h3>
                <p className="text-muted-foreground">
                  Pick a convenient time that works for your schedule. We offer flexible hours.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Connect & Start</h3>
                <p className="text-muted-foreground">
                  Join your session via video call or phone and begin your journey to positive change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding section-bg-emerald">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah M.',
                text: 'The consultation session was exactly what I needed. My therapist provided practical tools I could use immediately.',
                rating: 5,
              },
              {
                name: 'David R.',
                text: 'Professional, understanding, and incredibly helpful. The video format made it so convenient.',
                rating: 5,
              },
              {
                name: 'Lisa K.',
                text: 'I was hesitant about online therapy, but this experience exceeded all my expectations.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Take the first step towards positive change. Book your consultation today and 
              experience the difference personalized support can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="amber">
                Book Your Consultation
              </Button>
              <Button size="lg" variant="outline">
                Have Questions?
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}