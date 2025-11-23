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
    <section className="w-full flex flex-col items-center py-20 px-5 bg-white">
      {/* Top Title */}
      <h2 className="text-[#0085FF] text-sm font-semibold w-full max-w-[1280px]">
        Lorem ipsum dolor sit amet
      </h2>

      <h1 className="text-3xl font-bold mt-2 w-full max-w-[1280px]">
        LOREM IPSUM DOLOR SIT
      </h1>

      <p className="mt-3 text-gray-600 w-full max-w-[1280px]">
        Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis
        donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam.
        Non nisi iaculis at felis aliquet. Hendrerit tellus ut purus lectus.
      </p>

      {/* Card Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-[1280px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-xl shadow-md border border-gray-200 overflow-hidden bg-white"
          >
            {/* Image */}
            <div className="w-full h-[205px]">
              <Image
                src={card.img}
                alt="card-img"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="font-semibold">
                Lorem ipsum dolor sit amet consectetur.
              </h3>

              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat
                fauci bus cursus nisi. Nunc montes molestie a vitae vulputate.
                Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero
                iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim
                venenatis bibendum.
              </p>

              <button className="mt-4 text-[#0085FF] text-sm font-medium hover:underline">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sixth;
