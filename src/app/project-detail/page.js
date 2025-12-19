"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  ThumbsUp,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
} from "../../components/ui/drawer";
import { DrawerTitle, DrawerDescription } from "../../components/ui/drawer";

const filters = ["Screens", "UI Elements", "Flows", "Code Snippets"];
const cards = [
  { id: 1, img: "/sample.png" },
  { id: 2, img: "/sample.png" },
  { id: 3, img: "/sample.png" },
  { id: 4, img: "/sample.png" },
  { id: 5, img: "/sample.png" },
  { id: 6, img: "/sample.png" },
  { id: 7, img: "/sample.png" },
  { id: 8, img: "/sample.png" },
  { id: 9, img: "/sample.png" },
];

const Card = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;
  const maxVisible = 6;

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const filters = ["Screens", "UI Elements", "Flows", "Code Snippets"];
  const [active, setActive] = useState("Screens");
  const [newComment, setNewComment] = useState("");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Sort by");

  const comments = [
    {
      id: 1,
      name: "Anonymous",
      date: "12/5/2025",
      text: "Great Project , Well done the screens are creativity is on point",
    },
    {
      id: 2,
      name: "Anonymous",
      date: "12/5/2025",
      text: "Great Project , Well done the screens are creativity is on point",
    },
    {
      id: 3,
      name: "Anonymous",
      date: "12/5/2025",
      text: "Great Project , Well done the screens are creativity is on point",
    },
  ];

  const tools = [
    ["Figma", "Photoshop", "Freepik", "Illustrator", "LoadRunner", "Postman"],
  ];

  const [activeCard, setActiveCard] = useState(null);

  return (
    <>
      <Navbar />
      <div className="main-container w-full md:mt-20">
        <div className="mt-[66px] flex items-start gap-[30px]">
          {/* Left Circle */}
          <div className="h-[60px] w-[60px] rounded-full bg-[#F8F8F8] md:h-[120px] md:w-[120px]" />

          {/* Right Content */}
          <div>
            <h2 className="text-[16px] font-semibold md:text-[28px]">
              The Sarasva Capital
            </h2>

            <p className="mt-[10px] text-[12px] font-normal tracking-[0.02em] text-black opacity-70 md:text-[14px]">
              We are a community of creators who make really cool things for new
              tech to help them succeed.
            </p>

            <div className="mt-3 flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <Image
                  src="/icon/thumpsup-icon.png" // change path
                  alt="Likes"
                  width={16}
                  height={16}
                  className="object-contain"
                />
                <span>127</span>
              </div>

              <div className="flex items-center gap-1">
                <Image
                  src="/icon/comment-icon.png" // change path
                  alt="Comments"
                  width={16}
                  height={16}
                  className="object-contain"
                />
                <span>34</span>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-6 rounded-[12px] bg-gray-50 p-3 md:mt-10 md:p-6">
          {/* Mobile: 2 rows */}
          <div className="grid grid-cols-3 gap-y-4 md:hidden">
            {/* Row 1 */}
            <div className="flex flex-col">
              <div className="text-[10px] font-normal opacity-60">Platform</div>
              <div className="text-[10px] font-medium">
                AI and Machine Learning
              </div>
            </div>

            <div className="flex flex-col">
              <div className="text-[10px] font-normal opacity-60">Category</div>
              <a href="#" className="text-[10px] font-medium">
                AI and Machine Learning
              </a>
            </div>

            <div className="flex flex-col">
              <div className="text-[10px] font-normal opacity-60">
                Live Site
              </div>
              <div className="text-[10px] font-medium">www.sarvasva.com</div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col">
              <div className="text-[10px] font-normal opacity-60">Platform</div>
              <div className="text-[10px] font-medium">
                AI and Machine Learning
              </div>
            </div>

            <div className="flex flex-col">
              <div className="text-[10px] font-normal opacity-60">Category</div>
              <a href="#" className="text-[10px] font-medium">
                AI and Machine Learning
              </a>
            </div>

            <div className="flex flex-col">
              <div className="text-[10px] font-normal opacity-60">
                Live Site
              </div>
              <div className="text-[10px] font-medium">www.sarvasva.com</div>
            </div>
          </div>

          {/* Desktop: single row */}
          <div className="hidden justify-between md:flex">
            <div className="flex flex-col">
              <div className="text-[10px] font-normal opacity-60 md:text-[16px]">
                Platform
              </div>
              <div className="text-[10px] font-medium md:text-[16px]">
                AI and Machine Learning
              </div>
            </div>

            <div className="flex flex-col">
              <div className="text-[10px] font-normal opacity-60 md:text-[16px]">
                Category
              </div>
              <a href="#" className="text-[10px] font-medium md:text-[16px]">
                AI and Machine Learning
              </a>
            </div>

            <div className="flex flex-col">
              <div className="text-[10px] font-normal opacity-60 md:text-[16px]">
                Live Site
              </div>
              <div className="text-[10px] font-medium md:text-[16px]">
                www.sarvasva.com
              </div>
            </div>
          </div>
        </div>

        {/* line for mobile (above filters) */}
        <div className="mt-5 h-[1px] w-full bg-[#1A1A1A33] opacity-50 md:hidden" />

        {/* filter bar with dropdown before filters */}
        <div className="mt-4 flex items-center justify-start gap-[15px] md:mt-15 md:gap-[30px]">
          {/* Dropdown bar */}
          <div className="relative md:hidden">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="flex items-center justify-between rounded-[4px] border-[0.5px] border-[#1A1A1A33] bg-white p-2 text-[12px] font-normal whitespace-nowrap"
            >
              {selected}
              <span className="ml-2">▾</span>
            </button>

            {open && (
              <div className="absolute left-0 mt-2 w-40 rounded-lg border border-gray-200 bg-white shadow-lg">
                {["Newest", "Oldest", "Popular"].map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSelected(option);
                      setOpen(false);
                    }}
                    className="block w-full px-4 py-2 text-left text-[14px] text-gray-700 hover:bg-gray-100"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="h-6 w-px flex-shrink-0 border-[0.5px] opacity-50 md:hidden"></div>

          {/* Filter bar container */}
          <div className="no-scrollbar flex gap-[30px] overflow-x-auto">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`rounded-[4px] px-[10px] py-[8px] text-[12px] font-normal whitespace-nowrap transition md:text-[14px] ${
                  active === filter
                    ? "bg-[#FBFBFB] text-black"
                    : "text-[#1A1A1A]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* line for desktop (below filters) */}
        <div className="mt-4 mb-20 hidden h-[1px] w-full bg-[#1A1A1A33] opacity-50 md:block" />

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 pt-6 sm:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {cards.map((card) => (
            <Drawer key={card.id}>
              <DrawerTrigger asChild>
                <div
                  onClick={() => setActiveCard(card)}
                  className="cursor-pointer rounded-lg bg-[#FBFBFB] p-4"
                >
                  <Image
                    src={card.img}
                    alt="Card"
                    width={400}
                    height={400}
                    className="aspect-square rounded-[8px] object-contain md:w-full"
                  />
                </div>
              </DrawerTrigger>

              {/* Drawer Popup */}
              <DrawerContent className="rounded-t-2xl">
                {/* Screen-reader only accessibility elements */}
                <DrawerTitle className="sr-only">
                  Image preview drawer
                </DrawerTitle>

                <DrawerDescription className="sr-only">
                  Preview image with options to copy or download.
                </DrawerDescription>

                {activeCard && (
                  <div className="flex h-full flex-col px-4 pt-4">
                    {/* Header */}
                    <div className="flex items-center gap-5 pb-[87px]">
                      <div className="h-[50px] w-[50px] rounded-full bg-[#F8F8F8]" />
                      <h3 className="text-base font-semibold">
                        {activeCard.title ?? "The Sarvasva Capital"}
                      </h3>
                    </div>

                    {/* Image Preview */}
                    <div className="flex flex-1 items-center justify-center bg-[#FBFBFB]">
                      {/* Background box */}
                      <div className="flex h-[348px] w-[343px] items-center justify-center rounded-[12px] bg-white">
                        {/* Image */}
                        <Image
                          src={activeCard.img}
                          alt="Preview"
                          width={220} // smaller than container
                          height={220}
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Pagination dots (optional) */}
                    <div className="mt-[10px] flex justify-center gap-2">
                      {[1, 2, 3, 4, 5].map((_, i) => (
                        <span
                          key={i}
                          className="h-[5px] w-[5px] rounded-full bg-[#1A1A1A]/30"
                        />
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="mt-[115px] mb-10 flex items-center justify-center gap-10">
                      <button className="text-[16px] font-medium">Copy</button>

                      <a
                        href={activeCard.img}
                        download
                        className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-[16px] font-medium text-white"
                      >
                        Download
                        <span>⬇</span>
                      </a>
                    </div>
                  </div>
                )}
              </DrawerContent>
            </Drawer>
          ))}
        </div>

        <div className="mt-[50px] flex items-center justify-center gap-[14px]">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="rounded-[4px] px-[10px] py-[12px] opacity-50 hover:bg-gray-100"
          >
            <ChevronLeft size={18} />
          </button>

          {Array.from({ length: maxVisible }, (_, i) => {
            const page = i + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`flex h-[32px] w-[32px] items-center gap-[10px] rounded-[4px] border-[0.5px] px-[10px] py-[12px] text-center ${
                  currentPage === page ? "border-black" : "hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="rounded-[4px] px-[10px] py-[12px] opacity-50 hover:bg-gray-100"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="mt-[30px] h-fit rounded-[12px] border-[0.5px] border-gray-200 p-4">
          <h3 className="mb-4 text-[20px] font-medium">Tools</h3>
          <div className="flex flex-col">
            <h2 className="mb-4 text-[16px] font-normal opacity-60">Design</h2>
            {tools.map((group, i) => (
              <div key={i} className="flex flex-wrap gap-[12px]">
                {group.map((tool) => (
                  <span
                    key={tool}
                    className="mb-[12px] rounded-full border-[0.5px] border-gray-200 px-2 py-[6px] text-[14px] font-normal"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <h2 className="mb-4 text-[16px] font-normal opacity-60">Design</h2>
            {tools.map((group, i) => (
              <div key={i} className="flex flex-wrap gap-[12px]">
                {group.map((tool) => (
                  <span
                    key={tool}
                    className="mb-[12px] rounded-full border-[0.5px] border-gray-200 px-2 py-[6px] text-[14px] font-normal"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[30px] grid grid-cols-1 gap-10 md:mt-20 lg:grid-cols-[2fr_1fr]">
          <div>
            <div className="mb-6 flex items-start gap-3">
              {/* Avatar */}
              <div className="h-10 w-10 rounded-[67px] bg-gray-200" />

              {/* Input + Button stacked */}
              <div className="flex-1">
                <textarea
                  placeholder="Ask a question or start a post"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full rounded-md border-[0.5px] border-[#1A1A1A33] p-4 text-[16px]"
                />
                <div className="mt-5 flex justify-end">
                  <button className="rounded-md bg-black p-[10px] font-normal text-white">
                    Post A Comment
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-20 flex flex-col gap-4">
              {comments.map((c) => (
                <div
                  key={c.id}
                  className="flex gap-3 rounded-lg bg-gray-50 p-4 text-sm"
                >
                  <div className="h-8 w-8 rounded-[67px] bg-gray-200" />
                  <div>
                    {/* Name + Date in same line */}
                    <div className="flex items-center gap-[10px]">
                      <div className="text-[16px] font-medium">{c.name}</div>
                      <div className="text-[12px] text-gray-500">{c.date}</div>
                    </div>

                    <p className="mt-[10px] text-[14px] text-gray-700">
                      {c.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
