'use client'
import { useEffect, useRef } from "react";
import Image from "next/image";
function Page() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
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
  const projects = [
    {
      id: 1,
      title: 'Smart Cane for Blind',
      description: 'Navigate Life with Confidence',
      tags: ['Obstacle Detection', 'Real-Time Feedback', 'Navigational Assistance', 'Emergency Communication', 'Impact'],
      image: '/smartcane.jpeg',
    },
    {
      id: 2,
      title: 'OSTEOPOROSIS',
      description: 'Detection Using Custom CNN',
      tags: ['Custom CNN Architecture', 'High Accuracy', 'Scalable', 'Impact'],
      image: '/osteorobosis.jpeg',
    },
    {
      id: 3,
      title: 'Solar panel and Battery Maintenance Using IoT',
      description: '',
      tags: ['Solar Panel', 'IoT Sensor', 'Smart Automated System'],
      image: '/solar.jpeg',
    },
    {
      id: 4,
      title: 'Penguin OS',
      description: '',
      tags: ['Enhanced Security', 'Open-Source Alternatives', 'Optimized Performance', 'Results'],
      image: '/penguin.jpeg',
    },
  ];
  return (
    <div className="relative">
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
                      Projects
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                      Explore our groundbreaking projects pushing the boundaries of
                      technology
                    </p>
                  </div>
    
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="h-48 bg-gray-100 rounded-t-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
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
  );
}

export default Page;
