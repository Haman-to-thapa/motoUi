import React from "react";
import { ArrowRight } from "lucide-react";
import bgImage from "@/public/fourth.png";

export default function FourthSection() {
  return (
    <div className="p-4 sm:p-6 md:p-10 bg-white">
      <section
        className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[750px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="w-full flex justify-center lg:justify-start lg:absolute lg:-left-40 lg:-top-20 mb-8 lg:mb-0">
            <div className="bg-white px-6 sm:px-8 py-3 sm:py-4 rounded-md shadow">
              <span className="text-black font-['Roboto_Condensed'] text-xl sm:text-2xl font-bold">
                LOGO
              </span>
            </div>
          </div>

          <div className="text-center lg:mt-6">
            <h1 className="font-['Roboto_Condensed'] text-xl sm:text-2xl md:text-3xl lg:text-[40px] xl:text-[44px] font-bold leading-tight sm:leading-tight tracking-tight max-w-4xl mx-auto">
              LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI.
            </h1>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed sm:leading-relaxed max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at nec risus amet.
              Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id.
            </p>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed sm:leading-relaxed max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non.
              Ornare semper in tincidunt pellentesque cras mauris in vitae.
            </p>

            <div className="mt-6 sm:mt-8 flex justify-center">
              <button className="flex items-center gap-2 bg-white text-black font-['Inter'] px-5 sm:px-6 py-2 sm:py-3 rounded-md text-base sm:text-lg font-medium hover:bg-gray-200 transition active:scale-95">
                Lorem ipsum
                <ArrowRight size={18} className="sm:w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}