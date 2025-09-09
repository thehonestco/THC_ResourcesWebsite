"use client";
import React from "react";
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
  const [active, setActive] = useState("");
  return (
    <div className="main-container w-full md:mt-20">
      {/* filter bar */}
      <div className="scrollbar-hide mt-5 flex w-full flex-1 items-center overflow-x-auto md:mt-20">
        <div className="flex gap-[30px] md:gap-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`rounded-lg py-[10px] text-[12px] font-normal whitespace-nowrap transition md:text-[14px] ${
                active === filter ? "bg-gray-100 text-black" : "text-gray-600"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Section */}
      <div className="mx-auto mt-10 max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.id}
              className="p-3d overflow-hidden rounded-[8px] border-[0.5px] border-gray-200 bg-white duration-200"
            >
              {card.img && (
                <img
                  src={card.img}
                  alt={card.title}
                  className="h-56 w-full rounded-[6px] object-cover"
                />
              )}
              <div className="p-4">
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
