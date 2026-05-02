import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  req: Request,
  context: { params: Promise<{ folder: string }> }
) {
  try {
    const { folder } = await context.params;

    const folderPath = path.join(process.cwd(), "public", "images", folder);

    console.log("Requested folder:", folder);
    console.log("Looking inside:", folderPath);

    if (!fs.existsSync(folderPath)) {
      console.log("Folder not found:", folderPath);

      return NextResponse.json({
        images: [],
        folderPath,
        message: "Folder not found",
      });
    }

    const files = fs
      .readdirSync(folderPath)
      .filter((file) => /\.(jpg|jpeg|png|webp|avif)$/i.test(file))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

    const images = files.map((file) => `/images/${folder}/${file}`);

    return NextResponse.json({ images });
  } catch (error) {
    console.error("Property images API error:", error);

    return NextResponse.json(
      {
        images: [],
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
} 