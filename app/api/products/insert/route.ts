import { NextRequest, NextResponse } from "next/server";
import fs from 'fs'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    fs.writeFile('./app/data/example.json', JSON.stringify(body, null, "  "), { flag: 'w+' }, (e) => console.log(e))
    return NextResponse.json({
      success: true
    }, {
      status: 200
    });
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