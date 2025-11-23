import React from "react";
import { ArrowRight } from "lucide-react";
import first from '@/public/first.png';
import second from '@/public/second.png';
import secondHero from '@/public/secondHero.png';
import thrid from '@/public/thrid.png'

const SecondSection = () => {
  return (

    <section className="w-full min-h-screen mx-auto flex justify-center bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div
        className="w-full h-auto mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        aria-labelledby="details-heading"
      >
        {/* Text Content */}
        <div className="flex flex-col justify-center px-4 lg:px-8 xl:px-16 py-8 order-2 lg:order-1">
          <p className="text-[#1959AC] font-['Inter'] text-lg sm:text-[20px] tracking-[-0.02em] font-semibold mb-4 sm:mb-6">
            Lorem ipsum dolor sit
          </p>

          <h2
            id="details-heading"
            className="font-['Roboto_Condensed'] text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-[-0.02em] text-[#222222] mb-4 sm:mb-6 leading-tight"
          >
            LOREM IPSUM
            <br />
            DOLOR SIT AMET
          </h2>

          <p className="font-['Inter'] text-base sm:text-lg lg:text-[20px] tracking-[-0.02em] font-semibold text-[#222222] max-w-lg leading-relaxed mb-8 sm:mb-12">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis molestie dui. Mi porttitor ut aliquam mattis maecenas orci eget integer in nam.
          </p>

          {/* Features List */}
          <div className="flex flex-col space-y-6 sm:space-y-8 mb-8 sm:mb-12">
            {[
              {
                img: first,
                text: "Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.",
              },
              {
                img: second,
                text: "Lorem ipsum dolor sit amet consectetur. Dicum at ac tellus faucibus urna.",
              },
              {
                img: thrid,
                text: "Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu facilisi enim.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 sm:gap-6">
                <img
                  src={item.img.src}
                  alt={`Feature ${idx + 1} showing motorcycle detail`}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg flex-shrink-0"
                  loading="lazy"
                  onError={(e: any) => {
                    e.target.src = `https://via.placeholder.com/80x80/1959AC/FFFFFF?text=Feature+${idx + 1}`;
                  }}
                />
                <p className="text-[#222222] font-['Inter'] text-base sm:text-lg lg:text-[20px] tracking-[-0.02em] font-semibold leading-relaxed flex-1">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* CTA ROW */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8 gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-3 bg-[#1959AC] hover:bg-[#0546D2] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-['Inter'] text-base sm:text-lg lg:text-[20px] tracking-[-0.02em] font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1959AC] focus:ring-opacity-50 w-full sm:w-auto text-center"
            >
              Lorem Ipsum <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            <div className="flex items-center justify-center sm:justify-start gap-3 text-[#1959AC]">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="text-[#222222] font-['Inter'] text-base sm:text-lg lg:text-[20px] tracking-[-0.02em] font-semibold">
                123456789
              </span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[550px] xl:h-[600px] flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden order-1 lg:order-2">
          <img
            src={secondHero.src}
            alt="Premium black and orange motorcycle on display with detailed features visible"
            className="w-full h-full object-cover"
            loading="eager"
            onError={(e: any) => {
              e.target.src = "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2070&auto=format&fit=crop";
            }}
          />
        </div>
      </div>
    </section>

  );
};

export default SecondSection;