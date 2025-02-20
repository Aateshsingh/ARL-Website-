import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  const sponsorsDir = path.join(process.cwd(), 'public/sponsors')
  
  try {
    const files = fs.readdirSync(sponsorsDir)
    const sponsors = files.filter(file => file.toLowerCase().endsWith('.svg'))
    return NextResponse.json({ sponsors })
  } catch (error) {
    console.error("Error reading sponsors directory:", error)
    return NextResponse.json({ sponsors: [] }, { status: 500 })
  }
}