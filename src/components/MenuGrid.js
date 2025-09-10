// components/SectionGrid.js
"use client";
import Link from "next/link";

export default function MenuGrid({ sections }) {
  return (
    <div className="hidden w-full justify-between gap-8 text-[16px] md:flex">
      {sections.map((section) => (
        <div key={section.title} className="flex flex-col gap-6">
          <div className="text-[16px] font-normal text-[#332C2C]/60">
            {section.title}
          </div>
          <div className="flex flex-col gap-6 text-[16px] font-medium">
            {section.links.map((link, i) => (
              <Link key={i} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
