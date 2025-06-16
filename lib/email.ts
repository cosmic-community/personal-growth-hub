import nodemailer from 'nodemailer';

export interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

// Create transporter based on environment variables
function createTransporter(): nodemailer.Transporter {
  const config: EmailConfig = {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASS || '',
    },
  };

  return nodemailer.createTransport(config);
}

/**
 * Send welcome email to new newsletter subscribers
 */
export async function sendWelcomeEmail(email: string): Promise<boolean> {
  try {
    // Check if email configuration is available
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn('Email configuration not found. Skipping welcome email.');
      return false;
    }

    const transporter = createTransporter();
    
    const emailOptions: EmailOptions = {
      to: email,
      subject: 'Welcome to Our Newsletter! 🌟',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to Our Newsletter</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-align: center; padding: 30px 20px; border-radius: 8px 8px 0 0; }
            .content { background: #ffffff; padding: 30px 20px; border: 1px solid #e1e8ed; }
            .footer { background: #f8f9fa; text-align: center; padding: 20px; border-radius: 0 0 8px 8px; font-size: 14px; color: #6c757d; }
            .button { display: inline-block; background: #007bff; color: white; text-decoration: none; padding: 12px 24px; border-radius: 5px; margin: 20px 0; }
            .highlight { background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Welcome to Our Community! 🎉</h1>
              <p>Thank you for subscribing to our newsletter</p>
            </div>
            <div class="content">
              <h2>What to Expect</h2>
              <p>You'll receive:</p>
              <ul>
                <li>📚 <strong>Weekly insights</strong> on personal growth and wellness</li>
                <li>🎯 <strong>Exclusive content</strong> and early access to new resources</li>
                <li>💡 <strong>Practical tips</strong> you can apply immediately</li>
                <li>🎁 <strong>Special offers</strong> on our digital products</li>
              </ul>
              
              <div class="highlight">
                <h3>🌟 Your Growth Journey Starts Now</h3>
                <p>We believe everyone deserves access to high-quality resources for personal development. Our content is created by licensed professionals and based on proven techniques.</p>
              </div>
              
              <p>Keep an eye on your inbox for our next newsletter, and don't hesitate to reach out if you have any questions!</p>
              
              <p>Best regards,<br>The Personal Growth Hub Team</p>
            </div>
            <div class="footer">
              <p>You're receiving this email because you subscribed to our newsletter.</p>
              <p><a href="#" style="color: #6c757d;">Unsubscribe</a> | <a href="#" style="color: #6c757d;">Update Preferences</a></p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        Welcome to Our Newsletter!
        
        Thank you for subscribing to our newsletter. You'll receive:
        
        - Weekly insights on personal growth and wellness
        - Exclusive content and early access to new resources  
        - Practical tips you can apply immediately
        - Special offers on our digital products
        
        Your Growth Journey Starts Now
        
        We believe everyone deserves access to high-quality resources for personal development. Our content is created by licensed professionals and based on proven techniques.
        
        Keep an eye on your inbox for our next newsletter, and don't hesitate to reach out if you have any questions!
        
        Best regards,
        The Personal Growth Hub Team
      `
    };

    await transporter.sendMail({
      from: `"Personal Growth Hub" <${process.env.SMTP_USER}>`,
      ...emailOptions,
    });

    console.log(`Welcome email sent successfully to ${email}`);
    return true;
  } catch (error) {
    console.error('Error sending welcome email:', error);
    return false;
  }
}

/**
 * Send general email
 */
export async function sendEmail(options: EmailOptions): Promise<boolean> {
  try {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn('Email configuration not found. Cannot send email.');
      return false;
    }

    const transporter = createTransporter();
    
    await transporter.sendMail({
      from: `"Personal Growth Hub" <${process.env.SMTP_USER}>`,
      ...options,
    });

    console.log(`Email sent successfully to ${options.to}`);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

/**
 * Verify email configuration
 */
export async function verifyEmailConfig(): Promise<boolean> {
  try {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return false;
    }

    const transporter = createTransporter();
    await transporter.verify();
    return true;
  } catch (error) {
    console.error('Email configuration verification failed:', error);
    return false;
  }
}