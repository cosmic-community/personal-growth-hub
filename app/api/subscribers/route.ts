import { NextRequest, NextResponse } from 'next/server';
import { getAllSubscribers, addSubscriber } from '../../../lib/subscribers';
import { validateNewsletterSignup, sanitizeEmail, validateSource } from '../../../lib/validation/newsletter';

export async function GET() {
  try {
    const subscribers = await getAllSubscribers();
    return NextResponse.json({ subscribers });
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch subscribers' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log('Received subscription request:', body);
    console.log('Environment check:', {
      bucket: !!process.env.COSMIC_BUCKET_SLUG,
      readKey: !!process.env.COSMIC_READ_KEY,
      writeKey: !!process.env.COSMIC_WRITE_KEY,
      bucketSlug: process.env.COSMIC_BUCKET_SLUG ? process.env.COSMIC_BUCKET_SLUG.substring(0, 5) + '...' : 'missing',
      objectType: process.env.COSMIC_NEWSLETTER_OBJECT_TYPE || 'subscribers'
    });

    // Validate request data
    const validation = validateNewsletterSignup(body);
    if (!validation.isValid) {
      return NextResponse.json(
        { error: validation.error || 'Invalid request data' },
        { status: 400 }
      );
    }

    const email = sanitizeEmail(body.email);
    const source = validateSource(body.source);

    // Check environment variables
    if (!process.env.COSMIC_BUCKET_SLUG || !process.env.COSMIC_READ_KEY || !process.env.COSMIC_WRITE_KEY) {
      console.error('Missing Cosmic environment variables - please check your .env file');
      return NextResponse.json(
        { error: 'Server configuration error. Please contact support.' },
        { status: 500 }
      );
    }

    const subscriber = await addSubscriber(email, source);
    
    console.log('Successfully added subscriber:', subscriber);
    
    return NextResponse.json({ 
      success: true,
      message: 'Successfully subscribed to newsletter!',
      subscriber 
    }, { status: 201 });
  } catch (error) {
    console.error('Error adding subscriber:', error);
    
    // Type guard to check if error is an Error instance
    if (error instanceof Error) {
      if (error.message === 'Email address is already subscribed') {
        return NextResponse.json(
          { error: 'This email address is already subscribed to our newsletter.' },
          { status: 409 }
        );
      }
      
      if (error.message.includes('Server configuration error') || error.message.includes('Please contact support')) {
        return NextResponse.json(
          { error: error.message },
          { status: 500 }
        );
      }
      
      if (error.message.includes('Setup required') || error.message.includes('object type')) {
        return NextResponse.json(
          { error: error.message },
          { status: 500 }
        );
      }

      // For authentication/permission errors
      if (error.message.includes('Authentication error') || error.message.includes('Permission denied')) {
        return NextResponse.json(
          { error: error.message },
          { status: 500 }
        );
      }

      // Return the actual error message for better debugging
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    // Handle unknown error types
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    );
  }
}