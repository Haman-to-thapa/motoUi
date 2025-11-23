import React from "react";
import Image from "next/image";
import image from "@/public/image15.png";
import { ArrowRight } from "lucide-react";

const Fifteen = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-20 py-16 md:py-20 flex flex-col gap-12 md:gap-20 items-center mt-20 md:mt-40">
      <div className="w-full max-w-7xl flex flex-col gap-6 md:gap-8 items-center">
        <h2 className="w-full max-w-7xl text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight tracking-[-0.02em] text-center uppercase font-['Roboto_Condensed'] text-[#0F172A]">
          Lorem ipsum dolor sit amet
        </h2>

        <p className="w-full max-w-7xl text-base sm:text-lg md:text-[18px] font-normal leading-relaxed md:leading-[25px] text-center font-['Inter'] text-[#0F172A] px-4">
          Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla aliquam ultricies.
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum eget purus ornare. Risus elit et fringilla
          habitant ut facilisi.
        </p>
      </div>

      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-12 md:gap-20 relative">
        <div className="w-full max-w-2xl lg:max-w-[680px] flex justify-center">
          <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[412px] max-w-2xl lg:max-w-[680px] relative flex items-center justify-center">
            <div className="absolute bottom-0 w-full h-40 sm:h-48 md:h-56 lg:h-[264px] bg-white border border-[#E2E8F0] rounded-[5px] shadow-[0_0_10px_0_#00000012,0_20px_25px_-5px_#0000001A]"></div>
            <Image
              src={image}
              alt="section image"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[412px] object-cover relative z-10"
            />
          </div>
        </div>

        <div className=" max-w-[680px]">
          <div
            className="
               h-[264px] 
              bg-white border border-[#E2E8F0] rounded-[5px]
              shadow-[0_0_10px_0_#00000012,0_20px_25px_-5px_#0000001A]
              p-[48px] flex flex-col gap-[8px] absolute md:left-130 bottom-20 z-20
            "
          >
            <h1 className="text-[24px] font-semibold leading-[100%] tracking-[0.06em] font-['Inter'] text-[#475569]">
              Artist & Investor
            </h1>
            <p className="text-[18px] font-normal leading-[25px] font-['Inter'] text-[#0F172A]">
              Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...
            </p>

            {/* BUTTON */}
            <div className="mt-auto flex">
              <button
                className="
      w-[200px] h-[48px]
      bg-transparent border border-[#475569]
      rounded-[8px] px-[24px]
      font-roboto font-medium text-[16px] leading-[24px]
      tracking-[0.5px] text-[#475569]
      hover:bg-[#475569] hover:text-white transition-colors
      flex items-center justify-center gap-2
    "
              >
                Read Full Story <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Fifteen;