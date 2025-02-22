"use client";

import { useEffect, useRef,useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaFacebookF, FaInstagram, FaRegLightbulb } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

import { useSponsors } from "@/lib/hooks/useSponsors";
import TeamMemberCard from "../components/TeamMemberCard";
import axios from 'axios';
import { PulseLoader } from "react-spinners";
function page() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sponsors = useSponsors();
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
     <section className="snap-start min-h-[calc(100vh-64px)] flex items-center justify-center w-full bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-8 py-15 ">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-blue-900 mb-4">
                  Innovation Architects
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  The brilliant minds shaping our technological future
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr ">
  {[
    "Dr.-S.-Vasanthadev-Suryakala",
    "Dr.T.-Rajalakshmi",
    "Vallabh Sumanth",
    "Tejasvin Kansal",
    "Harshith Kamal",
    "Naseeya Begum",
    "Daivik Reddy",
    "Karishma Prasad",
    "Aatesh Kumar Singh",
    "Kusum Gupta",
    "Yogesh Yelewad",
  ].map((name, index) => (
    <TeamMemberCard
      key={index}
      name={name}
      role={
        [
          "",
          "",
          "Chairperson and AI ML Head",
          "Head of Operations and Electronics & IOT Domain Advisor",
          "Electronics and IOT Domain Head",
          "Secretary and Healthcare Domain Advisor",
          "Corporate Domain Head",
          "Healthcare Domain Head",
          "AI ML Advisor and Technical Head",
          "Corporate Domain Advisor",
          "Vice Chairperson",
        ][index]
      }
      image={`/t${index + 1}.jpeg`} 
      socials={[
        { icon: SiLinkedin, url: "#" },
        { icon: SiGithub, url: "#" },
        { icon: FaXTwitter, url: "#" },
      ]}
    />
  ))}
</div>

            </div>
          </div>
        </section>
    </div>
  )
}

export default page
