"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import whiteCard from "@/public/image14.png";
import injecter from "@/public/injecter.png";
import rightImage from "@/public/image14.png"

const Fourteen = () => {
  return (
    <section className="relative w-full bg-white min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-20 py-16 lg:py-32 overflow-visible">

      {/* MAIN CONTENT CONTAINER */}
      <div className="relative w-full max flex flex-col lg:flex-row items-start justify-between gap-12 bg-[#F1F1F1]">

        {/* LEFT TEXT BLOCK */}
        <div className="w-full lg:w-1/2 p-10 max-w-[612px] space-y-6 text-gray-900 z-20">

          {/* Heading */}
          <h1
            className="uppercase font-bold text-gray-900"
            style={{
              fontFamily: "Roboto Condensed",
              fontSize: "42px",
              lineHeight: "110%",
              letterSpacing: "-0.02em",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Dignissim tellus.
          </h1>

          {/* Paragraph */}
          <p
            style={{
              fontFamily: "Inter",
              fontSize: "18px",
              lineHeight: "28px",
            }}
            className="text-gray-700 opacity-90"
          >
            Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit
            laoreet urna sapien quam pulvinar. Dolor aliquet est tortor tincidunt
            ultricies feugiat mauris. Aliquam platea turpis porta nisl felis.
            Massa in facilisis semper libero eget eu quisque bibendum platea.
            Tortor fames.
          </p>

          {/* Button */}
          <button className="bg-white text-[#1959AC] font-semibold flex items-center gap-2 px-6 py-3 rounded-md text-[15px] border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            Lorem Ipsum <ArrowRight size={16} />
          </button>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative -top-20 w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div
            className="relative"
            style={{
              width: "500px",
              height: "500px",
            }}
          >
            <Image
              src={rightImage}
              alt="Right side person"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>

        {/* BOTTOM FLOATING CARD */}
        <div
          className="absolute p-5  bg-white rounded-[10px] shadow-xl z-30 border border-gray-100"
          style={{
            width: "546px",
            height: "395px",
            bottom: "-300px",
            left: "0px",
            padding: "30px 40px",
          }}
        >
          {/* Injecter Top-Right */}
          <div className="absolute top-[20px] right-[20px]">
            <Image src={injecter} alt="injecter" width={24} height={24} />
          </div>

          {/* Heading */}
          <h2
            className="font-semibold mb-6 text-gray-900"
            style={{
              fontFamily: "Inter",
              fontSize: "20px",
              lineHeight: "100%",
              letterSpacing: "-0.02em",
            }}
          >
            Lorem ipsum dolor sit
          </h2>

          {/* Paragraphs */}
          <div className="flex flex-col gap-5">
            <p
              style={{
                fontFamily: "Inter",
                fontSize: "18px",
                lineHeight: "25px",
              }}
              className="text-gray-700"
            >
              Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae
              amet habitasse semper.
            </p>

            <p
              style={{
                fontFamily: "Inter",
                fontSize: "18px",
                lineHeight: "25px",
              }}
              className="text-gray-700"
            >
              Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut
              placerat vitae amet suspendisse fermentum velit. Nibh dolor nunc id
              tristique sit.
            </p>

            <p
              style={{
                fontFamily: "Inter",
                fontSize: "18px",
                lineHeight: "25px",
              }}
              className="text-gray-700"
            >
              Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet
              quisque scelerisque facilisi. Ultrices lectus viverra pharetra
              commodo.
            </p>
          </div>
        </div>

      </div>
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-0 rounded-full"
        style={{
          width: "1295px",
          height: "20px",
          background: "linear-gradient(90deg, #043898 0%, #079902 45.96%, #170041 91.18%)",
        }}
      ></div>
    </section>
  );
};

export default Fourteen;