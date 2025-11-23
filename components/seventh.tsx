import React from "react";
import Image from "next/image";
import bgImage from "@/public/sevenBackgroundlogo.png"

const Seventh = () => {
  return (
    <section
      className="relative w-full min-h-[400px] sm:min-h-[500px] md:h-[607px] flex items-center justify-center py-16 md:py-0"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute top-4 sm:top-6 md:top-[44px] left-4 sm:left-6 md:left-[70px] z-20 bg-[#DBDBDB] px-4 sm:px-6 md:px-[25px] py-2 sm:py-3 md:py-[10px] rounded-md shadow-md">
        <p className="text-black font-extrabold text-sm sm:text-base md:text-lg">LOGO</p>
      </div>

      <div className="relative z-20 max-w-4xl md:max-w-[812px] text-center px-4 sm:px-6 md:px-8">
        <h1 className="text-white uppercase font-bold font-['Roboto_Condensed'] text-xl sm:text-2xl md:text-3xl lg:text-[42px] leading-tight sm:leading-tight tracking-[-0.02em]">
          DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM
          VIVERRA MI. DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING.
        </h1>
      </div>
    </section>
  );
};

export default Seventh;