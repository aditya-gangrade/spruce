import dbconnection from '@/dbconfig/db';
import User from '@/models/Signup';
import jwt from 'jsonwebtoken';

export async function POST(req) {
  try {
    await dbconnection();
    const { email, password } = await req.json();

    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return new Response(
        JSON.stringify({ message: 'Invalid email or password' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return new Response(
      JSON.stringify({ token, message: 'Login successful' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Error logging in', error }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
