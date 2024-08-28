import { generateOTP } from '@/utils/otp'; // Utility function to generate OTP
import { sendOTPEmail } from '@/utils/email'; // Utility function to send OTP via email
import dbconnection from '@/dbconfig/db';

// Temporary storage for OTPs (use a database or caching solution in production)
const otpStore = {}; 

export async function POST(req) {
  try {
    await dbconnection();
    const { email } = await req.json();

    const otp = generateOTP();
    await sendOTPEmail(email, otp);

    // Store OTP associated with the email
    otpStore[email] = otp;

    return new Response(
      JSON.stringify({ message: 'OTP sent to your email' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Error generating OTP', error }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
