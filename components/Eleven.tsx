import React from 'react'
import image from '@/public/11.png'
import { ArrowRight } from 'lucide-react'

const Eleven = () => {
  return (
    <div className="relative w-full flex flex-col lg:flex-row gap-8 lg:gap-0 py-16 lg:py-20 text-gray-900 mt-20">
      {/* LEFT IMAGE - Full width on mobile, half on desktop */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <img
          src={image.src}
          alt="Left Section"
          className="w-full lg:w-auto lg:max-w-none lg:h-[600px] object-cover lg:object-right lg:absolute md:left-10"
        />
      </div>

      {/* RIGHT CONTENT - Full width on mobile, half on desktop */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8 px-4 sm:px-6 lg:px-12 xl:px-16 lg:py-8">
        {/* Small Heading */}
        <p className="text-base sm:text-lg font-medium leading-relaxed uppercase tracking-wide text-blue-500">
          Lorem ipsum
        </p>

        {/* BIG HEADING 1 */}
        <h2 className="font-['Roboto_Condensed'] font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] uppercase leading-tight tracking-tight">
          <span className='text-blue-500'>Lorem</span> ipsum dolor sit amet consectetur.
        </h2>

        {/* BIG HEADING 2 */}
        <h2 className="font-['Roboto_Condensed'] font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] uppercase leading-tight tracking-tight">
          Enim donec.
        </h2>

        {/* BODY TEXT */}
        <p className="font-['Inter'] text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700 mt-2">
          Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non.
        </p>

        {/* 6 SMALL BOXES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4">
          {Array(6).fill(0).map((_, i) => (
            <div
              key={i}
              className="w-full min-h-[48px] bg-gray-100 rounded-md flex items-center justify-center text-sm sm:text-base px-4 py-3 border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Lorem Ipsum
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <button className="w-fit flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-lg bg-[#1959AC] text-white font-medium hover:bg-[#164a94] transition-colors duration-200 text-sm md:text-base group mt-4">
          <span>Lorem Ipsum</span>
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-0 rounded-full"
        style={{
          width: "1295px",
          height: "20px",
          background: "linear-gradient(90deg, #043898 0%, #079902 45.96%, #170041 91.18%)",
        }}
      ></div>
    </div>
  )
}

export default Eleven