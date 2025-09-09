"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // ✅ Hamburger + Close icons
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { cn } from "../lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // ✅ mobile menu state

  const links = [
    { href: "/", label: "Portfolio" },
    { href: "/tutorials", label: "Tutorials" },
    { href: "/articles", label: "Articles" },
    { href: "/component", label: "Components" },
  ];

  const recentSearches = [
    "Sarvasva Capital",
    "Web Design",
    "Dashboard UI",
    "Ecommerce",
  ];
  const categories = [
    "E-Commerce",
    "Finance",
    "Education",
    "SAAS",
    "Travelling",
    "Real Estate",
  ];
  const projects = [
    { title: "Sarvasva Capital", image: "/sample.png" },
    { title: "Sarvasva Capital", image: "/sample.png" },
    { title: "Sarvasva Capital", image: "/sample.png" },
    { title: "Sarvasva Capital", image: "/sample.png" },
    { title: "Sarvasva Capital", image: "/sample.png" },
  ];

  return (
    <nav className="text-Primary main-container mt-[16px] md:mt-[28px]">
      <div className="flex w-full items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-[5.5px] text-[15.62px] md:gap-x-2 md:text-[22.5px]"
        >
          <span className="font-extrabold">THE</span>
          <span className="font-medium">HONEST</span>
          <span className="font-light">RESOURCES</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-x-[22px] text-center md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition",
                pathname === link.href
                  ? "text-[16px] font-semibold"
                  : "text-[14px] font-normal",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Search */}
        <Dialog>
          <div className="block md:hidden">
            <DialogTrigger asChild>
              <div className="cursor-pointer p-1">
                <Image
                  src="/search.png"
                  alt="Search Icon"
                  width={21}
                  height={21}
                />
              </div>
            </DialogTrigger>
          </div>

          <div className="hidden md:block">
            <DialogTrigger asChild>
              <div className="relative flex cursor-pointer">
                <Input
                  type="text"
                  placeholder="Search.."
                  className="w-full cursor-pointer rounded-[6px] border-[0.5px] border-[rgba(26,26,26,0.5)] py-2 pl-8 text-[14px] font-normal text-black placeholder-gray-400"
                  readOnly
                />
                <div className="pointer-events-none absolute top-1/2 left-2 -translate-y-1/2 transform">
                  <Image
                    src="/search.png"
                    alt="Search Icon"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </DialogTrigger>
          </div>

          <DialogContent
            className={cn(
              "rounded-2xl bg-white p-6 shadow-lg sm:max-w-4xl",
              "data-[state=open]:animate-in data-[state=closed]:animate-out",
              "duration-500 ease-in-out",
              "data-[state=open]:slide-in-from-top-10 data-[state=closed]:slide-out-to-top-10",
            )}
          >
            <DialogHeader>
              <DialogTitle className="sr-only">Search</DialogTitle>
            </DialogHeader>

            <div className="relative">
              <Input
                type="text"
                placeholder="Search.."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                className="text-Primary/90 rounded-[8px] border-[0.5px] p-[10px] pr-3 pl-[60px] text-[18px]"
              />
              <div className="pointer-events-none absolute top-1/2 left-[10px] -translate-y-1/2 transform font-normal">
                <Image
                  src="/search.png"
                  alt="Search Icon"
                  width={20}
                  height={20}
                />
              </div>
            </div>

            {/* Recent Searches */}
            <div className="mt-6">
              <h3 className="font-barlow mb-4 text-[14px] font-normal text-[#332C2C]/60">
                Recent Searches
              </h3>
              <div className="flex items-center gap-4">
                {recentSearches.map((item) => (
                  <span
                    key={item}
                    className="font-barlow rounded-full bg-[#FBFBFB] px-3 py-2 text-[14px] text-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="mt-6">
              <h3 className="font-barlow mb-4 text-[14px] font-normal text-[#332C2C]/60">
                Categories
              </h3>
              <div className="flex flex-wrap gap-4">
                {categories.map((cat) => (
                  <div
                    key={cat}
                    className="flex flex-1 cursor-pointer items-center justify-center rounded-lg bg-[#FBFBFB] p-4 text-center text-[14px] font-medium text-gray-800 hover:bg-gray-100"
                  >
                    {cat}
                  </div>
                ))}
              </div>
            </div>

            {/* Latest Projects */}
            <div className="mt-6">
              <h3 className="font-barlow mb-4 text-[14px] font-normal text-[#332C2C]/60">
                Latest Projects
              </h3>
              <div className="flex gap-4">
                {projects.map((proj, i) => (
                  <div key={i} className="flex-1">
                    <div className="relative h-[100px] w-full overflow-hidden rounded-lg">
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-2 text-center text-sm font-medium">
                      {proj.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Mobile Hamburger Button */}
        <button
          className="ml-4 md:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white p-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-[5.5px] text-[15.62px] md:gap-x-2 md:text-[22.5px]"
            >
              <span className="font-extrabold">THE</span>
              <span className="font-medium">HONEST</span>
              <span className="font-light">RESOURCES</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-[16px] font-medium text-gray-600 hover:text-black"
            >
              Close
            </button>
          </div>

          <div className="mt-10 flex flex-col gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[18px] font-medium",
                  pathname === link.href && "text-black",
                )}
                onClick={() => setMobileMenuOpen(false)} // close after click
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Divider */}
      <div
        className="mt-[16px] h-[1px] w-full opacity-50"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.6) 6.73%, rgba(0,0,0,0.6) 92.79%, rgba(255,255,255,0) 100%)",
        }}
      ></div>
    </nav>
  );
}
