import dbconnection from "@/dbconfig/db";
import Input from "@/models/Input";
import nodemailer from "nodemailer"; // Import nodemailer to send emails
import crypto from "crypto"; // To generate random verification codes

export async function POST(req) {
  try {
    await dbconnection();
    const { input } = await req.json();

    if (!input) {
      return new Response(JSON.stringify({ message: "Input is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Generate a verification code
    const verificationCode = crypto.randomBytes(16).toString("hex");

    // Save email and verification code to the database
    const userInput = new Input({ input, verificationCode });
    await userInput.save();

    // Send email with the verification code
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: input, // Send to the user's email
      subject: 'Email Verification',
      text: `Please verify your email by clicking the link: ${process.env.BASE_URL}/api/verify?code=${verificationCode}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Verification email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
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
