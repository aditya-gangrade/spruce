import dbconnection from '@/dbconfig/db';
import User from '@/models/Signup';
import jwt from 'jsonwebtoken';

export async function POST(req) {
  try {
    console.log('Received request:', await req.json()); // Log request data
    await dbconnection();
    const { firstname, lastname, email, password } = await req.json();

    // Validate request data
    if (!firstname || !lastname || !email || !password) {
      throw new Error('All fields are required.');
    }

    const user = new User({ firstname, lastname, email, password });
    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return new Response(
      JSON.stringify({ token, message: 'User registered successfully!' }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error during signup:', error);
    return new Response(
      JSON.stringify({ message: 'Error signing up', error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
