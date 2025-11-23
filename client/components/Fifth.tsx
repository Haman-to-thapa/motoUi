import React from "react";
import Image from "next/image";

import logo1 from "@/public/atherlogo.jpg";
import logo2 from "@/public/bajaj.png";
import logo3 from "@/public/yamaha.png";
import logo4 from "@/public/utlralogo.jpg";
import logo5 from "@/public/heroLogo.png";
import logo6 from "@/public/heroLogo.png";
import logo7 from "@/public/honda.png";
import logo8 from "@/public/ktm.png";
import logo9 from "@/public/olalogo.png";
import logo10 from "@/public/revolt.png";
import logo11 from "@/public/royallogo.png";
import logo12 from "@/public/tvs.png";
import torkLogo from "@/public/troklogo.jpg";

export default function FifthSection() {
  const logos = [
    { id: 1, image: logo5, name: "Hero", subtitle: "" },
    { id: 2, image: logo11, name: "Royal Enfield", subtitle: "" },
    { id: 3, image: logo3, name: "YAMAHA", subtitle: "Kets Your Heart" },
    { id: 4, image: logo12, name: "TVS", subtitle: "" },
    { id: 5, image: logo1, name: "ATHER", subtitle: "" },
    { id: 6, image: logo9, name: "OLA ELECTRIC", subtitle: "" },
    { id: 7, image: logo10, name: "REVOLT", subtitle: "" },
    { id: 8, image: logo4, name: "ULTRAVIOLETTE", subtitle: "" },
    { id: 9, image: torkLogo, name: "TORK MOTORS", subtitle: "" },
    { id: 10, image: logo2, name: "BAJAJ", subtitle: "" },
    { id: 11, image: logo7, name: "HONDA", subtitle: "" },
    { id: 12, image: logo8, name: "KTM", subtitle: "" },
  ];

  return (
    <div className="w-full bg-white py-8 h-[650px] flex flex-col shadow-lg">
      <div className="p-4 flex-1 flex flex-col ">

        {/* Header */}
        <div className=" mx-auto mb-8 flex-shrink-0">
          <h1 className="font-['Roboto_Condensed'] font-bold text-2xl md:text-3xl leading-tight tracking-tight text-center uppercase text-gray-800">
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. COMMODO LEO AMET.
          </h1>
        </div>

        {/* Logo Grid - 4x3 Layout */}
        <div className=" overflow-hidden">
          <div className="grid grid-cols-4 gap-4 h-full">
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="flex flex-col items-center justify-center text-center hover:bg-gray-50 rounded transition-all duration-200"
              >
                {/* Logo Image */}
                <div className="w-26 h-26 md:w-40 md:h-40 flex items-center justify-center mb-2">
                  <Image
                    src={logo.image}
                    alt={`${logo.name} logo`}
                    className="max-w-full max-h-full object-contain"
                    width={120}
                    height={120}
                    placeholder="blur"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}