'use client'
import React from 'react'
import { useEffect, useRef } from "react";
import Image from "next/image";


function page() {
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
    <div>
      {/* <Navbar /> */}
      <div className=" ">

 <section className="snap-start min-h-[calc(100vh-64px)] flex items-center justify-center w-full bg-white">
          <div
            ref={(el) => {
              sectionsRef.current[3] = el;
            }}
            className="w-full transform transition-all duration-1000 ease-out px-4 sm:px-6 lg:px-8 py-20 origin-center"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-blue-900 mb-4">
                  Events
                </h2>
                
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((project) => (
                  <div
                    key={project}
                    className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all"
                  >
                    <div className="h-48 bg-gray-100 rounded-t-xl overflow-hidden">
                      <Image
                        // src={`/project-${project}.jpg`}
                        src={`/1.jpg`}
                        alt="Project"
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-2">
                        AI-Powered Healthcare Diagnostic
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Revolutionizing early disease detection using deep
                        learning
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["AI/ML", "Healthcare", "Python"].map((tag) => (
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
                ))}
              </div>
            </div>
          </div>
        </section>
  
   </div>
    </div>
  )
}

export default page
