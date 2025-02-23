"use client";
import { useState } from "react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { events } from "@/data/events";

function Page() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

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
    <div>
      <div className=" ">
        <section className="snap-start min-h-[calc(100vh-64px)] flex items-center justify-center w-full bg-gray-50">
          <div
            ref={(el) => {
              sectionsRef.current[4] = el;
            }}
            className="w-full transform transition-all duration-1000 ease-out px-4 sm:px-6 lg:px-8 py-20 origin-center"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-blue-900 mb-4">
                  Innovation Events
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Engage with our tech community through impactful events
                </p>

                {/* Tabs */}
                <div className="flex justify-center mt-8 space-x-4">
                  <Button
                    variant={activeTab === "upcoming" ? "default" : "ghost"}
                    className={`rounded-full px-8 py-3 text-lg ${
                      activeTab === "upcoming"
                        ? "bg-blue-900 text-white"
                        : "text-gray-600 hover:bg-blue-50"
                    }`}
                    onClick={() => setActiveTab("upcoming")}
                  >
                    Upcoming
                  </Button>
                  <Button
                    variant={activeTab === "past" ? "default" : "ghost"}
                    className={`rounded-full px-8 py-3 text-lg ${
                      activeTab === "past"
                        ? "bg-blue-900 text-white"
                        : "text-gray-600 hover:bg-blue-50"
                    }`}
                    onClick={() => setActiveTab("past")}
                  >
                    Past Events
                  </Button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {events
                  .filter((event) => event.type === activeTab)
                  .map((event) =>
                    activeTab === "upcoming" ? (
                      // Upcoming Event Card
                      <div
                        key={event.id}
                        className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <div className="flex gap-6">
                          <div className="text-center">
                            <div className="bg-blue-100 text-blue-900 px-6 py-4 rounded-xl h-full flex flex-col justify-center items-center">
                              <p className="text-3xl font-bold">
                                {new Date(event.date).getDate()}
                              </p>
                              <p className="text-sm font-medium">
                                {new Date(event.date)
                                  .toLocaleString("default", { month: "short" })
                                  .toUpperCase()}
                              </p>
                            </div>
                            <p className="mt-2 text-gray-500">
                              {new Date(event.date).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </p>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-blue-900 mb-2">
                              {event.title}
                            </h3>
                            <p className="text-gray-600 mb-4">
                              {event.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {event.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center gap-4">
                              <Button>
                                {activeTab === "upcoming"
                                  ? "Register Now"
                                  : "View Recap"}
                              </Button>
                              <Link
                                href="#"
                                className="text-blue-600 hover:underline"
                              >
                                Learn More
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Past Event Card
                      <div
                        key={event.id}
                        className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all"
                      >
                        <div className="h-48 bg-gray-100 rounded-t-xl overflow-hidden">
                          {event.image ? (
                            <Image
                              src={event.image}
                              alt={event.title}
                              width={400}
                              height={300}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-blue-100">
                              <p className="text-3xl font-bold">
                                {new Date(event.date).getDate()}
                              </p>
                              <p className="text-lg text-blue-800">
                                {new Date(event.date)
                                  .toLocaleString("default", { month: "short" })
                                  .toUpperCase()}
                              </p>
                              <p className="text-sm text-blue-600 mt-2">
                                {new Date(event.date).toLocaleTimeString([], {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </p>
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-blue-900 mb-2">
                            {event.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {event.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {event.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )
                  )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Page;
