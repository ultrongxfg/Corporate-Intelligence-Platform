import { NextResponse } from "next/server";
import type { ApiErrorResponse, ApiResponse } from "@/types/company";

export function apiSuccess<T>(data: T, status = 200) {
  const body: ApiResponse<T> = { data };
  return NextResponse.json(body, { status });
}

export function apiError(message: string, status: number) {
  const body: ApiErrorResponse = { error: message };
  return NextResponse.json(body, { status });
}
