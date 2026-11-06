import { NextResponse } from "next/server";
import { submitContactMessage } from "@/lib/repositories/contactRepository";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await submitContactMessage(body);

    const statusCode = result.success ? 200 : result.configured ? 400 : 503;
    return NextResponse.json(result, { status: statusCode });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json(
      {
        success: false,
        configured: false,
        error: `Server processing error: ${errorMsg}`,
      },
      { status: 500 }
    );
  }
}
