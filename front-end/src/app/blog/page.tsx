"use client";

import React, { useEffect, useRef } from "react";
import EmblaCarousel from "./components/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "./components/embla.css";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ArticleCard from "./components/ArticleCard";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Page() {
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

  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    // Intersection Observer setup
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("scale-100");
            entry.target.classList.add("scale-90");

            sectionsRef.current
              .filter((section) => section && section !== entry.target)
              .forEach((section) => {
                section?.classList.remove("scale-90");
                section?.classList.add("scale-100");
              });
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: "-5% 0px",
      }
    );

    // Initialize observers and fetch sponsors
    sectionsRef.current.forEach((section) => {
      section?.classList.add("scale-100");
      section && observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <div className="snap-y snap-mandatory h-[calc(100vh-64px)] overflow-y-auto scroll-smooth">
        <section className="snap-start min-h-[calc(100vh-64px)] flex items-center justify-center w-full">
          <div
            className="w-full transform transition-all duration-1000 ease-out px-4 sm:px-6 lg:px-8 origin-center"
            ref={(el) => {
              sectionsRef.current[0] = el;
            }}
          >
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 justify-items-center items-center">
              <div className="lg:sticky lg:top-8 lg:h-fit">
                <header className="max-w-2xl mx-auto px-4 py-8 space-y-8 flex flex-col items-center justify-center text-center">
                  <div className="grid items-center justify-items-center gap-2">
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 items-center">
                      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-800">
                        ARL
                      </h1>
                      <Image
                        src="/arl-logo.png"
                        alt="ARL Logo"
                        width={120}
                        height={120}
                        className="w-24 md:w-32 transition-transform hover:scale-105"
                      />
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r to-blue-300 from-blue-800 bg-clip-text text-transparent">
                      BLOGSPOT
                    </h1>
                  </div>

                  <p className="text-xl text-blue-500 font-medium">
                    Because Even Innovators Need Inspiration
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
        </section>

        <section className="snap-start min-h-[calc(100vh-64px)] flex items-center justify-center w-full">
          <div
            className="w-full transform transition-all duration-1000 ease-out px-4 sm:px-6 lg:px-8 origin-center"
            ref={(el) => {
              sectionsRef.current[1] = el;
            }}
          >
            <div className="flex flex-col py-5">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 text-center">
                Latest <span className="text-blue-600">Innovations</span>
              </h2>

              <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </div>
          </div>
        </section>

        <section className="snap-start min-h-[calc(100vh-64px)] flex items-center justify-center w-full">
          <div
            className="w-full transform transition-all duration-1000 ease-out px-4 sm:px-6 lg:px-8 origin-center"
            ref={(el) => {
              sectionsRef.current[2] = el;
            }}
          >
            <div className="flex flex-col py-5">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 text-center">
                Tech <span className="text-blue-600">Breakthroughs</span>
              </h2>

              <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
