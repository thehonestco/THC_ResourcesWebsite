"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ThumbsUp, MessageSquare } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../../components/ui/dropdown-menu";
import Navbar from "../../components/Navbar";

const cards = [
  {
    id: 1,
    title: "Why Choose a Gold Loan?",
    text: "Fast approvals, simple process, and secure transactions.",
    webImg: "/websample.png",
    mobileImg: "/sample.png",
    status: "Trending",
    likes: 127,
    comments: 34,
  },
  {
    id: 2,
    title: "Why Choose Sarvasva Capital Gold Loan?",
    text: "Fast approvals, simple process, and secure transactions.",
    webImg: "/websample.png",
    mobileImg: "/sample.png",
    status: "Trending",
    likes: 85,
    comments: 20,
  },
  {
    id: 3,
    title: "Why Choose a Gold Loan?",
    text: "Convenient process with lowest interest rates.",
    webImg: "/websample.png",
    mobileImg: "/sample.png",
    status: "Trending",
    likes: 85,
    comments: 20,
  },
  {
    id: 4,
    title: "Why Choose a Gold Loan?",
    text: "Quick loan against gold with minimal hassle.",
    webImg: "/websample.png",
    mobileImg: "/sample.png",
    status: "Trending",
    likes: 85,
    comments: 20,
  },
  {
    id: 5,
    title: "Why Choose Sarvasva Capital Gold Loan?",
    text: "Fast approvals, simple process, and secure transactions.",
    webImg: "/websample.png",
    mobileImg: "/sample.png",
    status: "Trending",
    likes: 85,
    comments: 20,
  },
  {
    id: 6,
    title: "Why Choose a Gold Loan?",
    text: "Convenient process with lowest interest rates.",
    webImg: "/websample.png",
    mobileImg: "/sample.png",
    status: "Trending",
    likes: 85,
    comments: 20,
  },
];

const filters = ["Articles", "White Papers", "Case Studies", "Infographics"];

export default function Home() {
  const [active, setActive] = useState("Articles");
  const [layout, setLayout] = useState("mobile");

  return (
    <>
      <Navbar />
      <div className="main-container w-full md:mt-20">
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
                          : "text-gray-600"
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
        </div>

        {/* Show layout based on toggle */}
        {layout === "web" ? (
          <div className="mt-6 md:mt-10">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              {cards.map((card) => (
                <Link key={card.id} href="/project-detail" className="block">
                  <div className="flex cursor-pointer flex-col items-center">
                    {/* Card with Image */}
                    <div className="w-full rounded-lg bg-[#FBFBFB] p-4">
                      {/* Status + Like/Comment Row */}
                      <div className="mb-2 flex items-center justify-between">
                        <span className="rounded-[4px] bg-[#1A1A1A1A]/10 px-[6px] py-1 text-[12px] font-normal">
                          {card.status}
                        </span>
                        <div className="flex items-center gap-3 p-1 text-[10px]">
                          <div className="flex items-center gap-1 rounded-[4px] bg-[#1A1A1A]/3 p-1">
                            <Image
                              src="/icon/thumpsup-icon.png"
                              alt="Like"
                              width={12}
                              height={12}
                              className="object-contain"
                            />
                            <span className="text-[12px]">{card.likes}</span>
                          </div>
                          <div className="flex items-center gap-1 rounded-[4px] bg-[#1A1A1A]/3 p-1">
                            <Image
                              src="/icon/comment-icon.png"
                              alt="Like"
                              width={12}
                              height={12}
                              className="object-contain"
                            />
                            <span className="text-[12px]">{card.likes}</span>
                          </div>
                        </div>
                      </div>
                      {card.webImg && (
                        <div className="flex justify-center">
                          <div className="relative aspect-[620/458] w-[400px]">
                            <Image
                              src={card.webImg}
                              alt="Card Image"
                              fill
                              className="rounded-[8px] object-contain"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Circle + Title + Description */}
                    <div className="mt-[10px] w-full text-left md:mt-4">
                      <div className="flex items-center gap-[6px]">
                        {/* Circle */}
                        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gray-100"></div>

                        {/* Title + Description */}
                        <div>
                          <div className="font-barlow text-[14px] leading-[120%] font-medium">
                            {card.title}
                          </div>
                          <div className="font-barlow text-[12px] leading-[130%] font-normal tracking-[0.02em] text-black opacity-70">
                            {card.text}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <>
            {/* Grid Mobile*/}
            <div className="mx-auto mt-10 w-full">
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {cards.map((card) => (
                  <Link key={card.id} href="/project-detail" className="block">
                    <div className="flex cursor-pointer flex-col items-center">
                      {/* Card with Image */}
                      <div className="w-full rounded-lg bg-[#FBFBFB] p-4">
                        {/* Status + Like/Comment Row */}
                        <div className="mb-2 flex items-center justify-between">
                          <span className="rounded-[4px] bg-[#1A1A1A1A]/10 px-[6px] py-1 text-[12px] font-normal">
                            {card.status}
                          </span>
                          <div className="flex items-center gap-3 p-1 text-[10px]">
                            <div className="flex items-center gap-1 rounded-[4px] bg-[#1A1A1A]/3 p-1">
                              <Image
                                src="/icon/thumpsup-icon.png"
                                alt="Like"
                                width={12}
                                height={12}
                                className="object-contain"
                              />
                              <span className="text-[12px]">{card.likes}</span>
                            </div>
                            <div className="flex items-center gap-1 rounded-[4px] bg-[#1A1A1A]/3 p-1">
                              <Image
                                src="/icon/comment-icon.png"
                                alt="Like"
                                width={12}
                                height={12}
                                className="object-contain"
                              />
                              <span className="text-[12px]">{card.likes}</span>
                            </div>
                          </div>
                        </div>
                        {card.mobileImg && (
                          <div className="flex justify-center">
                            <Image
                              src={card.mobileImg}
                              alt="Card Image"
                              width={343}
                              height={348}
                              className="md:h-[574px] md:w-[400px]"
                            />
                          </div>
                        )}
                      </div>

                      {/* Circle + Title + Description */}
                      <div className="mt-[10px] w-full text-left md:mt-4">
                        <div className="flex items-center gap-[6px]">
                          {/* Circle */}
                          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gray-100"></div>

                          {/* Title + Description */}
                          <div>
                            <div className="font-barlow text-[14px] leading-[120%] font-medium">
                              {card.title}
                            </div>
                            <div className="font-barlow text-[12px] leading-[130%] font-normal tracking-[0.02em] text-black">
                              {card.text}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
