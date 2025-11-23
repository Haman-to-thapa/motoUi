import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import { MdOutlineThunderstorm } from "react-icons/md";
import { GiWhiteTower } from "react-icons/gi";
import secondIcons from '@/public/3star.png'
import { PiTimerBold } from "react-icons/pi";
import Image from "next/image";

import Profile1 from '@/public/profile.jpg'
import Profile2 from '@/public/profile2.jpg'
import Profile3 from '@/public/profile3.jpg'
import Profile4 from '@/public/profile4.jpg'

// Define TypeScript interface for card data
interface Card {
  id: number;
  icons: React.ReactNode;
  text: string;
  name: string;
  role: string;
  profileImage: any;
}

const Twelve: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Array of card data
  const cards: Card[] = [
    {
      id: 1,
      icons: <MdOutlineThunderstorm className="w-8 h-8 text-blue-600" />,
      text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
      name: "Ralph Edwards",
      role: "Solar Expert",
      profileImage: Profile1
    },
    {
      id: 2,
      icons: <Image src={secondIcons} alt="3 Stars" width={32} height={32} />,
      text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
      name: "Courtney Henry",
      role: "Energy Consultant",
      profileImage: Profile2
    },
    {
      id: 3,
      icons: <GiWhiteTower className="w-8 h-8 text-blue-600" />,
      text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
      name: "Cameron Williamson",
      role: "Installation Specialist",
      profileImage: Profile3
    },
    {
      id: 4,
      icons: <PiTimerBold className="w-8 h-8 text-blue-600" />,
      text: "Hendrerit augue ut nisi quis. Integer netus. Sit rhoncus magnis habitasse. Amet amet habitant tellus ornare. Hendrerit senectus. Mauris eget vitae praesent neque.",
      name: "John Doe",
      role: "Solar Advisor",
      profileImage: Profile4
    },
  ];

  // Card dimensions
  const largeCard = {
    width: 364,
    height: 491,
    padding: "24px 32px",
    borderRadius: 10
  };

  const smallCard = {
    width: 364,
    height: 443,
    padding: "32px",
    borderRadius: 10
  };

  const scrollToCard = (index: number): void => {
    if (scrollContainerRef.current && cardRefs.current[index]) {
      const container = scrollContainerRef.current;
      const card = cardRefs.current[index];

      if (card) {
        const containerWidth = container.clientWidth;
        const cardWidth = card.offsetWidth;
        const gap = 24; // gap-6 = 24px
        const scrollPosition = card.offsetLeft - (containerWidth - cardWidth) / 2 + gap;

        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });

        setActiveCardIndex(index);
      }
    }
  };

  const scrollLeft = (): void => {
    const newIndex = Math.max(0, activeCardIndex - 1);
    scrollToCard(newIndex);
  };

  const scrollRight = (): void => {
    const newIndex = Math.min(cards.length - 1, activeCardIndex + 1);
    scrollToCard(newIndex);
  };

  // Handle scroll to detect active card with Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setActiveCardIndex(index);
            }
          }
        });
      },
      {
        root: scrollContainerRef.current,
        threshold: 0.6, // Card is considered active when 60% is visible
        rootMargin: '0px'
      }
    );

    // Observe all cards
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  // Handle manual scroll with buttons
  const handleManualScroll = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      scrollLeft();
    } else {
      scrollRight();
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-20 py-16 lg:py-20 flex flex-col gap-12 lg:gap-20 bg-[#155ADA] mt-20">

      {/* ------------------ TOP SECTION ------------------ */}
      <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-4">

        {/* LEFT TEXT BLOCK */}
        <div className="w-full lg:w-[814px] flex flex-col gap-6">
          <h5 className="font-['Inter'] font-semibold text-xl lg:text-2xl leading-none tracking-tight text-white">
            Join other Sun harvesters
          </h5>

          <h1 className="font-['Roboto_Condensed'] font-bold text-3xl lg:text-4xl xl:text-[42px] uppercase leading-tight tracking-tight text-white">
            LOREM IPSUM DOLOR SIT AMET
          </h1>

          <p className="font-['Inter'] text-base lg:text-lg leading-relaxed text-white/90">
            Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
            Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.
          </p>
        </div>

        {/* BUTTON BLOCK */}
        <div className="w-full lg:w-[238px] pt-0 lg:pt-10">
          <button className="w-full lg:w-auto px-8 py-4 rounded-lg bg-white shadow-lg font-['Inter'] font-bold text-base text-black hover:bg-gray-100 transition-colors duration-200">
            Lorem Ipsum
          </button>
        </div>
      </div>

      {/* ------------------ CARDS SECTION WITH SMOOTH SCROLLING ------------------ */}
      <div className="w-full max-w-[1280px] mx-auto relative">

        {/* SCROLLABLE CONTAINER */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-8 items-center"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            scrollBehavior: 'smooth'
          }}
        >
          {cards.map((card, index) => {
            const isActive = index === activeCardIndex;
            const cardStyle = isActive ? largeCard : smallCard;

            return (
              <div
                key={card.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="flex-shrink-0 bg-white border border-gray-300 flex flex-col transition-all duration-500 ease-in-out hover:shadow-lg"
                style={{
                  width: `${cardStyle.width}px`,
                  height: `${cardStyle.height}px`,
                  padding: cardStyle.padding,
                  borderRadius: `${cardStyle.borderRadius}px`,
                  opacity: 1,
                  borderWidth: '1px',
                  transform: isActive ? 'scale(1.02)' : 'scale(1)',
                  boxShadow: isActive ? '0 20px 40px rgba(0,0,0,0.15)' : '0 4px 12px rgba(0,0,0,0.05)',
                  transition: 'all 0.5s ease-in-out'
                }}
              >
                {/* ICON SECTION - Exact dimensions: 64x64 */}
                <div
                  className="flex items-center justify-center bg-gray-100 rounded-lg mb-4"
                  style={{
                    width: '64px',
                    height: '64px',
                    opacity: 1
                  }}
                >
                  {card.icons}
                </div>

                {/* CARD CONTENT */}
                <div className="flex-1">
                  <p className="font-['Roboto'] text-base leading-relaxed text-gray-700">
                    {card.text}
                  </p>
                </div>

                {/* PROFILE SECTION */}
                <div className="flex items-center gap-3 mt-4">
                  {/* Profile Image - Exact dimensions: 64x64 with border radius 100px */}
                  <div
                    className="flex-shrink-0 overflow-hidden"
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '100px',
                      opacity: 1
                    }}
                  >
                    <Image
                      src={card.profileImage}
                      alt={card.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col min-w-0">
                    <span className="font-['Inter'] font-semibold text-gray-900 text-lg truncate">
                      {card.name}
                    </span>
                    <span className="font-['Inter'] text-sm text-gray-600 truncate">
                      {card.role}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ------------------ ARROW BUTTONS ------------------ */}
      <div className="w-full max-w-[1280px] mx-auto flex justify-center lg:justify-start">
        <div className="flex gap-4">
          <button
            onClick={() => handleManualScroll('left')}
            disabled={activeCardIndex === 0}
            className="w-12 h-12 bg-white border border-white shadow-lg flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-6 h-6 text-black" />
          </button>

          <button
            onClick={() => handleManualScroll('right')}
            disabled={activeCardIndex === cards.length - 1}
            className="w-12 h-12 bg-white border border-white shadow-lg flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowRight className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>

    </div>
  );
};

export default Twelve;