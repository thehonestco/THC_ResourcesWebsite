"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";

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
  const [active, setActive] = useState("Articles");
  const [layout, setLayout] = useState("mobile");
  return (
    <div className="main-container w-full md:mt-20">
      <div className="mt-[30px] flex flex-col gap-5 md:mt-20 md:flex-row md:items-center md:justify-between">
        <div className="flex w-full items-center md:hidden md:px-4">
          {/* Toggle Button */}
          <div className="flex-shrink-0">
            <div className="flex gap-[5px] overflow-hidden rounded-[82px] border-[0.5px] border-[#1A1A1A33]/60 p-1 font-normal">
              {/* Web Button */}
              <button
                onClick={() => setLayout("web")}
                className={`flex items-center justify-center px-1 py-1 font-medium transition ${
                  layout === "web"
                    ? "rounded-[59px] bg-[#1A1A1A08] text-black"
                    : "bg-white"
                }`}
              >
                <Image
                  src="/laptop-icon.png"
                  alt="Web Icon"
                  width={20}
                  height={20}
                />
              </button>

              {/* Mobile Button */}
              <button
                onClick={() => setLayout("mobile")}
                className={`flex items-center justify-center px-1 py-1 font-medium transition ${
                  layout === "mobile"
                    ? "rounded-[59px] bg-[#1A1A1A08] text-black"
                    : "bg-white"
                }`}
              >
                <Image
                  src="/mobile-icon.png"
                  alt="Mobile Icon"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>

          <div className="mr-[10px] ml-[15px] h-6 w-px flex-shrink-0 border-[0.5px] bg-gray-300"></div>

          {/* Filter Bar */}
          <div className="scrollbar-hide flex w-full flex-1 items-center overflow-x-auto">
            <div className="flex gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActive(filter)}
                  className={`rounded-lg px-[14px] py-[10px] text-[12px] font-normal whitespace-nowrap transition md:text-[14px] ${
                    active === filter
                      ? "bg-gray-100 text-black"
                      : "text-gray-600"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop / Tablet layout */}
        <div className="hidden w-full items-center justify-between md:flex">
          {/* Filter bar */}
          <div className="flex items-center gap-[48px]">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`rounded-lg py-[10px] text-[14px] font-normal transition ${
                  active === filter ? "bg-gray-100 text-black" : "text-gray-600"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Toggle Button */}
          <div className="flex-shrink-0">
            <div className="flex overflow-hidden rounded-[6px] border border-[#1A1A1A33]/60 p-1 text-sm font-normal">
              <button
                onClick={() => setLayout("web")}
                className={`px-4 py-2 font-medium transition ${
                  layout === "web"
                    ? "rounded-[4px] bg-[#1A1A1A08] text-black"
                    : "bg-white"
                }`}
              >
                Web
              </button>
              <button
                onClick={() => setLayout("mobile")}
                className={`px-4 py-2 font-medium transition ${
                  layout === "mobile"
                    ? "rounded-[4px] bg-[#1A1A1A08] text-black"
                    : "bg-white"
                }`}
              >
                Mobile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
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
                    className="h-[400px] max-h-full w-[400px] max-w-full object-cover"
                  />
                )}
              </div>
              <div className="mt-3 px-1">
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
