"use client";

import { useEffect, useRef } from "react";
import { teamMembers } from "@/data/team-member";
import TeamMemberCard from "../components/TeamMemberCard";

function Page() {
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
      <section className="snap-start min-h-[calc(100vh-64px)] flex items-center justify-center w-full bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">
                Innovation Architects
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The brilliant minds shaping our technological future
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <TeamMemberCard
                  key={member.id}
                  {...member}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
