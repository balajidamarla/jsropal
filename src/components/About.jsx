// src/components/About.jsx
import { useState, useEffect } from "react";
import { CheckCheck, Landmark } from "lucide-react";

// Content array for the rotating banner
const rotatingApprovals = ["LP.No: 102/2020/H", "TS RERA NO: P02000002905"];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  // State for the rotating text
  const [currentApprovalIndex, setCurrentApprovalIndex] = useState(0);

  useEffect(() => {
    // Initial animation trigger for section fade-in
    setIsVisible(true);

    // --- Logic for Text Rotation ---
    const interval = setInterval(() => {
      // Cycle the index every 4 seconds
      setCurrentApprovalIndex(
        (prevIndex) => (prevIndex + 1) % rotatingApprovals.length
      );
    }, 4000); // Wait 4 seconds before swapping

    return () => clearInterval(interval);
  }, []);

  const currentApprovalText = rotatingApprovals[currentApprovalIndex];

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div
          className={`relative transition-all duration-1000 transform -mt-20 lg:mt-0 lg:pt-20 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-20 opacity-0"
          }`}
        >
          {/* Main Image */}
          {/* Adjusted pt-8 to pt-0 to let the secondary image overlap better, if desired */}
          <div className="relative pt-0 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/Gemini_Generated_Image_6m4ho96m4ho96m4h.png"
              alt="Modern Real Estate"
              className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Secondary Image - CHANGED position from -top-8 -left-8 to -top-16 -left-8 for a higher placement */}
          <div className="absolute -top-16 -left-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden md:block">
            <img
              src="/pexels-weirdfish-2640604.jpg"
              alt="Interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Side - Kept as is, as it aligns with the image on the right */}
        <div
          className={`transition-all duration-1000 delay-300 transform ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-3xl font-bold mb-6 text-red-700 font-mono">
            About Opal{" "}
            <span className="text-green-600 font-mono">Peace City</span>
          </h2>

          <p className="text-gray-800 mb-8 leading-relaxed text-justify">
            <span className="font-bold">OPAL</span> is ideally located on the
            Hyderabad-Warangal Highway, offering seamless connectivity to both
            cities while providing the peace and tranquility of suburban living.
            Invest in a unique opportunity at OPAL, featuring flourishing mango
            and red sandalwood plantations. These carefully nurtured plantations
            not only enhance the natural beauty of the property but also promise
            significant long-term returns. Escape the hustle of city life and
            immerse yourself in lush greenery and serene surroundings. Create
            unforgettable family moments in a peaceful, picturesque environment.
            Maximize your investment by earning rental income on days you’re
            away. Whether it’s a weekend getaway or an extended vacation, OPAL
            offers both a retreat and a revenue-generating asset. Designed for
            holistic living, OPAL boasts two grand entrance arches, wide roads,
            street lighting, children's play areas, parks, and meticulously
            landscaped surroundings, combining convenience with charm and
            comfort.
          </p>

          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between 
                        bg-white/90 border border-red-300 backdrop-blur-sm 
                        p-5 rounded-2xl shadow-xl transform transition duration-500 
                        hover:shadow-2xl hover:scale-[1.01]"
          >
            {/* Left Section: Icon and Main Text */}
            <div className="flex items-center mb-3 sm:mb-0">
              {/* Main Logo/Icon - Larger and Prominent */}
              <Landmark size={23} className="text-red-600 mr-4" />

              {/* Main Title with Bold, Clear Typography */}
              <span className="text-xl font-bold text-gray-800 uppercase tracking-tight">
                DTCP & RERA APPROVED
              </span>
            </div>

            {/* Right Section: Animated Approval Numbers */}
            <div className="flex items-center text-sm md:text-base bg-red-50 text-red-700 px-3 py-1.5 rounded-full font-medium sm:ml-4">
              <CheckCheck size={18} className="mr-2" />

              {/* 💡 ANIMATION CONTAINER: Fixed height and hidden overflow is critical */}
              <div className="h-5 overflow-hidden flex items-center">
                {/* 💡 ANIMATED SPAN: Key forces re-render and re-application of the animation */}
                <span
                  key={currentApprovalIndex}
                  // Use a custom animation class. You must define this in your global CSS (see note below)
                  className="whitespace-nowrap animate-slide-in"
                >
                  {currentApprovalText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
