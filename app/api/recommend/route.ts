import { NextResponse } from "next/server";
import { loadNwaSpots } from "@/lib/parseKml";
import { distanceKm } from "@/lib/geo";
import { model } from "@/api/gemini"; // your existing Gemini setup

export async function POST(req: Request) {
  const { userLat, userLng, prompt } = await req.json();

  const spots = await loadNwaSpots();

  const nearby = spots.filter(
    s => distanceKm(userLat, userLng, s.lat, s.lng) <= 10
  );

  const geminiPrompt = `
You are a local guide for Northwest Arkansas.

User request:
"${prompt}"

Nearby places from a curated map:
${JSON.stringify(nearby, null, 2)}

Recommend 2–3 places and explain why.
`;

  const result = await model.generateContent(geminiPrompt);

  return NextResponse.json({
    recommendations: result.response.text()
  });
}
