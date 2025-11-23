"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

type Props = {}

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
  },
  {
    question: "Urna a urna lectus donec felis risus duis pellentesque?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
  },
  {
    question: "Pellentesque ultricies ipsum?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis.",
  },
  {
    question: "Vulputate amet aliquet morbi suspendisse convallis?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Urna a urna lectus donec felis risus duis pellentesque.",
  },
  {
    question: "Donec felis risus duis pellentesque ultricies?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Pellentesque ultricies ipsum.",
  },
];

const Sixteen = (props: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyPress = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleFAQ(index);
    }
  };

  return (
    <section
      className="
        w-full 
        bg-[#FBFBFB] 
        py-8 md:py-12 lg:py-16 xl:py-20
        px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24
        flex justify-center
      "
      aria-labelledby="faq-heading"
    >
      <div className="w-full max-w-4xl lg:max-w-6xl flex flex-col gap-8 md:gap-12 lg:gap-16">

        {/* ============================
           SECTION HEADING
        ============================= */}
        <header className="text-center">
          <h2
            id="faq-heading"
            className="
              font-['Roboto_Condensed']
              font-bold
              text-2xl sm:text-3xl md:text-4xl lg:text-[42px]
              leading-tight
              tracking-[-0.02em]
              uppercase
              text-[#0F172A]
              mx-auto
              max-w-4xl
            "
          >
            Frequently Asked Questions (FAQs)
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services and offerings.
          </p>
        </header>

        {/* ============================
           FAQ LIST
        ============================= */}
        <div
          className="flex flex-col w-full"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="
                  w-full border-t border-black/20 
                  first:border-t-0
                  px-4 sm:px-6 md:px-8
                  py-4 sm:py-6 md:py-8
                  flex flex-col gap-3 md:gap-4
                "
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                {/* ROW (question + icon) */}
                <div
                  className="
                    w-full flex justify-between items-start gap-4
                    cursor-pointer
                    hover:bg-gray-50/50 rounded-lg transition-colors
                    p-2 -mx-2
                  "
                  onClick={() => toggleFAQ(index)}
                  onKeyDown={(e) => handleKeyPress(e, index)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  itemProp="name"
                >
                  {/* QUESTION */}
                  <h3 className="
                    flex-1 
                    text-base sm:text-lg md:text-xl
                    font-normal leading-relaxed md:leading-[25px] 
                    text-black 
                    font-['Inter']
                    pr-2
                  ">
                    {item.question}
                  </h3>

                  {/* ICON */}
                  <div className="
                    flex-shrink-0 
                    w-5 h-5 sm:w-6 sm:h-6
                    flex items-center justify-center 
                    text-black
                    mt-1
                  ">
                    {isOpen ? (
                      <Minus className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                    ) : (
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                    )}
                  </div>
                </div>

                {/* ANSWER */}
                <div
                  id={`faq-answer-${index}`}
                  className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  {isOpen && (
                    <p
                      className="
                        text-sm sm:text-base md:text-lg
                        font-normal leading-relaxed md:leading-[25px] 
                        text-black 
                        font-['Inter']
                        w-full
                        pb-2
                        px-2
                      "
                      itemProp="text"
                    >
                      {item.answer}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Sixteen;