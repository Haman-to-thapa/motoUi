import React from "react";
import Image from "next/image";
import bgImage from "@/public/sevenBackgroundlogo.png"


const Seventh = () => {
  return (
    <section
      className="relative w-full h-[607px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* LOGO */}
      <div className="absolute top-[44px] left-[70px] z-20 bg-[#DBDBDB] px-[25px] py-[10px] rounded-md shadow-md">
        <p className="text-black font-extrabold">LOGO</p>
      </div>

      {/* CENTER TEXT */}
      <div className="relative z-20 max-w-[812px] text-center px-4">
        <h1
          className="text-white uppercase font-bold"
          style={{
            fontFamily: "Roboto Condensed",
            fontSize: "42px",
            letterSpacing: "-2%",
            lineHeight: "100%",
          }}
        >
          DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM
          VIVERRA MI. DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING.
        </h1>
      </div>
    </section>
  );
};

export default Seventh;
