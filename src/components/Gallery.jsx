// src/components/Gallery.jsx
import React, { useState, useEffect } from "react";
import { FaImages } from "react-icons/fa6";

const IMAGES = [
  {
    url: "/a1.jpg",
    alt: "Mountain landscape",
    rotation: -3,
    text1: "A charming gazebo pavilion - ",
    text2: "to unwind and enjoy serene surroundings",
  },
  {
    url: "/a2.jpg",
    alt: "Foggy scene",
    rotation: 2,
    text1: "A vibrant and safe play area space - ",
    text2: "designed for kids to play and explore.",
  },
  {
    url: "/a3.jpg",
    alt: "Person by the lake",
    rotation: -1,
    text1: "A charming rural-themed - ",
    text2: "spot that celebrates tradition and culture.",
  },
  {
    url: "/a4.jpg",
    alt: "Forest path",
    rotation: 4,
    text1: "Smooth, well-laid roads - ",
    text2: "easy and comfortable connectivity within the community.",
  },
  {
    url: "/a5.jpg",
    alt: "City skyline",
    rotation: -2,
    text1: "A peaceful retreat designed for your family - ",
    text2: "to relax and rejuvenate amidst nature.",
  },
  {
    url: "/a6.jpg",
    alt: "Desert dunes",
    rotation: 1,
    text1: "A peaceful retreat designed for your family - ",
    text2: "to relax and rejuvenate amidst nature.",
  },
  {
    url: "/a7.jpg",
    alt: "greenery",
    rotation: -4,
    text1: "A cozy outdoor corner surrounded by - ",
    text2: "lush greenery, perfect for relaxation and reflection.",
  },
  {
    url: "/a8.jpg",
    alt: "entryway",
    rotation: 3,
    text1: "A grand entryway that reflects the - ",
    text2: "pride and elegance of Opal Peace City.",
  },
  {
    url: "/a10.jpg",
    alt: "house",
    rotation: -2,
    text1: "A peaceful retreat designed for your family - ",
    text2: "to relax and rejuvenate amidst nature.",
  },
  {
    url: "/a11.jpg",
    alt: "Lush garden",
    rotation: 2,
    text1: "A thoughtfully designed  -",
    text2: " space that blends nature and modern living.",
  },
  {
    url: "/a12.jpg",
    alt: "entryway",
    rotation: -1,
    text1: "A grand entryway that reflects the - ",
    text2: "pride and elegance of Opal Peace City.",
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-change every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const getTransform = (i) => {
    const position = (i - activeIndex + IMAGES.length) % IMAGES.length;
    const baseScale = 0.95;
    const scale = baseScale - position * 0.02;
    const translateX = position * 4;
    const translateY = position * 4;
    const rotation = IMAGES[i].rotation;

    return {
      transform: `translate(${translateX}px, ${translateY}px) rotate(${rotation}deg) scale(${scale})`,
      zIndex: IMAGES.length - position,
      filter: `brightness(${1 - position * 0.05})`,
      opacity: position > 3 ? 0 : 1,
    };
  };

  const next = () => setActiveIndex((prev) => (prev + 1) % IMAGES.length);
  const prev = () =>
    setActiveIndex((prev) => (prev === 0 ? IMAGES.length - 1 : prev - 1));

  return (
    <div
      className="max-w-7xl mx-auto px-4 bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage:
          "url('/technology-abstract-background-with-particle-lines.jpg')",
      }}
    >
      <section className="max-w-7xl relative mx-auto py-5 px-6 font-sans">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-700 rounded-2xl shadow-lg shadow-red-500/40 mb-4">
            <FaImages className="w-8 h-8 text-white" />
          </div>

          <p className="text-3xl font-bold mb-4 text-red-700 font-mono">
            Gallery
          </p>
          <p className="text-gray-700 max-w-3xl mx-auto ">
            Explore our exclusive gallery showcasing the essence of Sun City
            Opal through captivating images that tell our story.
          </p>
        </div>

        {/* Gallery Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Image Stack */}
          <div className="relative aspect-video h-[190px] sm:w-full sm:h-full md:w-full md:h-[380px] flex justify-center items-center">
            {IMAGES.map((img, i) => (
              <img
                key={i}
                src={img.url}
                alt={img.alt}
                className={`absolute w-full h-full object-cover rounded-2xl shadow-2xl transition-all duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  i === activeIndex ? "scale-105" : ""
                }`}
                style={getTransform(i)}
              />
            ))}
          </div>

          {/* Text Section */}
          <div className="max-w-md text-gray-800 text-center md:text-left transition-all duration-700 ease-in-out">
            <p
              key={IMAGES[activeIndex].text1}
              className="text-xl sm:text-3xl font-medium leading-snug transition-opacity duration-700 animate-fadeIn"
            >
              {IMAGES[activeIndex].text1}
              <span className="text-xl sm:text-2xl font-light leading-snug transition-opacity duration-700 animate-fadeIn">
                {IMAGES[activeIndex].text2}
              </span>
            </p>

            {/* Navigation */}
            <div className="flex justify-center md:justify-start gap-4 mt-8">
              <button
                onClick={prev}
                className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition"
              >
                &larr;
              </button>
              <button
                onClick={next}
                className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
