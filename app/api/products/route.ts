import path from "path";
import { promises as fs } from 'fs';
import { NextResponse } from "next/server";
import consola from "consola";
export const dynamic = 'force-dynamic'
const wait = (t: number) => new Promise((resolve, reject) => setTimeout(resolve, t))
export async function GET() {
  consola.log("Fetching...");
  await wait(2000)
  const filePath = path.join(process.cwd(), '/app/data/products.json');
  const content = await fs.readFile(filePath, 'utf-8');
  return NextResponse.json(JSON.parse(content), { status: 200 })
}