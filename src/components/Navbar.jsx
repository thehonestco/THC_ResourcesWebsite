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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // ✅ State for mobile menu
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

        {/* Right Section: Search + Hamburger */}

        <div className="flex items-center gap-4">
          {/* Search */}
          <Dialog>
            {/* Mobile search icon */}
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

            {/* Desktop search input */}
            <div className="hidden md:block">
              <DialogTrigger asChild>
                <div className="relative flex cursor-pointer">
                  <Input
                    id="navbar-search"
                    name="search"
                    type="text"
                    placeholder="Search.."
                    readOnly
                    className="w-[285px] cursor-pointer rounded-[6px] border-[0.5px] border-[rgba(26,26,26,0.5)] py-2 pl-8 text-[14px] font-normal text-black placeholder-gray-400"
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
                "max-h-[600px] overflow-hidden overflow-y-auto rounded-2xl bg-white p-6 md:max-w-[900px]",
                "data-[state=open]:animate-in data-[state=closed]:animate-out",
                "data-[state=open]:slide-in-from-top-10 data-[state=closed]:slide-out-to-top-10",
                "duration-500 ease-in-out",
              )}
            >
              {/* ✅ Accessible only */}
              <DialogHeader className="sr-only">
                <DialogTitle>Search</DialogTitle>
              </DialogHeader>

              {/* SEARCH INPUT */}
              <div className="relative">
                <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[#1A1A1A]/90">
                  <Image src="/search.png" alt="" width={20} height={20} />
                </span>
                <Input
                  id="modal-search"
                  name="search"
                  type="text"
                  placeholder="Search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                  className="h-[52px] rounded-[10px] border-[0.5px] border-[#1A1A1A]/80 pr-4 pl-12 text-[18px] font-normal text-[#1A1A1A]/90"
                />
              </div>

              {/* RECENT SEARCHES */}
              <div className="">
                <p className="mb-4 text-[14px] font-normal text-[#332C2C] opacity-60">
                  Recent Searches
                </p>
                <div className="flex flex-wrap gap-4">
                  {[
                    "Sarvasva Capital",
                    "Web Design",
                    "Dashboard UI",
                    "Ecommerce",
                  ].map((item) => (
                    <button
                      key={item}
                      className="rounded-[57px] bg-[#FBFBFB] px-3 py-2 text-[14px] text-[#1A1A1A] hover:bg-[#1A1A1A]/10"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* CATEGORIES */}
              <div className="">
                <p className="mb-4 text-[14px] font-normal text-[#332C2C] opacity-60">
                  Categories
                </p>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
                  {[
                    "E-Commerce",
                    "Finance",
                    "Education",
                    "SAAS",
                    "Travelling",
                    "Real Estate",
                  ].map((cat) => (
                    <div
                      key={cat}
                      className="flex h-[110px] justify-start rounded-xl bg-[#FBFBFB] p-3 text-[14px] font-medium hover:bg-gray-100"
                    >
                      {cat}
                    </div>
                  ))}
                </div>
              </div>

              {/* LATEST PROJECTS */}
              <div className="">
                <p className="mb-4 text-[14px] font-normal text-[#332C2C] opacity-60">
                  Latest Projects
                </p>
                <div className="grid grid-cols-2 gap-5 md:grid-cols-5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="space-y-[7px]">
                      <div className="relative aspect-[154/111] w-full overflow-hidden rounded-[8px] bg-[#FBFBFB]">
                        <Image
                          src="/websample.png"
                          alt=""
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="text-[14px] font-medium text-[#1A1A1A]">
                        Sarvasva Capital
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* UI Projects */}
              <div className="">
                <p className="mb-4 text-[14px] font-normal text-[#332C2C] opacity-60">
                  Ui Elememts
                </p>
                <div className="grid grid-cols-2 gap-5 md:grid-cols-5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="space-y-[7px]">
                      <div className="relative aspect-[154/111] w-full overflow-hidden rounded-[8px] bg-[#FBFBFB]">
                        <Image
                          src="/sample.png"
                          alt=""
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="text-[14px] font-medium text-[#1A1A1A]">
                        Ui Elements
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Mobile Hamburger Button */}
          <button
            className="px-1 py-[6px] md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
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
              className="text-[14px] font-normal"
            >
              close
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
