import React from "react";
import { ArrowRight } from "lucide-react";
import dotIcon from '@/public/dotIcon.png';
import thirdSectionImage from '@/public/thridseason.png';

const ThirdSection = () => {
  return (
    <div className="w-full bg-white">
      <section className="w-full min-h-screen mx-auto flex justify-center bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full h-auto mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">


          <div className="flex flex-col justify-center px-4 lg:px-8 xl:px-16 py-8 order-2 lg:order-1">
            <p className="text-[#1959AC] font-['Inter'] text-lg sm:text-[20px] tracking-[-0.02em] font-semibold mb-4 sm:mb-6">
              Lorem ipsum dolor sit amet
            </p>

            <h2 className="font-['Roboto_Condensed'] text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-[-0.02em] text-[#222222] mb-4 sm:mb-6 leading-tight">
              LOREM IPSUM DOLOR SIT
              <br />
              AMET CONSECTETUR. EU ELIT.
            </h2>

            <p className="font-['Inter'] text-base sm:text-lg lg:text-[20px] tracking-[-0.02em] font-semibold text-[#222222] max-w-lg leading-relaxed mb-8 sm:mb-12">
              Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend
              condimentum in vitae faucibus. Amet massa malesuada sit pretium. Donec
              pharetra erat lacus suspendisse ornare.

            </p>

            {/* Features List with Big Icons */}
            <div className="flex flex-col space-y-6 sm:space-y-8 mb-8 sm:mb-12">
              {[
                {
                  text: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
                  description: "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum."
                },
                {
                  text: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
                  description: "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum."
                },
                {
                  text: "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
                  description: "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum."
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 sm:gap-6">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                    <img
                      src={dotIcon.src}
                      alt={`Feature ${idx + 1} icon`}
                      className="w-[36px] h-[38.47] sm:w-10 sm:h-10 object-contain"
                      loading="lazy"
                      onError={(e: any) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
                            <div class="w-4 h-4 sm:w-5 sm:h-5 bg-[#1959AC] rounded-full"></div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#222222] font-['Inter'] text-base sm:text-lg lg:text-[20px] tracking-[-0.02em] font-semibold leading-relaxed mb-2">
                      {item.text}
                    </p>
                    <p className="text-[#222222] font-['Inter'] text-base tracking-[-0.02em] leading-relaxed opacity-80">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>


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

          <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[550px] xl:h-[600px] flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden order-1 lg:order-2">
            <img
              src={thirdSectionImage.src}
              alt="Business professionals collaborating in a modern office"
              className="w-full h-full object-contain"
              loading="eager"
              onError={(e: any) => {
                e.target.src = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
              }}
            />
          </div>
        </div>
      </section>


      <div className="w-full py-10">
        <div className="h-2 bg-gradient-to-r from-blue-600 via-green-500 to-blue-800 rounded-full w-full"></div>
      </div>

    </div >
  );
};

export default ThirdSection;