import { createBucketClient } from '@cosmicjs/sdk';

export interface NewsletterSubscriber {
  id: string;
  title: string;
  slug: string;
  created_at: string;
  modified_at: string;
  metadata: {
    email: string;
    signup_date: string;
    source: string;
    status: string;
  };
}

// Initialize Cosmic client for subscribers
const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG || '',
  readKey: process.env.COSMIC_READ_KEY || '',
  writeKey: process.env.COSMIC_WRITE_KEY || '',
});

/**
 * Add a new newsletter subscriber to Cosmic CMS
 */
export async function addSubscriber(email: string, source: string = 'website'): Promise<NewsletterSubscriber> {
  try {
    // Check if subscriber already exists
    const existingSubscriber = await findSubscriberByEmail(email);
    if (existingSubscriber) {
      throw new Error('Email address is already subscribed');
    }

    // Create new subscriber object
    const subscriberData = {
      title: `Subscriber - ${email}`,
      type: 'subscribers',
      slug: `subscriber-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      metadata: {
        email: email,
        signup_date: new Date().toISOString(),
        source: source,
        status: 'active'
      }
    };

    console.log('Adding subscriber to Cosmic:', subscriberData);
    const response = await cosmic.objects.insertOne(subscriberData);
    console.log('Cosmic response:', response);
    
    return response.object as NewsletterSubscriber;
  } catch (error) {
    console.error('Error adding subscriber:', error);
    
    // If it's already subscribed, throw that specific error
    if (error instanceof Error && error.message === 'Email address is already subscribed') {
      throw error;
    }
    
    // For other errors, provide a more generic message
    throw new Error('Failed to add subscriber. Please try again.');
  }
}

/**
 * Get all newsletter subscribers from Cosmic CMS
 */
export async function getAllSubscribers(): Promise<NewsletterSubscriber[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'subscribers' })
      .props(['id', 'title', 'slug', 'created_at', 'modified_at', 'metadata'])
      .sort('-created_at')
      .limit(1000);
    
    return response.objects as NewsletterSubscriber[];
  } catch (error: any) {
    // Handle 404 error when no subscribers exist yet
    if (error?.status === 404) {
      return [];
    }
    console.error('Error fetching subscribers:', error);
    throw new Error('Failed to fetch subscribers');
  }
}

/**
 * Find a subscriber by email address
 */
export async function findSubscriberByEmail(email: string): Promise<NewsletterSubscriber | null> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'subscribers',
        'metadata.email': email 
      })
      .props(['id', 'title', 'slug', 'created_at', 'modified_at', 'metadata'])
      .limit(1);
    
    return response.objects.length > 0 ? response.objects[0] as NewsletterSubscriber : null;
  } catch (error: any) {
    // Handle 404 error when subscriber doesn't exist
    if (error?.status === 404) {
      return null;
    }
    console.error('Error finding subscriber by email:', error);
    return null;
  }
}

/**
 * Update subscriber status (active, unsubscribed, etc.)
 */
export async function updateSubscriberStatus(subscriberId: string, status: string): Promise<NewsletterSubscriber> {
  try {
    const response = await cosmic.objects.updateOne(subscriberId, {
      metadata: {
        status: status
      }
    });
    
    return response.object as NewsletterSubscriber;
  } catch (error) {
    console.error('Error updating subscriber status:', error);
    throw new Error('Failed to update subscriber status');
  }
}

/**
 * Delete a subscriber
 */
export async function deleteSubscriber(subscriberId: string): Promise<void> {
  try {
    await cosmic.objects.deleteOne(subscriberId);
  } catch (error) {
    console.error('Error deleting subscriber:', error);
    throw new Error('Failed to delete subscriber');
  }
}

/**
 * Get subscriber statistics
 */
export async function getSubscriberStats(): Promise<{
  total: number;
  active: number;
  unsubscribed: number;
  recentSignups: number;
}> {
  try {
    const subscribers = await getAllSubscribers();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const active = subscribers.filter(sub => sub.metadata.status === 'active').length;
    const unsubscribed = subscribers.filter(sub => sub.metadata.status === 'unsubscribed').length;
    const recentSignups = subscribers.filter(sub => 
      new Date(sub.metadata.signup_date) > sevenDaysAgo
    ).length;

    return {
      total: subscribers.length,
      active,
      unsubscribed,
      recentSignups
    };
  } catch (error) {
    console.error('Error getting subscriber stats:', error);
    return {
      total: 0,
      active: 0,
      unsubscribed: 0,
      recentSignups: 0
    };
  }
}