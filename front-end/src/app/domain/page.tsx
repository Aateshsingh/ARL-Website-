"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const domains = [
  {
    title: "AI/ML",
    description:
      "Pioneering the development of advanced intelligent systems by leveraging cutting-edge machine learning algorithms and sophisticated neural networks to drive innovation and enhance automation.",
    image: "/aiml.png",
    color: "bg-blue-100",
  },
  {
    title: "Electronics & IoT",
    description:
      "Designing and developing intelligent, smart-connected devices and embedded systems tailored for real-world applications, enabling seamless integration, enhanced functionality, and improved efficiency across various industries.",
    image: "/iot.png",
    color: "bg-green-100",
  },
  {
    title: "Healthcare Tech",
    description:
      "Innovating and developing state-of-the-art medical devices and advanced health monitoring systems to enhance patient care, improve diagnostics, and revolutionize healthcare solutions through cutting-edge technology.",
    image: "/healthcare.png",
    color: "bg-red-100",
  },
  {
    title: "Creative Tech",
    description:
      "Bridging the gap between technology and artistic expression by creating immersive and interactive installations that engage audiences, evoke emotions, and redefine the boundaries of digital creativity.",
    image: "/creatives.png",
    color: "bg-purple-100",
  },
  {
    title: "Core Technical",
    description:
      "Driving innovation in fundamental engineering solutions and industrial applications by developing cutting-edge technologies, optimizing processes, and enhancing efficiency across various sectors.",
    image: "/tech.png",
    color: "bg-yellow-100",
  },
  {
    title: "Corporate & PR",
    description:
      "Forging strategic partnerships and spearheading brand development in the tech industry to foster innovation, expand market presence, and drive sustainable growth.",
    image: "/pr.png",
    color: "bg-pink-100",
  },
];

export default function DomainsPage() {
  return (
    <div className="relative overflow-clip">
      <div className="snap-y h-[calc(100vh-64px)] overflow-y-auto scroll-smooth">
      {/* Domain Sections */}
      {domains.map((domain) => (
        <motion.section
          key={domain.title}
          className={`snap-start min-h-[calc(100vh-64px)] flex items-center justify-center w-full sticky top-0 ${domain.color}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <motion.div
                className="flex-1"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={domain.image}
                  alt={domain.title}
                  width={600}
                  height={600}
                  className="w-full max-w-xl object-contain"
                />
              </motion.div>

              <motion.div
                className="flex-1 space-y-6 flex flex-col justify-center items-center"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-5xl font-bold text-blue-900">
                  {domain.title}
                </h2>
                <p className="text-lg px-10 text-gray-600 leading-relaxed text-center">
                  {domain.description}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>
      ))}

      {/* Scroll Hint */}
      <motion.div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-gray-600">Scroll to explore domains</span>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full relative">
          <motion.div
            className="w-1 h-2 bg-gray-400 rounded-full absolute top-1 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
      </div>
    </div>
  );
}
