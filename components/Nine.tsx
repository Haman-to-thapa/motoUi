import React from "react";
import Image from "next/image";

import googlePlay from "@/public/googlePlay.png";
import appStore from "@/public/appStore.png";
import phoneHand from "@/public/phonehand.png";

const Nine = () => {
  return (
    <section className="w-full h-auto lg:h-[717px] bg-[#F5F5F5] flex justify-center py-20 text-black relative ">
      <div className="w-full max-w-[1439px] h-auto flex flex-col lg:flex-row items-center justify-between px-4 md:px-16 mb-20">

        {/* LEFT CONTENT BOX */}
        <div className="w-full max-w-[526px] space-y-5 px-4 md:px-0">

          <p className="text-[#2F80ED] text-sm font-medium">Lorem Ipsum</p>

          <h2
            className="font-bold text-3xl md:text-4xl leading-tight"
            style={{
              fontFamily: "Roboto Condensed",
            }}
          >
            Lorem Ipsum Dolor Sit Amet
          </h2>

          <p className="text-gray-600 max-w-[430px]">
            Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi
            suspendisse convallis. Urna a urna lectus donec felis risus duis
            pellentesque. Pellentesque ultricies ipsum.
          </p>

          {/* AUTHOR NAME */}
          <div className="text-lg font-bold text-gray-800">
            Cecilia Piaz
          </div>

          {/* STORE ICONS */}
          <div className="flex gap-4 mt-4 flex-wrap">
            <Image
              src={googlePlay}
              alt="Google Play"
              width={150}
              height={50}
              className="cursor-pointer w-[130px] md:w-[150px]"
            />

            <Image
              src={appStore}
              alt="App Store"
              width={150}
              height={50}
              className="cursor-pointer w-[130px] md:w-[150px]"
            />
          </div>
        </div>

        {/* RIGHT IMAGE - Responsive */}
        <div className="">
          <Image
            src={phoneHand}
            alt="Phone in hand"
            width={400}
            height={400}
            className="w-full h-auto sm:h-[717px] object-cover"

          />
        </div>

      </div>
    </section>
  );
};

export default Nine;