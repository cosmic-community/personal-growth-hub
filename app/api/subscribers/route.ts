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

    const subscriber = await addSubscriber(email, source);
    return NextResponse.json({ 
      success: true,
      message: 'Successfully subscribed to newsletter!',
      subscriber 
    }, { status: 201 });
  } catch (error) {
    console.error('Error adding subscriber:', error);
    
    if (error instanceof Error) {
      if (error.message === 'Email address is already subscribed') {
        return NextResponse.json(
          { error: 'This email address is already subscribed to our newsletter.' },
          { status: 409 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    );
  }
}