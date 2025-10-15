import { useState, useEffect } from "react";

export default function VideoHero() {
  const images = ["/slider1.jpg", "/slider2.jpg", "/slider3.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Typing effect states
  const fullText = "The Smartest Way to Grow Your Wealth";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = 100; // typing speed in ms
  const deletingSpeed = 50; // deleting speed in ms
  const pauseDelay = 1500; // pause after full text

  useEffect(() => {
    // Slider interval
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // change every 4s
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    let timeout;

    if (!isDeleting && charIndex <= fullText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), pauseDelay);
        }
      }, typingSpeed);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, charIndex));
        setCharIndex(charIndex - 1);
        if (charIndex === 0) setIsDeleting(false);
      }, deletingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, fullText]);

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
          {displayedText}
          <span className="animate-blink">|</span>
        </h1>
        <p className="text-white text-lg md:text-3xl text-center mb-6 font-lobster-two">
          Open plots at JSR Group Suncity – Opal Peace City
        </p>
      </div>
    </div>
  );
}
