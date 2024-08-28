import dbconnection from '@/dbconfig/db';
import User from '@/models/Signup';
import jwt from 'jsonwebtoken';

// Temporary storage for OTPs (use a database or caching solution in production)
const otpStore = {}; 

export async function POST(req) {
  try {
    await dbconnection();
    const { email, otp, firstname, lastname, password } = await req.json();

    // Verify OTP
    if (otpStore[email] !== otp) {
      return new Response(
        JSON.stringify({ message: 'Invalid OTP' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Create and save user
    const user = new User({ firstname, lastname, email, password });
    await user.save();

    // Clear OTP store
    delete otpStore[email];

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return new Response(
      JSON.stringify({ token, message: 'User registered successfully!' }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Error verifying OTP', error }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
