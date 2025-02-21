<<<<<<< HEAD
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaFacebookF, FaInstagram, FaRegLightbulb } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { SponsorsGrid } from "./components/SponsorsGrid";
import { useSponsors } from "@/lib/hooks/useSponsors";
import TeamMemberCard from "./components/TeamMemberCard";
=======
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Link from "next/link";
>>>>>>> main

export default function Home() {
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
<<<<<<< HEAD
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
                  <Button className="bg-white text-blue-900 hover:bg-blue-100 px-3 py-2 md:px-8 md:py-6 text-lg font-semibold rounded-xl shadow-lg transition-all">
                    Explore Domains
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 bg-transparent border-white text-white hover:bg-white/10 hover:text-white px-3 py-2 md:px-8 md:py-6 text-lg font-semibold rounded-xl"
                  >
                    Join Our Team
                  </Button>
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
                  src="/1.jpg"
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
                  Upcoming Events
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Join our innovation-driven workshops, hackathons, and tech
                  talks
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[1, 2].map((event) => (
                  <div
                    key={event}
                    className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="flex gap-6">
                      <div className="text-center">
                        <div className="bg-blue-100 text-blue-900 px-6 py-4 rounded-xl">
                          <p className="text-3xl font-bold">24</p>
                          <p className="text-sm font-medium">JAN</p>
                        </div>
                        <p className="mt-2 text-gray-500">10:00 AM</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-blue-900 mb-2">
                          ARL HackFest 2024
                        </h3>
                        <p className="text-gray-600 mb-4">
                          36-hour innovation marathon focusing on sustainable
                          tech solutions
                        </p>
                        <div className="flex items-center gap-4">
                          <Button>Register Now</Button>
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
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="snap-start min-h-[calc(100vh-64px)] flex items-center justify-center w-full bg-white">
          <div className="w-full px-4 sm:px-6 lg:px-8 py-15">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-blue-900 mb-4">
                  Innovation Architects
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  The brilliant minds shaping our technological future
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
                {[1, 2, 3, 4].map((member) => (
                  <TeamMemberCard
                    key={member}
                    name={
                      [
                        "Dr. Anika Patel",
                        "Rohan Verma",
                        "Sneha Gupta",
                        "Arjun Khanna",
                      ][member % 4]
                    }
                    role={
                      [
                        "Lead AI Researcher",
                        "IoT Architect",
                        "Healthcare Lead",
                        "Creative Director",
                      ][member % 4]
                    }
                    image={`/1.jpg`}
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

        {/* Contact Section */}
        <section className="snap-start min-h-[calc(100vh-64px)] flex items-center justify-center w-full bg-gradient-to-br from-blue-900 to-indigo-900">
          <div
            ref={(el) => {
              sectionsRef.current[6] = el;
            }}
            className="w-full transform transition-all duration-1000 ease-out px-4 sm:px-6 lg:px-8 py-20 origin-center"
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

              <form className="bg-white p-8 rounded-xl shadow-2xl">
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  <Button className="w-full py-6 text-lg bg-blue-900 hover:bg-blue-800">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
=======
   <>
   <Navbar />
   {/* hero */}
   <div className="flex justify-around items-center mt-20">
    <div className="">
      <div className="social flex gap-3">
        <a href="/"><img className="h-10" src="/facebook.png" alt="" /></a>
        <a href="/"> <img className="h-10" src="/twitter.png" alt="" /></a>
        <a href="/">  <img className="h-10" src="/insta.png" alt="" /></a>
        <a href="/"> <img className="h-10" src="/website.png" alt="" /></a>
      </div>
      <p className="font-bold text-7xl darkblue ">Aakash</p>
      <p className="font-bold text-7xl darkblue">Research Labs</p>
      <div className="flex gap-5 mt-5">
      <Link className='bgdarkblue text-white px-7 py-2 font-bold rounded-lg' href={"/"}>Explore Domains</Link>
      <Link className='bgdarkblue text-white px-7 py-2 font-bold rounded-lg' href={"/"}>Join US</Link>
      </div>
    </div>
    <div>
      <img src="/logo1.png" className="h-96" alt="" />
    </div>
   </div>

   {/* 2nd */}
   <div className="offwhite">
    <p className="text-center font-bold text-4xl darkblue mt-8 pt-10">About Aakash Research Labs</p>
    <p className="text-center font-semibold text-xl  pt-8 px-20" style={{color:"#6C6C6C"}}>Aakash Research Labs (ARL) is a student-led innovation hub dedicated to AI/ML, IoT, Electronics, Healthcare, Technical, Creatives and Corporate. We bridge the gap between research and real-world applications through hands-on projects, collaborations, and technical excellence.</p>

    <p className="text-center font-semibold text-xl  pt-10 px-20"  style={{color:"#6C6C6C"}}>" Explore, Learn, Excel "</p>
    <div className="flex justify-center pt-8 pb-10">
  <Link className='bgdarkblue text-white px-7 py-2 font-bold rounded-lg' href={"/"}>Learn more</Link>
</div>

   </div>

   {/* 3rd */}

   <div className="flex justify-around items-center pt-10 pb-10">
    <div>
      <p className="font-semibold text-6xl darkblue ">Our Mission </p>
      <p className="font-semibold text-6xl darkblue ">& Vision</p>
      <p className="w-96  mt-5">To foster innovation, create cutting edge
solutions, and contribute to technological
advancement by supporting research and
development activities among students.</p>
    </div>
    <div>
      <img className="h-96" src="/1.jpg" alt="" />
    </div>
   </div>

   {/* 4th */}

   <div className="offwhite p-10 flex flex-col items-center justify-center">
   <p className="font-semibold text-6xl darkblue ">Our past </p>
   <p className="font-semibold text-6xl darkblue ">sponsors and collabs</p>
   <img src="/sponsors.png" className="h-72 mt-10 p-4" alt="" />
   </div>

   {/* 5th */}

   <div className="py-10 px-10">
   <p className="font-semibold text-6xl darkblue ">Our Projects </p>
<div className="py-10 flex flex-wrap gap-5 ">
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src="/2.jpeg" alt="Noteworthy technology acquisitions 2021" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Penguin OS
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Penguin OS is a user-friendly, Linux-based operating system known for its stability, security, and open-source nature. It provides an intuitive interface and supports a wide range of applications for everyday tasks.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src="/2.jpeg" alt="Noteworthy technology acquisitions 2021" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Penguin OS
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Penguin OS is a user-friendly, Linux-based operating system known for its stability, security, and open-source nature. It provides an intuitive interface and supports a wide range of applications for everyday tasks.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src="/2.jpeg" alt="Noteworthy technology acquisitions 2021" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Penguin OS
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Penguin OS is a user-friendly, Linux-based operating system known for its stability, security, and open-source nature. It provides an intuitive interface and supports a wide range of applications for everyday tasks.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
    
</div>
  
   </div>

   {/* 6th */}

   <div className="py-10 px-10 offwhite">
   <p className="font-semibold text-6xl darkblue ">Events </p>
   <p className="font-semibold text-6xl darkblue ">Corner </p>
<div className="py-10 flex flex-wrap gap-5 ">
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src="/2.jpeg" alt="Noteworthy technology acquisitions 2021" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Tekmux 2024
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src="/2.jpeg" alt="Noteworthy technology acquisitions 2021" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Tekmux 2024
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src="/2.jpeg" alt="Noteworthy technology acquisitions 2021" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Tekmux 2024
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
    
</div>
  
   </div>

   {/* 7th */}

   <div className="p-10">
   <p className="font-semibold text-6xl darkblue text-center ">Meet the team behind ARL</p>

   </div>

   {/* 8th */}
<Form />
  
   <Footer />
   </>
>>>>>>> main
  );
}
