import jwt from 'jsonwebtoken';

// Middleware function to authenticate requests
export async function authenticate(req) {
  const token = req.headers.get('Authorization')?.split(' ')[1];
  
  if (!token) {
    return new Response(JSON.stringify({ message: 'No token provided' }), { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded; // Return the decoded user information
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Invalid token' }), { status: 401 });
  }
}
