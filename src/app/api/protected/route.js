import { authenticate } from '@/lib/authMiddleware';

export async function GET(req) {
  // Use the authentication middleware
  const user = await authenticate(req);

  if (user instanceof Response) {
    // If authentication failed, return the error response
    return user;
  }

  // Proceed with the authenticated user
  return new Response(
    JSON.stringify({ message: 'Protected content' }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}
