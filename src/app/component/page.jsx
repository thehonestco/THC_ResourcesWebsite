"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import MenuGrid from "../../components/MenuGrid";
import { ThumbsUp, MessageSquare } from "lucide-react";

const sections = [
  {
    title: "Categories",
    links: [
      { label: "AI and Machine Learning", href: "/components-detail" },
      { label: "Product Development", href: "/components-detail" },
      { label: "Shopping & Lifestyle", href: "/components-detail" },
      { label: "Ecommerce", href: "/components-detail" },
      { label: "Cloud and Infrastructure", href: "/components-detail" },
    ],
  },
  {
    title: "Screens",
    links: [
      { label: "Shopping & Lifestyle", href: "#" },
      { label: "Product Development", href: "#" },
      { label: "AI and Machine Learning", href: "#" },
      { label: "Ecommerce", href: "#" },
      { label: "Cloud and Infrastructure", href: "#" },
    ],
  },
  {
    title: "UI Elements",
    links: [
      { label: "Cloud and Infrastructure", href: "#" },
      { label: "AI and Machine Learning", href: "#" },
      { label: "Shopping & Lifestyle", href: "#" },
      { label: "Product Development", href: "#" },
      { label: "Ecommerce", href: "#" },
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
    title: "Why Choose a Gold Loan?",
    text: "Fast approvals, simple process, and secure transactions.",
    img: "/sample-component1.png",
    status: "Trending",
    likes: 127,
    comments: 34,
  },
  {
    id: 2,
    title: "Why Choose Sarvasva Capital Gold Loan?",
    text: "Fast approvals, simple process, and secure transactions.",
    img: "/sample-component2.png",
    status: "Trending",
    likes: 85,
    comments: 20,
  },
  {
    id: 3,
    title: "Why Choose a Gold Loan?",
    text: "Convenient process with lowest interest rates.",
    img: "/sample-component3.png",
    status: "Trending",
    likes: 85,
    comments: 20,
  },
  {
    id: 4,
    title: "Why Choose a Gold Loan?",
    text: "Quick loan against gold with minimal hassle.",
    img: "/sample.png",
    status: "Trending",
    likes: 85,
    comments: 20,
  },
  {
    id: 5,
    title: "Why Choose Sarvasva Capital Gold Loan?",
    text: "Fast approvals, simple process, and secure transactions.",
    img: "/sample.png",
    status: "Trending",
    likes: 85,
    comments: 20,
  },
  {
    id: 6,
    title: "Why Choose a Gold Loan?",
    text: "Convenient process with lowest interest rates.",
    img: "/sample.png",
    status: "Trending",
    likes: 85,
    comments: 20,
  },
];

const filters = ["Articles", "White Papers", "Case Studies", "Infographics"];
const Page = () => {
  const [active, setActive] = useState("Articles");
  const [layout, setLayout] = useState("mobile");
  return (
    <div className="main-container w-full md:mt-20">
      <MenuGrid sections={sections} />
      {/* filter bar */}
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
                  className={`cursor-pointer rounded-lg px-[14px] py-[10px] text-[12px] font-normal whitespace-nowrap transition md:text-[14px] ${
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
                className={`cursor-pointer rounded-lg px-[14px] py-[10px] text-[14px] font-normal transition ${
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
      <div className="mx-auto mt-10 w-full">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div key={card.id} className="flex flex-col">
              {/* Card image */}
              <div className="aspect-square overflow-hidden rounded-[8px] bg-[#FBFBFB] p-4">
                {/* Status + Like/Comment Row */}
                <div className="mb-2 flex items-center justify-between">
                  <span className="rounded-[4px] bg-[#1A1A1A1A]/10 px-[6px] py-1 text-[12px] font-normal">
                    {card.status}
                  </span>
                  <div className="flex items-center gap-3 p-1 text-[10px]">
                    <div className="flex items-center gap-1 rounded-[4px] bg-[#1A1A1A1A]/3 p-1">
                      <ThumbsUp size={16} />
                      {card.likes}
                    </div>
                    <div className="flex items-center gap-1 rounded-[4px] bg-[#1A1A1A1A]/3 p-1">
                      <MessageSquare size={16} />
                      {card.comments}
                    </div>
                  </div>
                </div>
                {card.img && (
                  <div className="flex h-full w-full items-center justify-center">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="max-h-full max-w-full object-cover"
                    />
                  </div>
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
