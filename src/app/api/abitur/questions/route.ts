import { NextResponse } from "next/server";

export async function GET() {
  // TODO: Auth-gated question fetch from Supabase
  return NextResponse.json({
    examId: "EXAM112",
    questions: [],
    dailyLimit: 10,
    remaining: 10,
  });
}
