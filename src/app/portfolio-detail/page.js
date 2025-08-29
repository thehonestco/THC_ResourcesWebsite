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

const filters = ["Articles", "White Papers", "Case Studies", "Infographics"];

export default function Home() {
  const [active, setActive] = useState("");
  const [layout, setLayout] = useState("mobile"); // default to mobile

  return (
    <div className="mt-20 w-full">
      <div className="mt-20 flex items-center justify-between px-20">
        {/* filter bar */}
        <div className="flex items-center gap-5">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`rounded-lg px-[14px] py-[10px] text-[14px] font-normal transition ${
                active === filter ? "bg-gray-100 text-black" : "text-gray-600"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="flex">
          <div className="flex overflow-hidden rounded-[6px] border border-[#1A1A1A33]/60 p-1 text-[14px] font-normal">
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

      {/* Show layout based on toggle */}
      {layout === "web" ? (
        <div className="mx-auto mt-10 max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {cards.map((card) => (
              <div key={card.id} className="relative rounded-lg bg-white">
                {/* Image */}
                <div className="w-full">
                  {card.img && (
                    <Image
                      src={card.img}
                      alt={card.title}
                      width={499}
                      height={355}
                      className="w-full rounded-t-lg object-cover px-[60px] py-[52px]"
                    />
                  )}
                </div>

                {/* Text section */}
                <div className="p-4">
                  <div className="font-barlow text-[14px] leading-[120%] font-medium">
                    {card.title}
                  </div>
                  <div className="font-barlow mt-1 text-[12px] leading-[130%] font-normal tracking-[0.02em] text-gray-600">
                    {card.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          {/* Grid Mobile*/}
          <div className="mx-auto mt-10 mb-20 max-w-7xl">
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
                          width={400}
                          height={500}
                          className="rounded-lg"
                        />
                      </div>
                    )}
                  </div>

                  {/* Circle + Title + Description */}
                  <div className="mt-4 flex items-center gap-4 text-left">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100"></div>
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
