"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface SponsorScrollProps {
  sponsors: string[];
  direction?: "left" | "right";
  speed?: number;
}

export function SponsorScroll({
  sponsors,
  direction = "left",
  speed = 30,
}: SponsorScrollProps) {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    setItems([...sponsors, ...sponsors]); // Duplicate items for seamless scrolling
  }, [sponsors]);

  return (
    <div className="relative flex overflow-hidden group">
      {/* Scrolling container */}
      <div
        className={`flex gap-3 xs:gap-4 sm:gap-6 md:gap-8 items-center ${
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((sponsor, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center w-[120px] xs:w-[150px] sm:w-[180px] md:w-[200px] 
                       h-[60px] xs:h-[75px] sm:h-[90px] md:h-[100px] 
                       bg-white/5 backdrop-blur-sm rounded-lg p-2 xs:p-3 sm:p-4 
                       hover:bg-white/10 transition-colors"
          >
            <Image
              src={`/sponsors/${sponsor}`}
              alt={`Sponsor ${sponsor}`}
              width={150}
              height={75}
              className="w-auto h-auto max-h-full max-w-[80%] object-contain filter grayscale transition-all duration-300 hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
