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
  console.log('Reading KML from:', filePath);

  const kml = await fs.readFile(filePath, "utf-8");
  console.log('KML file size:', kml.length, 'characters');

  const parsed = await parseStringPromise(kml);

  // Spot coordinates are nested in the kml under <document><folder></documemt> 
  const folder = parsed?.kml?.Document?.[0]?.Folder?.[0];
  const placemarks = folder?.Placemark ?? [];

  console.log('Placemarks found:', placemarks.length);

  const spots = placemarks.map((p: any) => {
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

  console.log('Sample spot:', spots[0]);

  return spots;
}
