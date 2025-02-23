"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-gray-900">
            <Image
              src="/logo-text.png"
              alt="AAKASH RESEARCH LABS"
              width={300}
              height={300}
              className="w-48 md:w-48 lg:w-64"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center md:gap-5 lg:gap-10 md:flex">
          <Link href="/" className={"relative text-md font-bold text-gray-900 hover:text-gray-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"}>
            Home
          </Link>
          <Link href="/domain" className={"relative text-md font-bold text-gray-900 hover:text-gray-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"}>
            Domains
          </Link>
          <Link href="/project" className={"relative text-md font-bold text-gray-900 hover:text-gray-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"}>
            Projects
          </Link>
          <Link href="/event" className={"relative text-md font-bold text-gray-900 hover:text-gray-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"}>
            Events
          </Link>
          <Link href="/blog" className={"relative text-md font-bold text-gray-900 hover:text-gray-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"}>
            Blog
          </Link>
          <Link href="/team" className={"relative text-md font-bold text-gray-900 hover:text-gray-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"}>
            Team
          </Link>
          <Link href="/join-us">
            <Button className="ml-4">Join us</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="sr-only">Main Navigation</SheetTitle>
              <div className="flex flex-col gap-4 pt-6">
                <Link
                  href="/"
                  className="text-sm font-medium text-gray-900 hover:text-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                <Link
                  href="/domian"
                  className="text-sm font-medium text-gray-900 hover:text-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  Domains
                </Link>

                <Link
                  href="/project"
                  className="text-sm font-medium text-gray-900 hover:text-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  Project
                </Link>

                <Link
                  href="/event"
                  className="text-sm font-medium text-gray-900 hover:text-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  Events
                </Link>

                <Link
                  href="/team"
                  className="text-sm font-medium text-gray-900 hover:text-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  Team
                </Link>

                <Link
                  href="/blog"
                  className="text-sm font-medium text-gray-900 hover:text-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                {/* Other navigation links */}
                <Link href="/join-us">
                  <Button
                    className="mt-4 w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    Join us
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
