import fs from "fs/promises";
import path from "path";
import { parseStringPromise } from "xml2js";

export type MapLocation = {
  name: string;
  description?: string;
  lat: number;
  lng: number;
  raw?: any;
};

export async function loadNwaSpots(): Promise<MapLocation[]> {
  const filePath = path.join(process.cwd(), "data", "nwa_spots.kml");
  const kml = await fs.readFile(filePath, "utf-8");

  const parsed = await parseStringPromise(kml);

  const placemarks =
    parsed?.kml?.Document?.[0]?.Placemark ?? [];

  return placemarks.map((p: any) => {
    const [lng, lat] = p.Point[0].coordinates[0]
      .trim()
      .split(",")
      .map(Number);

    return {
      name: p.name?.[0] ?? "Unnamed",
      description: p.description?.[0],
      lat,
      lng,
      raw: p
    };
  });
}
