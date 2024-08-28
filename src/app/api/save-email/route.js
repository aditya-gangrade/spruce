import dbconnection from "@/dbconfig/db";
import Input from "@/models/Input";

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
    const userInput = new Input({ input });
    await userInput.save(); // Save the input
    return new Response(
      JSON.stringify({ message: "Email saved successfully" }),
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

export async function DELETE(req) {
  try {
    await dbconnection();
    const { input } = await req.json(); // Assuming you pass input to identify which entry to delete
    if (!input) {
      return new Response(JSON.stringify({ message: "Input is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
    // Find and delete the entry from the database
    const result = await Input.findOneAndDelete({ input });
    if (!result) {
      return new Response(
        JSON.stringify({ message: "No matching entry found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    return new Response(
      JSON.stringify({ message: "Email deleted successfully" }),
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
