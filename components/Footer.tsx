import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full bg-[#171E2B] py-12 md:py-16 lg:py-[60px] px-6 sm:px-8 lg:px-10 xl:px-[40px] flex justify-center">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 xl:gap-[80px]">


        <div className="flex flex-col items-center lg:items-start">
          <div
            className="
              font-inter font-extrabold 
              text-2xl sm:text-3xl md:text-[32px] leading-[100%]
              tracking-[-0.02em] text-white
              mb-4 lg:mb-0
            "
          >
            LOGO
          </div>

          <p className="text-gray-400 font-['Figtree'] text-sm md:text-base max-w-xs text-center lg:text-left mt-2 hidden lg:block">
            Your trusted partner for innovative solutions
          </p>
        </div>


        <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">


          <div className="flex flex-col gap-4 md:gap-6">
            <h3
              className="
                text-white font-['Figtree'] font-semibold
                text-base sm:text-lg md:text-[18px] leading-[23px] tracking-[-0.04em]
                border-b border-gray-600 pb-2
              "
            >
              Company
            </h3>

            <ul className="flex flex-col gap-3 md:gap-4">
              {['About Us', 'Our Team', 'Careers', 'Press'].map((item, index) => (
                <li
                  key={index}
                  className="
                    text-gray-300 font-['Figtree'] 
                    text-sm sm:text-base md:text-[18px] leading-[23px] tracking-[-0.04em]
                    hover:text-white cursor-pointer transition-colors duration-200
                    py-1
                  "
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>


          <div className="flex flex-col gap-4 md:gap-6">
            <h3
              className="
                text-white font-['Figtree'] font-semibold
                text-base sm:text-lg md:text-[18px] leading-[23px] tracking-[-0.04em]
                border-b border-gray-600 pb-2
              "
            >
              Services
            </h3>

            <ul className="flex flex-col gap-3 md:gap-4">
              {['Web Design', 'Development', 'Marketing', 'Consulting'].map((item, index) => (
                <li
                  key={index}
                  className="
                    text-gray-300 font-['Figtree'] 
                    text-sm sm:text-base md:text-[18px] leading-[23px] tracking-[-0.04em]
                    hover:text-white cursor-pointer transition-colors duration-200
                    py-1
                  "
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>


          <div className="flex flex-col gap-4 md:gap-6">
            <h3
              className="
                text-white font-['Figtree'] font-semibold
                text-base sm:text-lg md:text-[18px] leading-[23px] tracking-[-0.04em]
                border-b border-gray-600 pb-2
              "
            >
              Resources
            </h3>

            <ul className="flex flex-col gap-3 md:gap-4">
              {['Blog', 'Documentation', 'Support', 'API'].map((item, index) => (
                <li
                  key={index}
                  className="
                    text-gray-300 font-['Figtree'] 
                    text-sm sm:text-base md:text-[18px] leading-[23px] tracking-[-0.04em]
                    hover:text-white cursor-pointer transition-colors duration-200
                    py-1
                  "
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>


          <div className="flex flex-col gap-4 md:gap-6">
            <h3
              className="
                text-white font-['Figtree'] font-semibold
                text-base sm:text-lg md:text-[18px] leading-[23px] tracking-[-0.04em]
                border-b border-gray-600 pb-2
              "
            >
              Legal
            </h3>

            <ul className="flex flex-col gap-3 md:gap-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer'].map((item, index) => (
                <li
                  key={index}
                  className="
                    text-gray-300 font-['Figtree'] 
                    text-sm sm:text-base md:text-[18px] leading-[23px] tracking-[-0.04em]
                    hover:text-white cursor-pointer transition-colors duration-200
                    py-1
                  "
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;