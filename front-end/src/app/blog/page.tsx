"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import EmblaCarousel from "./components/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "./components/embla.css";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ArticleCard from "./components/ArticleCard";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import useScrollSnap from "@/lib/hooks/useScrollSnap";

export default function Page() {
  const containerRef = useScrollSnap();
  const isLargeScreen =
    typeof window !== "undefined" && window.innerWidth >= 1024;

  const OPTIONS: EmblaOptionsType = { align: "start" };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const categories = [
    "Host in AI World",
    "Latest in Tech",
    "Healthcare Innovations",
    "Tech History",
    "Learn New",
    "News & Update",
  ];

  return (
    <>
    <Navbar />
    <div ref={isLargeScreen ? containerRef : null} className="w-full">
      <div className="scroll-item mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 justify-items-center items-center">
          <div className="lg:sticky lg:top-8 lg:h-fit">
            <header className="max-w-2xl mx-auto px-4 py-8 space-y-8 flex flex-col items-center justify-center text-center">
              <div className="grid items-center justify-items-center gap-2">
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 items-center">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-heading">
                    ARL{" "}
                  </h1>
                  <Image src={"arl-logo.svg"} alt={""} width={70} height={70} />
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-heading">
                  BLOGSPOT
                </h1>
              </div>

              <p className="text-center text-subheading text-lg md:text-xl font-bold">
                Because Even Nerds Need a Blog
              </p>

              <div className="w-auto grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                {categories.map((column, colIndex) => (
                  <div
                    key={colIndex}
                    className="space-y-2 sm:space-y-4 px-2 sm:px-5"
                  >
                    <Button
                      key={colIndex}
                      variant={colIndex % 2 == 0 ? "default" : "secondary"}
                      className="w-full"
                    >
                      {column}
                    </Button>
                  </div>
                ))}
              </div>

              <div className="relative w-[90%]">
                <Input
                  type="search"
                  placeholder="Search"
                  className="w-full py-2 border-2 border-gray-300 rounded-md focus:border-0"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-subheading w-5 h-5" />
              </div>
            </header>
          </div>

          <div className="w-full max-w-md mx-auto lg:mx-0">
            <ArticleCard
              title={"Inside Microsoft's quick embrace of DeepSeek"}
              imageUrl={"https://picsum.photos/2000/3000/?blur"}
            />
          </div>
        </div>
      </div>

      <div className="scroll-item p-5 pt-28 lg:py-5">
        <h1 className="text-lg md:text-3xl lg:text-5xl font-bold text-heading pb-10">
          On the move: our latest blogs
        </h1>

        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>

      <div className="scroll-item mx-auto p-5 pt-28 lg:py-5">
        <h1 className="text-lg md:text-3xl lg:text-5xl font-bold text-heading pb-10">
          Latest in Tech
        </h1>

        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
    </>
  );
}
