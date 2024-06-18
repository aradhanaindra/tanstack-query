import path from "path";
import { promises as fs } from 'fs';
import { NextResponse } from "next/server";

export async function GET() {
  const filePath = path.join(process.cwd(), '/app/data/optimistic-update-products.json');
  const content = await fs.readFile(filePath, 'utf-8');
  return NextResponse.json(JSON.parse(content), { status: 200 })
}