import React from "react";
import Image from "next/image";
import image from "@/public/image15.png";
import { ArrowRight } from "lucide-react";

const Fifteen = () => {
  return (
    <div className="w-full px-[80px] py-[80px] flex flex-col gap-[80px] items-center mt-40">

      {/* INNER WRAPPER */}
      <div className="w-full max-w-[1280px] flex flex-col gap-[32px] items-center">

        {/* HEADING */}
        <h2
          className="w-full max-w-[1280px] text-[42px] font-[700] leading-[100%] tracking-[-0.02em] text-center uppercase 
          font-['Roboto_Condensed'] text-[#0F172A]"
        >
          Lorem ipsum dolor sit amet
        </h2>

        {/* PARAGRAPH */}
        <p
          className="w-full max-w-[1280px] text-[18px] font-[400] leading-[25px] text-center font-['Inter'] text-[#0F172A]"
        >
          Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla aliquam ultricies.
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum eget purus ornare. Risus elit et fringilla
          habitant ut facilisi.
        </p>
      </div>

      {/* IMAGE + CONTENT CARD */}
      <div className="w-full max-w-[1280px] flex flex-col md:flex-row items-center gap-[80px] relative overflow-visible">

        {/* IMAGE WITH SHADOW */}
        <div className="w-full max-w-[680px] flex justify-center">
          <div className="w-[680px] h-[412px] relative flex items-center justify-center">
            {/* SHADOW BOX */}
            <div
              className="
                absolute bottom-0 
                w-[680px] h-[264px] 
                bg-white border border-[#E2E8F0] rounded-[5px]
                shadow-[0_0_10px_0_#00000012,0_20px_25px_-5px_#0000001A]
              "
            ></div>

            {/* FRONT IMAGE */}
            <Image
              src={image}
              alt="section image"
              className="w-[680px] h-[412px] object-cover relative z-10"
            />
          </div>
        </div>

        {/* CONTENT CARD */}
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