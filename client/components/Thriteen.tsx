"use client";
import React, { useState } from "react";
import Image from "next/image";
import image from "@/public/image13.png";
import { ChevronRight } from "lucide-react";

const tabs = [
  { id: "research", label: "Research" },
  { id: "plan", label: "Plan" },
  { id: "design", label: "Design" },
];

const tabContent = {
  research:
    "Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.",
  plan:
    "Habitant id vitae volutpat euismod. Turpis risus facilisi leo sed. Bibendum pellentesque ultrices arcu maecenas eleifend.",
  design:
    "Placerat integer sed vitae nulla aliquet pellentesque habitant vitae. Purus tempus eget mauris adipiscing elit volutpat.",
};

const Thirteen = () => {
  const [active, setActive] = useState("research");

  return (
    <section className="w-full bg-white flex justify-center items-center py-16 lg:py-40 px-4 sm:px-6 lg:px-20">

      <div className="w-full  flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-20">


        <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8">


          <div className="flex flex-col">
            <h1
              className="uppercase font-bold text-gray-900 tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-tight"
              style={{
                fontFamily: "Roboto Condensed",
                fontWeight: 700,
                letterSpacing: "-2%",
                textTransform: "uppercase"
              }}
            >
              LOREM IPSUM DOLOR SIT AMET
            </h1>
          </div>


          <div className="flex gap-4 sm:gap-6 border-b border-gray-200 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`pb-3 sm:pb-4 px-2 sm:px-0 transition-all duration-200 relative whitespace-nowrap flex-shrink-0 ${active === tab.id
                  ? "text-black font-semibold"
                  : "text-gray-500 hover:text-gray-700"
                  }`}
                style={{
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontWeight: active === tab.id ? 600 : 400
                }}
              >
                {tab.label}
                {active === tab.id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></div>
                )}
              </button>
            ))}
          </div>


          <div className="flex flex-col gap-4 sm:gap-6">
            <p
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                letterSpacing: "0%"
              }}
              className="text-gray-700 text-base sm:text-lg leading-relaxed"
            >
              {tabContent[active as keyof typeof tabContent]}
            </p>


            <button className="flex items-center gap-2 w-fit group mt-2 sm:mt-4">
              <span
                className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors"
                style={{
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontWeight: 600
                }}
              >
                Check tools
              </span>
              <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </button>
          </div>
        </div>


        <div className="w-full lg:w-1/2 flex-shrink-0 overflow-hidden rounded-lg mt-8 lg:mt-0">
          <Image
            src={image}
            alt="Section illustration"
            className="w-full h-auto max-h-[300px] sm:max-h-[350px] lg:max-h-[406px] object-cover"
            width={600}
            height={406}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Thirteen;