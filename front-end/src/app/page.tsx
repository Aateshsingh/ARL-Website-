"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaFacebookF, FaInstagram, FaRegLightbulb } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { SponsorsGrid } from "./components/SponsorsGrid";
import { useSponsors } from "@/lib/hooks/useSponsors";
import TeamMemberCard from "./components/TeamMemberCard";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import { events } from "@/data/events";
import { teamMembers } from "@/data/team-member";

export default function Home() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sponsors = useSponsors();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true); // Start loading when form is being submitted

    try {
      const response = await axios.post(
        "http://localhost:8000/api/email/send",
        formData
      );
      alert(response.data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send message!");
    } finally {
      setLoading(false); // Stop loading after submission is complete
    }
  };
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
      <div className="snap-y snap-mandatory h-[calc(100vh-64px)] overflow-y-auto scroll-smooth">
        {/* Hero Section */}
        <section className="snap-start min-h-[calc(100vh-64px)] flex items-center justify-center w-full bg-gradient-to-br from-blue-300 via-blue-200 to-blue-400">
          <div className="w-full px-4 sm:px-6 lg:px-8 pb-5">
            <div className="flex flex-col-reverse md:flex-row justify-around items-center max-w-7xl mx-auto gap-8 md:gap-12">
              <div className="flex flex-col items-center md:items-start gap-5 text-center md:text-left mt-5 md:mt-0">
                <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
                  AAKASH
                  <br />
                  <span className="bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent">
                    RESEARCH LABS
                  </span>
                </h1>

                <p className="text-xl text-blue-900 max-w-2xl mt-4">
                  Bridging innovation between academic research and real-world
                  technological solutions
                </p>

                <div className="flex flex-col md:flex-row gap-4 mt-8">
                <Link href={"/domain"}>
                  <Button className="bg-white text-blue-900 hover:bg-blue-100 px-3 py-2 md:px-8 md:py-6 text-lg font-semibold rounded-xl shadow-lg transition-all">
                    Explore Domains
                  </Button>
                  </Link>
                  <Link href={"/join-us"}>
                    <Button
                      variant="outline"
                      className="border-2 bg-transparent border-white text-white hover:bg-white/10 hover:text-white px-3 py-2 md:px-8 md:py-6 text-lg font-semibold rounded-xl"
                    >
                      Join Our Team
                    </Button>
                  </Link>
                </div>

                <div className="flex gap-6 mt-5 items-center">
                  <div className="flex gap-4">
                    {[FaFacebookF, FaXTwitter, FaInstagram, SiGithub].map(
                      (Icon, i) => (
                        <Link
                          key={i}
                          href="#"
                          className="p-3 bg-blue-500/10 rounded-full hover:bg-blue-500/20 transition-colors"
                        >
                          <Icon className="w-6 h-6 text-blue-500" />
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="relative group flex-shrink-0">
                <Image
                  src="/arl-logo.png"
                  alt="Logo"
                  width={400}
                  height={400}
                  className="w-48 sm:w-64 md:w-80 transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="snap-start min-h-[calc(100vh-64px)] flex items-center justify-center w-full bg-white">
          <div
            ref={(el) => {
              sectionsRef.current[1] = el;
            }}
            className="w-full transform transition-all duration-1000 ease-out px-4 sm:px-6 lg:px-8 py-15 origin-center"
          >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold text-blue-900">
                    About Aakash Research Labs
                  </h2>
                  <div className="h-1.5 w-24 bg-blue-600 rounded-full" />
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  ARL is a premier student-led innovation hub focused on AI/ML,
                  IoT, Healthcare Technologies, and Creative Solutions. We
                  combine academic rigor with practical implementation through:
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-600">
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">
                      15+
                    </h3>
                    <p className="text-gray-600">Active Research Projects</p>
                  </div>
                  <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-600">
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">
                      92%
                    </h3>
                    <p className="text-gray-600">Project Implementation Rate</p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Our interdisciplinary approach connects students across
                  engineering, medical, and design disciplines to solve
                  real-world challenges through technological innovation.
                </p>
              </div>

              <div className="relative aspect-square overflow-hidden rounded-xl group hover:scale-95 transition-transform">
                <Image
                  src={`/1.jpg`}
                  alt="Lab activity"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="snap-start min-h-[calc(100vh-64px)] flex items-center justify-center w-full bg-gray-50">
          <div
            ref={(el) => {
              sectionsRef.current[2] = el;
            }}
            className="w-full transform transition-all duration-1000 ease-out px-4 sm:px-6 lg:px-8 py-20 origin-center"
          >
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
              <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden border-8 border-white shadow-2xl">
                <Image
                  src="/vision.jpeg"
                  alt="Visionary technology"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-12">
                <div className="space-y-6">
                  <h3 className="text-4xl font-bold text-blue-900">
                    Our Guiding Principles
                  </h3>
                  <div className="h-1 w-24 bg-blue-600 rounded-full" />
                </div>

                <div className="space-y-8">
                  <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <h4 className="text-2xl font-semibold text-blue-900 mb-3">
                      Mission
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      To empower student innovators through cutting-edge
                      research infrastructure, industry collaborations, and
                      multidisciplinary projects that solve tomorrow's
                      challenges.
                    </p>
                  </div>

                  <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <h4 className="text-2xl font-semibold text-blue-900 mb-3">
                      Vision
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Becoming Asia's premier student-led research ecosystem
                      driving technological breakthroughs and nurturing future
                      tech leaders by 2030.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
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
                  Innovation Portfolio
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

        {/* Sponsors Section */}
        <section className="snap-start min-h-[calc(100vh-64px)] flex items-center justify-center w-full bg-gray-50">
          <div
            ref={(el) => {
              sectionsRef.current[7] = el;
            }}
            className="w-full transform transition-all duration-1000 ease-out px-4 sm:px-6 lg:px-8 py-20 origin-center"
          >
            <div className="max-w-7xl mx-auto text-center">
              <h3 className="font-bold text-4xl text-blue-900 mb-16">
                Our Valued Partners
              </h3>
              <SponsorsGrid sponsors={sponsors} />
            </div>
          </div>
        </section>

        {/* Events Section */}
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

              <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 gap-8">
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
                                  .toLocaleString("default", {
                                    month: "short",
                                    year: undefined,
                                  })
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

        {/* Team Section */}
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

              <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">
                {teamMembers
                  .filter((member) => [1, 2, 3, 4].includes(member.id))
                  .map((member) => (
                    <TeamMemberCard key={member.id} {...member} />
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="snap-start min-h-[calc(100vh-64px)] flex items-center justify-center w-full bg-gradient-to-br from-blue-900 to-indigo-900">
          <div
            ref={(el) => {
              sectionsRef.current[6] = el;
            }}
            className="w-full transform transition-all duration-1000 ease-out px-4 sm:px-6 lg:px-8 py-15 origin-center"
          >
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-white">
                <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
                <p className="text-xl mb-8 max-w-xl">
                  Have a groundbreaking idea or want to collaborate? Let's
                  connect and build the future together!
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <SiLinkedin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium">Connect Professionally</p>
                      <p className="text-blue-200">
                        linkedin.com/company/aakash-research
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <FaXTwitter className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium">Follow Updates</p>
                      <p className="text-blue-200">@aakashresearch</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <SiGithub className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium">Explore Code</p>
                      <p className="text-blue-200">
                        github.com/aakash-research
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <form
                className="bg-white p-8 rounded-xl shadow-2xl"
                onSubmit={handleSubmit}
              >
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {loading ? (
                    <div className="flex justify-center">
                      <PulseLoader
                        color="#36d7b7"
                        loading={loading}
                        size={15}
                      />
                    </div>
                  ) : (
                    <Button
                      className="w-full py-6 text-lg bg-blue-900 hover:bg-blue-800"
                      type="submit"
                    >
                      Send Message
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
