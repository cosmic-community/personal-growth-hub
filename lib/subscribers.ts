import { createBucketClient } from '@cosmicjs/sdk';
import { sendWelcomeEmail } from './email';
import type { NewsletterSubscriber, SubscriberStats, CosmicError } from '../types/newsletter';

// Configuration
const COSMIC_OBJECT_TYPE = process.env.COSMIC_NEWSLETTER_OBJECT_TYPE || 'subscribers';

// Initialize Cosmic client for subscribers
function createCosmicClient() {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG;
  const readKey = process.env.COSMIC_READ_KEY;
  const writeKey = process.env.COSMIC_WRITE_KEY;

  if (!bucketSlug || !readKey || !writeKey) {
    throw new Error('Missing required Cosmic environment variables. Please check COSMIC_BUCKET_SLUG, COSMIC_READ_KEY, and COSMIC_WRITE_KEY.');
  }

  return createBucketClient({
    bucketSlug,
    readKey,
    writeKey,
  });
}

/**
 * Add a new newsletter subscriber to Cosmic CMS
 */
export async function addSubscriber(email: string, source: string = 'website'): Promise<NewsletterSubscriber> {
  try {
    const cosmic = createCosmicClient();
    
    console.log('Adding subscriber with object type:', COSMIC_OBJECT_TYPE);

    // Check if subscriber already exists
    const existingSubscriber = await findSubscriberByEmail(email);
    if (existingSubscriber) {
      throw new Error('Email address is already subscribed');
    }

    // Create unique slug
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substr(2, 9);
    const slug = `subscriber-${timestamp}-${randomString}`;

    // Create new subscriber object
    const subscriberData = {
      title: `Subscriber - ${email}`,
      type: COSMIC_OBJECT_TYPE,
      slug: slug,
      metadata: {
        email: email,
        signup_date: new Date().toISOString(),
        source: source,
        status: 'active'
      }
    };

    console.log('Creating subscriber with data:', subscriberData);
    
    const response = await cosmic.objects.insertOne(subscriberData);
    console.log('Cosmic response:', response);
    
    if (!response || !response.object) {
      throw new Error('Failed to create subscriber object in Cosmic');
    }

    // Send welcome email (non-blocking)
    sendWelcomeEmail(email).catch(error => {
      console.error('Failed to send welcome email (non-critical):', error);
      // Don't throw error here - subscription should succeed even if email fails
    });
    
    return response.object as NewsletterSubscriber;
  } catch (error: any) {
    console.error('Error adding subscriber:', error);
    
    // If it's already subscribed, throw that specific error
    if (error instanceof Error && error.message === 'Email address is already subscribed') {
      throw error;
    }
    
    // Handle missing environment variables
    if (error instanceof Error && error.message.includes('Missing required Cosmic environment variables')) {
      throw new Error('Server configuration error. Please contact support.');
    }
    
    // Handle Cosmic API errors
    const cosmicError = error as CosmicError;
    if (cosmicError.status === 401) {
      throw new Error('Authentication error. Please contact support.');
    }
    
    if (cosmicError.status === 403) {
      throw new Error('Permission denied. Please contact support.');
    }

    if (cosmicError.status === 422) {
      throw new Error('Invalid data format. Please contact support.');
    }

    if (cosmicError.status === 404) {
      throw new Error(`Object type '${COSMIC_OBJECT_TYPE}' not found. Please check your Cosmic CMS configuration.`);
    }
    
    // For other errors, provide a more generic message
    throw new Error(`Failed to add subscriber: ${error.message || 'Unknown error'}`);
  }
}

/**
 * Get all newsletter subscribers from Cosmic CMS
 */
export async function getAllSubscribers(): Promise<NewsletterSubscriber[]> {
  try {
    const cosmic = createCosmicClient();
    
    const response = await cosmic.objects
      .find({ type: COSMIC_OBJECT_TYPE })
      .props(['id', 'title', 'slug', 'created_at', 'modified_at', 'metadata'])
      .sort('-created_at')
      .limit(1000);
    
    return response.objects as NewsletterSubscriber[];
  } catch (error: any) {
    // Handle 404 error when no subscribers exist yet
    if (error?.status === 404) {
      console.log('No subscribers found yet - returning empty array');
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
    const cosmic = createCosmicClient();
    
    const response = await cosmic.objects
      .find({ 
        type: COSMIC_OBJECT_TYPE,
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
    const cosmic = createCosmicClient();
    
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
    const cosmic = createCosmicClient();
    await cosmic.objects.deleteOne(subscriberId);
  } catch (error) {
    console.error('Error deleting subscriber:', error);
    throw new Error('Failed to delete subscriber');
  }
}

/**
 * Get subscriber statistics
 */
export async function getSubscriberStats(): Promise<SubscriberStats> {
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