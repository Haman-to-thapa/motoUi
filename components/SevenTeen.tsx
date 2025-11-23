"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

type Props = {};

const SevenTeen = (props: Props) => {
  return (
    <section className="w-full flex justify-center py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div
        className="
          w-full max-w-2xl lg:max-w-4xl
          flex flex-col items-center 
          gap-6 md:gap-8 lg:gap-10
        "
      >
        {/* LOGO */}
        <div
          className="
            text-2xl sm:text-3xl md:text-4xl font-extrabold 
            font-inter leading-[100%] tracking-[-0.02em]
            text-center text-gray-900
            mb-2 md:mb-4
          "
          role="img"
          aria-label="Company Logo"
        >
          LOGO
        </div>

        {/* CONTENT SECTION */}
        <div
          className="w-full flex flex-col items-center gap-6 md:gap-8 lg:gap-10"
        >
          {/* HEADING */}
          <h1
            className="
              font-['Roboto_Condensed'] 
              font-bold 
              text-2xl sm:text-3xl md:text-4xl lg:text-[42px]
              leading-tight sm:leading-[110%] tracking-[-0.02em]
              uppercase text-center text-gray-900
              max-w-4xl
              px-4
            "
          >
            Lorem ipsum dolor sit amet consectetur. Dui.
          </h1>

          {/* PARAGRAPH */}
          <p
            className="
              font-inter font-normal
              text-base sm:text-lg md:text-xl
              leading-relaxed md:leading-[25px] tracking-normal
              text-center text-gray-700
              max-w-2xl
              px-4 sm:px-6
            "
          >
            Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor
            pharetra tempor quis arcu. Ipsum nullam.
          </p>

          {/* BUTTON */}
          <button
            className="
              w-auto min-w-[160px] sm:min-w-[179px]
              h-10 sm:h-[38px] md:h-12
              bg-[#1959AC] hover:bg-[#164a8f] 
              text-white 
              rounded-lg sm:rounded-[5px]
              px-6 sm:px-[24px] 
              py-2 sm:py-[9px] md:py-3
              flex items-center justify-center gap-2 sm:gap-[10px]
              font-inter font-semibold sm:font-bold 
              text-sm sm:text-[15px] md:text-base
              leading-none
              transition-all duration-200 ease-in-out
              transform hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-[#1959AC] focus:ring-offset-2
              shadow-md hover:shadow-lg
              mt-2 md:mt-4
            "
            aria-label="Learn more about Lorem Ipsum"
          >
            <span className="whitespace-nowrap">Loerum Ipsum</span>
            <ArrowRight
              size={18}
              className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
              aria-hidden="true"
            />
          </button>
        </div>


      </div>
    </section>
  );
};

export default SevenTeen;