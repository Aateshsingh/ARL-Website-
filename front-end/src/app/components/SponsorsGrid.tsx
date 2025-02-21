"use client"

import { useEffect, useState } from "react"
import { SponsorScroll } from "./SponsorsScroll"

interface SponsorsGridProps {
  sponsors: string[]
  targetPerRow?: number
  minPerRow?: number
}

export function SponsorsGrid({ 
  sponsors, 
  targetPerRow = 5,
  minPerRow = 4
}: SponsorsGridProps) {
  const [rows, setRows] = useState<string[][]>([])

  useEffect(() => {
    const calculateGroups = () => {
      const total = sponsors.length
      if (total === 0) return []

      // Calculate optimal groups
      let perRow = targetPerRow
      const remainder = total % perRow
      
      // Adjust if remainder is too small but there's more than one row
      if (remainder > 0 && remainder < minPerRow && total > perRow) {
        perRow = Math.max(minPerRow, Math.floor(total / Math.ceil(total / perRow)))
      }

      const groups: string[][] = []
      for (let i = 0; i < sponsors.length; i += perRow) {
        const chunk = sponsors.slice(i, i + perRow)
        // Only add chunks that meet minimum size or are the final chunk
        if (chunk.length >= minPerRow || i + perRow >= sponsors.length) {
          groups.push(chunk)
        }
      }
      
      return groups
    }

    setRows(calculateGroups())
  }, [sponsors, targetPerRow, minPerRow])

  return (
    <div className="flex flex-col gap-10">
      {rows.map((rowSponsors, index) => (
        <SponsorScroll
          key={index}
          sponsors={rowSponsors}
          direction={index % 2 === 0 ? "left" : "right"}
          speed={35 + index * 5}
        />
      ))}
    </div>
  )
}