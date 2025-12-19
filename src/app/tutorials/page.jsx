"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import MenuGrid from "../../components/MenuGrid";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../../components/ui/dropdown-menu";

const sections = [
  {
    title: "Categories",
    links: [
      { label: "AI and Machine Learning", href: "/tutorial-detail" },
      { label: "Product Development", href: "/tutorial-detail" },
      { label: "Shopping & Lifestyle", href: "/tutorial-detail" },
      { label: "Ecommerce", href: "/tutorial-detail" },
      { label: "Cloud and Infrastructure", href: "/tutorial-detail" },
    ],
  },
  {
    title: "Screens",
    links: [
      { label: "Shopping & Lifestyle", href: "/tutorial-detail" },
      { label: "Product Development", href: "/tutorial-detail" },
      { label: "AI and Machine Learning", href: "/tutorial-detail" },
      { label: "Ecommerce", href: "/tutorial-detail" },
      { label: "Cloud and Infrastructure", href: "/tutorial-detail" },
    ],
  },
  {
    title: "UI Elements",
    links: [
      { label: "Cloud and Infrastructure", href: "/tutorial-detail" },
      { label: "AI and Machine Learning", href: "/tutorial-detail" },
      { label: "Shopping & Lifestyle", href: "/tutorial-detail" },
      { label: "Product Development", href: "/tutorial-detail" },
      { label: "Ecommerce", href: "/tutorial-detail" },
    ],
  },
  {
    title: "Components",
    links: [
      { label: "AI and Machine Learning", href: "#" },
      { label: "Cloud and Infrastructure", href: "#" },
      { label: "Shopping & Lifestyle", href: "#" },
      { label: "Product Development", href: "#" },
      { label: "Ecommerce", href: "#" },
    ],
  },
];

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
    img: "/sample3.png",
    title: "The Sarasva Capital",
    text: "We are a community of creators who make really cool things for new tech to help them succeed.",
  },
  {
    id: 5,
    img: "/sample2.png",
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
  const [active, setActive] = useState("Articles");
  return (
    <div className="main-container w-full md:mt-20">
      <MenuGrid sections={sections} />
      <div className="mt-[30px] flex flex-col gap-5 md:mt-20 md:flex-row md:items-center md:justify-between">
        <div className="flex w-full items-center">
          <div className="flex items-center gap-4">
            {/* Filter Bar */}
            <div className="scrollbar-hide flex w-full flex-1 items-center overflow-x-auto">
              <div className="flex gap-[20px]">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActive(filter)}
                    className={`cursor-pointer rounded-lg px-[10px] py-[8px] text-[12px] font-normal whitespace-nowrap transition md:text-[14px] ${
                      active === filter
                        ? "bg-[#FBFBFB] text-black"
                        : "text-black"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden w-full items-center justify-end md:flex">
          <div className="flex items-center gap-4">
            {/* SORT BY DROPDOWN */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center rounded-[6px] border border-[#1A1A1A33]/60 px-4 py-[12px] text-[14px] font-normal transition hover:bg-[#1A1A1A08] md:block">
                  Sort by
                  <span className="ml-[6px] text-[14px]">▾</span>
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="start" className="w-40">
                <DropdownMenuItem onClick={() => console.log("Latest")}>
                  Latest
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => console.log("Most Popular")}>
                  Most Popular
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => console.log("Oldest")}>
                  Oldest
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="mx-auto mt-10 mb-[100px] w-full">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.id}
              className="overflow-hidden rounded-[8px] border-[0.5px] border-gray-200 bg-white p-3"
            >
              {card.img && (
                <img
                  src={card.img}
                  alt={card.title}
                  className="h-56 w-full rounded-[6px] object-cover"
                />
              )}
              <div className="md:pt-[10px]">
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
