// components/HeroSlider.tsx
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "/images/welcome.jpg",
    title: "Welcome to Minsol Limited",
    description:
      "Your premier partner in consultancy and logistics for the mineral resources industry. We specialize in providing innovative solutions across a broad spectrum of services",
    buttonText: "Learn More",
    link: "#",
  },
  {
    image: "/images/manu.jpg",
    title: "Manufacturing and Distribution",
    description:
      "A wide range of high-quality products, from ground support systems and mill liners to grinding media and steel products. Tailored design, fabrication, casting, and machining solutions for custom foundry needs.",
    buttonText: "ME Digital Lab",
    link: "#",
  },
  {
    image: "/images/train.jpg",
    title: "Training for Mining/Processing Personnel",
    description:
      "Specialized programs to enhance the skills and safety of operational teams",
    buttonText: "ME FIT Grinding",
    link: "#",
  },
  {
    image: "/images/tech.jpg",
    title: "Technical and Engineering Services",
    description:
      "Comprehensive engineering, procurement, and construction management (EPCM) solutions.",
    buttonText: "ME FIT Grinding",
    link: "#",
  },
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isManual, setIsManual] = useState(false);

  useEffect(() => {
    if (!isManual) {
      const slideInterval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 10000);

      return () => clearInterval(slideInterval);
    }
  }, [isManual]);

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
    setIsManual(true);

    // Reset isManual to allow auto-slide after 5 seconds
    setTimeout(() => setIsManual(false), 10000);
  };

  return (
    <div className="relative w-full h-[480px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center text-center text-white p-6">
            <h2 className=" text-2xl md:text-5xl font-bold md:max-w-3xl capitalize">
              {slide.title}
            </h2>
            <p className="my-6 max-w-2xl text-lg">{slide.description}</p>
            <Link
              href={slide.link}
              className="bg-transparent border-2 border-white px-4 py-2 rounded-md text-sm mt-8 items-center gap-x-1 font-bold hidden"
            >
              {slide.buttonText}
              <Icon icon="ep:right" className="text-white" />
            </Link>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={` ${
              index === currentSlide
                ? "bg-main w-12 h-1 rounded"
                : "bg-gray-400 w-4 h-1 rounded"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
