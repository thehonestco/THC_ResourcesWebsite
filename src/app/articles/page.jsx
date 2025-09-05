"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

const cards = [
  {
    id: 1,
    img: "/sample.png",
    title: "The Sarasva Capital",
    text: "We are a community of creators who make really cool things for new tech to help them succeed.",
  },
  {
    id: 2,
    img: "/sample2.png",
    title: "The Sarasva Capital",
    text: "We are a community of creators who make really cool things for new tech to help them succeed.",
  },
  {
    id: 3,
    img: "/sample3.png",
    title: "The Sarasva Capital",
    text: "We are a community of creators who make really cool things for new tech to help them succeed.",
  },
  {
    id: 4,
    img: "/sample.png",
    title: "The Sarasva Capital",
    text: "We are a community of creators who make really cool things for new tech to help them succeed.",
  },
  {
    id: 5,
    img: "/sample.png",
    title: "The Sarasva Capital",
    text: "We are a community of creators who make really cool things for new tech to help them succeed.",
  },
  {
    id: 6,
    img: "/sample.png",
    title: "The Sarasva Capital",
    text: "We are a community of creators who make really cool things for new tech to help them succeed.",
  },
];
const filters = ["Articles", "White Papers", "Case Studies", "Infographics"];
const Page = () => {
  const [active, setActive] = useState("");
  return (
    <div className="main-container w-full md:mt-20">
      {/* Sidebar Links */}
      <div className="hidden w-full justify-between gap-8 text-[16px] md:flex">
        {/* Categories */}
        <div className="flex flex-col gap-6 p-2">
          <div className="font-normal text-[#332C2C]/60">Categories</div>
          <div className="flex flex-col gap-6 font-medium">
            <Link href="/article-detail">Ecommerce</Link>
            <Link href="/article-detail">AI and Machine Learning</Link>
            <Link href="/article-detail">Shopping & Lifestyle</Link>
            <Link href="/article-detail">Cloud and Infrastructure</Link>
            <Link href="/article-detail">Product Development</Link>
          </div>
        </div>

        {/* Screens */}
        <div className="flex flex-col gap-6 p-2">
          <div className="font-normal text-[#332C2C]/60">Screens</div>
          <div className="flex flex-col gap-6 font-medium">
            <Link href="#">Cloud and Infrastructure</Link>
            <Link href="#">Shopping & Lifestyle</Link>
            <Link href="#">Ecommerce</Link>
            <Link href="#">AI and Machine Learning</Link>
            <Link href="#">Product Development</Link>
          </div>
        </div>

        {/* UI Elements */}
        <div className="flex flex-col gap-6 p-2">
          <div className="font-normal text-[#332C2C]/60">UI Elements</div>
          <div className="flex flex-col gap-6 font-medium">
            <Link href="#">Shopping & Lifestyle</Link>
            <Link href="#">Product Development</Link>
            <Link href="#">Shopping & Lifestyle</Link>
            <Link href="#">Ecommerce</Link>
            <Link href="#">AI and Machine Learning</Link>
          </div>
        </div>

        {/* Components */}
        <div className="flex flex-col gap-6 p-2">
          <div className="font-normal text-[#332C2C]/60">Components</div>
          <div className="flex flex-col gap-6 font-medium">
            <Link href="#">Ecommerce</Link>
            <Link href="#">AI and Machine Learning</Link>
            <Link href="#">Shopping & Lifestyle</Link>
            <Link href="#">Cloud and Infrastructure</Link>
            <Link href="#">Product Development</Link>
          </div>
        </div>
      </div>

      {/* filter bar */}
      <div className="scrollbar-hide mt-5 flex w-full flex-1 items-center overflow-x-auto">
        <div className="flex gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`rounded-lg px-[14px] py-[10px] text-[12px] font-normal whitespace-nowrap transition md:text-[14px] ${
                active === filter ? "bg-gray-100 text-black" : "text-gray-600"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Section */}
      <div className="mx-auto mt-10 w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div key={card.id} className="flex flex-col">
              {/* Card image */}
              <div className="overflow-hidden rounded-[8px] border border-[#FBFBFB] bg-white">
                {card.img && (
                  <img
                    src={card.img}
                    alt={card.title}
                    className="h-56 w-full object-cover"
                  />
                )}
              </div>
              <div className="p-1 md:p-[10px]">
                <h3 className="text-[14px] font-medium text-[#1A1A1A]">
                  {card.title}
                </h3>
                <p className="mt-1 text-[12px] font-normal text-[#1A1A1A]/70">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
