import { NextRequest, NextResponse } from "next/server";
import fs from 'fs'
export const dynamic = 'force-dynamic'
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    fs.writeFile('./app/data/optimistic-update-products.json', JSON.stringify(body, null, "  "), { flag: 'w+' },
      (e) => e)
    return NextResponse.json({
      success: true
    }, {
      status: 200
    })
  } catch (exception) {
    console.log(exception)
    return NextResponse.json({
      success: false,
      message: exception
    }, {
      status: 500
    });
  }

}