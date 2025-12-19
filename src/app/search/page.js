"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SearchPage() {
  const router = useRouter();

  const recentSearches = [
    "Sarvasva Capital",
    "Web Design",
    "Dashboard UI",
    "E-commerce",
  ];

  const categories = [
    "E-Commerce",
    "Finance",
    "Education",
    "Healthcare",
    "SaaS",
    "AI",
  ];

  return (
    <div className="min-h-screen bg-white px-4 pt-4">
      {/* Header */}
      <div className="flex justify-between gap-3">
        {/* Search Input */}
        <div className="flex max-w-[288px] flex-1 items-center gap-2 rounded-xl border-[0.5px] border-[#1A1A1A]/50 p-2">
          <Image src="/search.png" alt="Search" width={21} height={21} />
          <input
            type="text"
            placeholder="Search.."
            className="w-full border-none bg-transparent text-[14px] font-light text-[#1A1A1A]/90 outline-none"
          />
        </div>

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="pr-[6px] text-[14px] font-light text-[#1A1A1A]/90"
        >
          back
        </button>
      </div>

      {/* Recent Searches */}
      <section className="mt-6">
        <p className="mb-4 text-[12px] text-[#332C2C]/60">Recent Searches</p>

        <div className="scrollbar-hide flex gap-3 overflow-x-auto whitespace-nowrap">
          {recentSearches.map((item) => (
            <button
              key={item}
              className="flex-shrink-0 rounded-[57px] bg-[#FBFBFB] px-3 py-2 text-[12px] text-[#1A1A1A]"
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mt-6">
        <p className="mb-4 text-[12px] text-[#332C2C]/60">Categories</p>
        <div className="grid grid-cols-3 gap-[14px]">
          {categories.map((cat) => (
            <div
              key={cat}
              className="flex aspect-105/98 items-start rounded-[6.5px] bg-[#FBFBFB] p-3 text-[12px] font-medium"
            >
              {cat}
            </div>
          ))}
        </div>
      </section>

      {/* Latest Projects */}
      <section className="mt-6">
        <p className="mb-4 text-[12px] text-[#332C2C]/60">Latest Projects</p>

        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-[8.5px] bg-[#FBFBFB] p-3">
              <div className="mb-3 aspect-162/116 rounded-lg bg-white" />
              <p className="text-[12px] font-medium">Sarvasva Capital</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-6">
        <p className="mb-4 text-[12px] text-[#332C2C]/60">UI Elements</p>

        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-[8.5px] bg-[#FBFBFB] p-3">
              <div className="mb-3 aspect-162/116 rounded-lg bg-white" />
              <p className="text-[12px] font-medium">Sarvasva Capital</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
