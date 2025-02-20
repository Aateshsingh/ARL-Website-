import { useEffect, useState } from "react"

export function useSponsors() {
  const [sponsors, setSponsors] = useState<string[]>([])

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await fetch('/api/sponsors')
        const data = await response.json()
        setSponsors(data.sponsors)
      } catch (error) {
        console.error('Failed to fetch sponsors:', error)
      }
    }

    fetchSponsors()
  }, [])

  return sponsors
}
