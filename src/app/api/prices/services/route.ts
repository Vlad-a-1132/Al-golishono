import { NextResponse } from "next/server";
import { fetchPriceServices } from "@/lib/price-api";

export const dynamic = "force-dynamic";

export async function GET() {
  const result = await fetchPriceServices();

  if (!result.ok && result.data.length === 0) {
    return NextResponse.json(
      {
        ok: false,
        source: result.source,
        error: result.error ?? "Failed to load price services",
        data: [],
      },
      { status: 503 }
    );
  }

  return NextResponse.json({
    ok: true,
    source: result.source,
    data: result.data,
    ...(result.error ? { warning: result.error } : {}),
  });
}
