import dbconnection from "@/dbconfig/db";
import Input from "@/models/Input";

export async function GET(req) {
  try {
    await dbconnection();
    const { searchParams } = new URL(req.url);
    const verificationCode = searchParams.get('code');

    if (!verificationCode) {
      return new Response(JSON.stringify({ message: "Verification code is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Find the user by verification code
    const user = await Input.findOne({ verificationCode });

    if (!user) {
      return new Response(JSON.stringify({ message: "Invalid or expired verification code" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Verification successful, delete the verification code or mark the user as verified
    await Input.findOneAndDelete({ verificationCode });

    // Redirect to homepage
    return new Response(null, {
      status: 302,
      headers: { Location: '/' },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
