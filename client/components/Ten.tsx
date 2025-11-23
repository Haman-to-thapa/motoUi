import React from 'react'
import bgImage from '@/public/bg-image-.png'
import { ArrowRight } from 'lucide-react'

const Ten = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center px-4 py-16 md:py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background image with overlay for better readability */}
      <div className="absolute inset-0 w-full h-screen ">
        <img
          src={bgImage.src}
          alt="Background"
          className="w-full h-full object-contain"
        />
        {/* Optional overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* CONTENT */}
      <div className="absolute top-20 left-10 z-10 w-full max-w-6xl mx-auto  ">
        <div className="max-w-xl lg:max-w-2xl flex flex-col gap-6 md:gap-8">

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
            Lorem ipsum dolor sit amet consectetur.
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="w-fit flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-lg bg-[#1959AC] text-white font-medium hover:bg-[#164a94] transition-colors duration-200 text-sm md:text-base group">
              <span>Lorem Ipsum</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
            </button>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Ten