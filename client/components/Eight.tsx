import React from "react";

const Eight = () => {
  return (
    <section className="w-full flex justify-center py-20">
      {/* Main container */}
      <div className="w-[1200px] h-[952px] mx-auto">

        {/* Header */}
        <h1
          className="text-center uppercase font-bold"
          style={{
            fontFamily: "Roboto Condensed",
            fontSize: "42px",
            lineHeight: "100%",
            letterSpacing: "-2%",
          }}
        >
          Request a quote
        </h1>

        {/* Under box */}
        <div className="mt-[30px] w-[1108px] h-[806px] mx-auto bg-white rounded-[6px] shadow-sm p-6">

          {/* 2-Column Form Grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">

            {/* Name */}
            <div className="w-[536px] h-[84px]">
              <label className="font-medium text-sm">Name*</label>
              <input
                type="text"
                className="w-[536px] h-[46px] mt-2 border border-gray-300 rounded-[6px] px-3 focus:outline-blue-500"
              />
            </div>

            {/* Email */}
            <div className="w-[536px] h-[84px]">
              <label className="font-medium text-sm">Email*</label>
              <input
                type="email"
                className="w-[536px] h-[46px] mt-2 border border-gray-300 rounded-[6px] px-3"
              />
            </div>

            {/* Phone No */}
            <div className="w-[536px] h-[84px]">
              <label className="font-medium text-sm">Phone No*</label>
              <input
                type="text"
                className="w-[536px] h-[46px] mt-2 border border-gray-300 rounded-[6px] px-3"
              />
            </div>

            {/* Time Frame */}
            <div className="w-[536px] h-[84px]">
              <label className="font-medium text-sm">Time Frame*</label>
              <input
                type="text"
                className="w-[536px] h-[46px] mt-2 border border-gray-300 rounded-[6px] px-3"
              />
            </div>

            {/* Size */}
            <div className="w-[536px] h-[84px]">
              <label className="font-medium text-sm">Size*</label>
              <input
                type="text"
                className="w-[536px] h-[46px] mt-2 border border-gray-300 rounded-[6px] px-3"
              />
            </div>

            {/* Quantity */}
            <div className="w-[536px] h-[84px]">
              <label className="font-medium text-sm">Quantity*</label>
              <input
                type="number"
                className="w-[536px] h-[46px] mt-2 border border-gray-300 rounded-[6px] px-3"
              />
            </div>

          </div>

          {/* Textarea */}
          <div className="mt-8">
            <label className="font-medium text-sm">
              Please Describe Your Project*
            </label>
            <textarea
              className="mt-2 w-[1091px] h-[229px] border border-gray-300 rounded-[6px] p-3 resize-none"
            ></textarea>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eight;
