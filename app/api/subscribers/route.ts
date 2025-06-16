import { NextRequest, NextResponse } from 'next/server';
import { getAllSubscribers, addSubscriber } from '../../../lib/subscribers';

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
    const { email, source = 'website' } = body;

    console.log('Received subscription request:', { email, source });
    console.log('Environment check:', {
      bucket: !!process.env.COSMIC_BUCKET_SLUG,
      readKey: !!process.env.COSMIC_READ_KEY,
      writeKey: !!process.env.COSMIC_WRITE_KEY
    });

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check environment variables
    if (!process.env.COSMIC_BUCKET_SLUG || !process.env.COSMIC_READ_KEY || !process.env.COSMIC_WRITE_KEY) {
      console.error('Missing Cosmic environment variables');
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
  } catch (error: any) {
    console.error('Error adding subscriber:', error);
    
    if (error instanceof Error) {
      if (error.message === 'Email address is already subscribed') {
        return NextResponse.json(
          { error: 'This email address is already subscribed to our newsletter.' },
          { status: 409 }
        );
      }
      
      if (error.message.includes('Server configuration error')) {
        return NextResponse.json(
          { error: error.message },
          { status: 500 }
        );
      }
      
      if (error.message.includes('Authentication error') || error.message.includes('Permission denied')) {
        return NextResponse.json(
          { error: error.message },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    );
  }
}