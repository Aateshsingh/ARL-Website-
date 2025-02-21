"use client"

import { useEffect, useState } from "react"

export default function Loading() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 1
      })
    }, 20)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <div className="w-full max-w-md px-4">
        {/* Logo */}
        <div className="flex justify-center mb-8 animate-pulse">
          <div className="text-4xl sm:text-5xl font-bold text-blue-900">ARL</div>
        </div>

        {/* Progress Bar Container */}
        <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
          {/* Progress Bar */}
          <div
            className="h-full bg-blue-700 transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading Text */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">Loading{".".repeat((progress % 3) + 1)}</p>
          <p className="text-xs text-blue-700 mt-2">{progress}%</p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-700/20 to-transparent animate-shimmer" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-700/20 to-transparent animate-shimmer" />
      </div>
    </div>
  )
}
