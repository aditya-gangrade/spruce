import Image from "next/image";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex justify-center mb-6">
          <Image src={"/logo.jpg"} width={120} height={220} alt="Logo" />
        </div>
        <h1 className="text-2xl font-bold text-center mb-2">Welcome!</h1>
        <p className="text-gray-500 text-center mb-6">Log in to continue</p>

        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Log In
          </button>
        </form>

        <div className="mt-4 text-center">
          <a href="#" className="text-blue-500 hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Center-aligned Sign Up section */}
        <div className="mt-6 text-center">
          <p className="text-gray-500">Need to create an account?</p>
          <Link href="/signup" className="text-blue-500 font-semibold hover:underline">
              Sign Up
          
          </Link>
        </div>
      </div>
    </div>
  );
}
