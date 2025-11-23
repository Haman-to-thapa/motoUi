import React from "react";
import Image from "next/image";

import image1 from "@/public/1.png";
import image2 from "@/public/2.png";
import image3 from "@/public/3.png";
import image4 from "@/public/4.png";

const Sixth = () => {
  const cards = [
    { img: image1 },
    { img: image2 },
    { img: image3 },
    { img: image4 },
  ];

  return (
    <section className="w-full flex flex-col items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="w-full max-w-7xl">
        <h2 className="text-[#0085FF] text-sm sm:text-base font-semibold">
          Lorem ipsum dolor sit amet
        </h2>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 font-['Roboto_Condensed'] uppercase">
          LOREM IPSUM DOLOR SIT
        </h1>

        <p className="mt-3 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl">
          Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis
          donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam.
          Non nisi iaculis at felis aliquet. Hendrerit tellus ut purus lectus.
        </p>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-xl shadow-md border border-gray-200 overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-full h-48 sm:h-52 lg:h-[205px]">
                <Image
                  src={card.img}
                  alt={`Feature ${index + 1} showing service offering`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-4 sm:p-5 lg:p-6">
                <h3 className="font-semibold text-lg sm:text-xl font-['Inter']">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>

                <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat
                  fauci bus cursus nisi. Nunc montes molestie a vitae vulputate.
                  Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero
                  iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim
                  venenatis bibendum.
                </p>

                <button className="mt-4 text-[#0085FF] text-sm sm:text-base font-medium hover:underline transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sixth;