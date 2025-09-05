"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const cards = [
  {
    id: 1,
    title: "Why Choose a Gold Loan?",
    text: "Fast approvals, simple process, and secure transactions. ",
    img: "/sample.png",
  },
  {
    id: 2,
    title: "Why Choose Sarvasva Capital Gold Loan?",
    text: "Fast approvals, simple process, and secure transactions.",
    img: "/sample.png",
  },
  {
    id: 3,
    title: "Why Choose a Gold Loan?",
    text: "Convenient process with lowest interest rates.",
    img: "/sample.png",
  },
  {
    id: 4,
    title: "Why Choose a Gold Loan?",
    text: "Quick loan against gold with minimal hassle.",
    img: "/sample.png",
  },
  {
    id: 5,
    title: "Why Choose Sarvasva Capital Gold Loan?",
    text: "Fast approvals, simple process, and secure transactions.",
    img: "/sample.png",
  },
  {
    id: 6,
    title: "Why Choose a Gold Loan?",
    text: "Convenient process with lowest interest rates.",
    img: "/sample.png",
  },
];

const filters = ["Articles", "White Papers", "Case Studies", "Most Viewed"];

export default function Home() {
  const [active, setActive] = useState("");
  const [layout, setLayout] = useState("mobile");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Portfolio"); // default label

  const handleSelect = (name) => {
    setSelected(name);
    setOpen(false);
  };

  return (
    <div className="main-container w-full md:mt-20">
      {/* Categories + Sections */}
      <div className="hidden w-full justify-between gap-8 text-[16px] md:flex">
        {/* Categories */}
        <div className="flex flex-col gap-6">
          <div className="font-normal text-[#332C2C]/60">Categories</div>
          <div className="flex flex-col gap-6 font-medium">
            <Link href="/portfolio-detail">AI and Machine Learning</Link>
            <Link href="/portfolio-detail">Product Development</Link>
            <Link href="/portfolio-detail">Shopping & Lifestyle</Link>
            <Link href="/portfolio-detail">Ecommerce</Link>
            <Link href="/portfolio-detail">Cloud and Infrastructure</Link>
          </div>
        </div>

        {/* Screens */}
        <div className="flex flex-col gap-6">
          <div className="font-normal text-[#332C2C]/60">Screens</div>
          <div className="flex flex-col gap-6 font-medium">
            <Link href="#">Shopping & Lifestyle</Link>
            <Link href="#">Product Development</Link>
            <Link href="#">AI and Machine Learning</Link>
            <Link href="#">Ecommerce</Link>
            <Link href="#">Cloud and Infrastructure</Link>
          </div>
        </div>

        {/* UI Elements */}
        <div className="flex flex-col gap-6">
          <div className="font-normal text-[#332C2C]/60">UI Elements</div>
          <div className="flex flex-col gap-6 font-medium">
            <Link href="#">Cloud and Infrastructure</Link>
            <Link href="#">AI and Machine Learning</Link>
            <Link href="#">Shopping & Lifestyle</Link>
            <Link href="#">Product Development</Link>
            <Link href="#">Ecommerce</Link>
          </div>
        </div>

        {/* Components */}
        <div className="flex flex-col gap-6">
          <div className="font-normal text-[#332C2C]/60">Components</div>
          <div className="flex flex-col gap-6 font-medium">
            <Link href="#">AI and Machine Learning</Link>
            <Link href="#">Cloud and Infrastructure</Link>
            <Link href="#">Shopping & Lifestyle</Link>
            <Link href="#">Product Development</Link>
            <Link href="#">Ecommerce</Link>
          </div>
        </div>
      </div>

      <div className="relative mt-[24px] block md:hidden">
        {/* Button with current selection */}
        <button
          onClick={() => setOpen(!open)}
          className="w-auto bg-white text-[16px] font-medium"
        >
          {selected} ▾
        </button>

        {/* Dropdown menu */}
        {open && (
          <div className="absolute mt-2 w-[160px] rounded-md border border-gray-200 bg-white shadow-md">
            <Link
              href="/"
              className="block px-3 py-2 hover:bg-gray-100"
              onClick={() => handleSelect("Portfolio")}
            >
              Portfolio
            </Link>
            <Link
              href="/tutorials"
              className="block px-3 py-2 hover:bg-gray-100"
              onClick={() => handleSelect("Tutorials")}
            >
              Tutorials
            </Link>
            <Link
              href="/articles"
              className="block px-3 py-2 hover:bg-gray-100"
              onClick={() => handleSelect("Articles")}
            >
              Articles
            </Link>
            <Link
              href="/component"
              className="block px-3 py-2 hover:bg-gray-100"
              onClick={() => handleSelect("Components")}
            >
              Components
            </Link>
          </div>
        )}
      </div>

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

      {/* Show layout based on toggle */}
      {layout === "web" ? (
        <div className="mt-6 md:mt-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {cards.map((card) => (
              <div key={card.id} className="relative rounded-lg">
                {/* Image */}
                <div className="w-full">
                  {card.img && (
                    <Image
                      src={card.img}
                      alt={card.title}
                      width={499}
                      height={355}
                      className="w-full rounded-t-lg object-cover md:px-[60px] md:py-[52px]"
                    />
                  )}
                </div>

                <div className="mt-[10px] flex items-center gap-[6px] text-left md:mt-4">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gray-100"></div>
                  <div className="flex-1">
                    <div className="font-barlow text-[14px] leading-[120%] font-medium">
                      {card.title}
                    </div>
                    <div className="font-barlow mt-1 text-[12px] leading-[130%] font-normal tracking-[0.02em] text-gray-600">
                      {card.text}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          {/* Grid Mobile*/}
          <div className="mx-auto mt-10 max-w-7xl">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {cards.map((card) => (
                <div key={card.id} className="flex flex-col items-center">
                  {/* Card with Image */}
                  <div className="w-full rounded-lg bg-[#FBFBFB] p-4">
                    {card.img && (
                      <div className="flex justify-center">
                        <Image
                          src={card.img}
                          alt="Card Image"
                          width={343}
                          height={348}
                          className="md:h-[574px] md:w-[400px]"
                        />
                      </div>
                    )}
                  </div>

                  {/* Circle + Title + Description */}
                  <div className="mt-[10px] flex items-center gap-[6px] text-left md:mt-4">
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gray-100"></div>
                    <div>
                      <div className="font-barlow align-middle text-[14px] leading-[120%] font-medium">
                        {card.title}
                      </div>
                      <div className="font-barlow text-[12px] leading-[130%] font-normal tracking-[0.02em] text-gray-600">
                        {card.text}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
