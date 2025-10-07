import { useState, useEffect } from "react";

export default function VideoHero() {
  const images = ["/slider1.jpg", "/slider2.jpg", "/slider3.jpg"];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // change every 4s
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* Background Images */}
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`slide-${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center mb-4 font-zen-dots">
          The Smartest Way to Grow Your Wealth
        </h1>
        <p className="text-white text-lg md:text-3xl text-center mb-6 font-lobster-two">
          Open plots at JSR Group Suncity – Opal Peace City
        </p>
      </div>
    </div>
  );
}
