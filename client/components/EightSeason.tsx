import React from "react";

const Eight = () => {
  return (
    <section className="mt-20 w-full flex justify-center py-20 bg-white text-gray-900">
      {/* Main container */}
      <div className="w-full max-w-[1200px] mx-auto px-4">

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

        {/* Form Box */}
        <div className="mt-8 w-full max-w-[1108px] mx-auto bg-white rounded-[6px] shadow-sm p-6">

          {/* 2-Column Grid (Responsive) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

            {/* Name */}
            <div>
              <label className="font-medium text-sm">Name*</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full h-[46px] mt-2 border border-gray-300 rounded-[6px] px-3 focus:outline-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="font-medium text-sm">Email*</label>
              <input
                type="email"
                placeholder="example@domain.com"
                className="w-full h-[46px] mt-2 border border-gray-300 rounded-[6px] px-3"
              />
            </div>

            {/* Phone No */}
            <div>
              <label className="font-medium text-sm">Phone No*</label>
              <input
                type="text"
                placeholder="Your phone number"
                className="w-full h-[46px] mt-2 border border-gray-300 rounded-[6px] px-3"
              />
            </div>

            {/* Time Frame */}
            <div>
              <label className="font-medium text-sm">Time Frame*</label>
              <input
                type="text"
                placeholder="e.g. 1–3 weeks"
                className="w-full h-[46px] mt-2 border border-gray-300 rounded-[6px] px-3"
              />
            </div>

            {/* Size */}
            <div>
              <label className="font-medium text-sm">Size*</label>
              <input
                type="text"
                placeholder="Project size or dimensions"
                className="w-full h-[46px] mt-2 border border-gray-300 rounded-[6px] px-3"
              />
            </div>

            {/* Quantity */}
            <div>
              <label className="font-medium text-sm">Quantity*</label>
              <input
                type="number"
                placeholder="Number of items"
                className="w-full h-[46px] mt-2 border border-gray-300 rounded-[6px] px-3"
              />
            </div>

          </div>

          {/* Textarea */}
          <div className="mt-8">
            <label className="font-medium text-sm">
              Please Describe Your Project*
            </label>
            <textarea
              placeholder="Provide all important details so we can quote accurately..."
              className="mt-2 w-full h-[229px] border border-gray-300 rounded-[6px] p-3 resize-none"
            ></textarea>
          </div>
        </div>

        {/* Terms Text */}
        <div className="mt-4 max-w-[1108px] mx-auto text-sm text-gray-600 flex justify-center">
          <p>
            By submitting this form you agree to our <span className="underline">Terms of Service</span> and <span className="underline">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Eight;
