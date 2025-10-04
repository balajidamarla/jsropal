import { useState } from "react";
import { FaRoad, FaHome } from "react-icons/fa";
import { GiByzantinTemple } from "react-icons/gi";
import {
  FaCity,
  FaIndustry,
  FaGraduationCap,
  FaTrainTram,
  FaLocationDot,
  FaLandmarkDome,
} from "react-icons/fa6";
import { BiSolidPlaneTakeOff } from "react-icons/bi";
import { MdMuseum } from "react-icons/md";

const Location = () => {
  // NOTE: You must replace these placeholder URLs with actual, valid Google Maps embed URLs
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7602.038700779552!2d79.066661!3d17.696546!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb5f69e4485067%3A0xbf29d5b2c65acb!2sJSR%20Group%20Suncity%20Opal!5e0!3m2!1sen!2sin!4v1759428738132!5m2!1sen!2sin";

  const directGoogleMapLink =
    "https://www.google.com/maps/place/JSR+Group+Suncity+Opal/@17.696546,79.066661,16z/data=!4m6!3m5!1s0x3bcb5f69e4485067:0xbf29d5b2c65acb!8m2!3d17.6965462!4d79.0666614!16s%2Fg%2F11n0byn9r2!5m1!1e2?hl=en&entry=ttu&g_ep=EgoyMDI1MDkzMC4wIKXMDSoASAFQAw%3D%3D";

  const nearbyPlaces = [
    {
      icon: GiByzantinTemple,
      name: "Sri Laxmi Narasimhaswamy Temple",
      distance: "100m",
    },
    {
      icon: GiByzantinTemple,
      name: "Sri Swayambu Someshwara Temple",
      distance: "1.5km",
    },
    {
      icon: GiByzantinTemple,
      name: "World Famous Jain Temple",
      distance: "800m",
    },
    {
      icon: MdMuseum,
      name: "Mythological Museum, Surendrapuri",
      distance: "2km",
    },
    { icon: FaCity, name: "Proposed HMDA Township", distance: "5km" },
    { icon: FaIndustry, name: "Bhuvanagiri Industrial Area", distance: "2km" },
    {
      icon: FaGraduationCap,
      name: "AIIMS Medical University",
      distance: "2km",
    },
    { icon: FaHome, name: "Singapore Township & IT Parks", distance: "2km" },
    {
      icon: BiSolidPlaneTakeOff,
      name: "Rajiv Gandhi International Airport",
      distance: "90 mins",
    },
    { icon: FaRoad, name: "Uppal Ring Road (6 Track)", distance: "30 mins" },
    { icon: FaRoad, name: "Outer Ring Road", distance: "20 mins" },
    { icon: FaTrainTram, name: "Aler Railway Station", distance: "10 mins" },
  ];

  const handleMapClick = () => {
    window.open(directGoogleMapLink, "_blank");
  };

  const handleMapKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleMapClick();
    }
  };

  return (
    <div className="relative overflow-hidden min-h-screen bg-red-50">
      {" "}
      {/* Decorative SVG dot pattern */}
      <svg
        className="absolute top-8 left-8 w-32 h-32 opacity-70 z-0 hidden lg:block"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id="dotPattern"
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="2" fill="#d87777" />{" "}
          {/* Reddish dot color */}
        </pattern>
        <rect width="100%" height="100%" fill="url(#dotPattern)" />
      </svg>
      {/* Decorative Blobs */}
      <div className="absolute bottom-[-100px] right-[-100px] w-80 h-80 bg-red-200/50 rounded-full blur-3xl z-0 hidden lg:block"></div>
      <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-red-100/50 rounded-bl-none rounded-3xl transform rotate-45 blur-2xl z-0 hidden lg:block"></div>
      <div className="absolute top-[-50px] right-[-150px] w-[300px] h-24 bg-red-300/50 transform rotate-[-20deg] z-0 hidden lg:block"></div>
      <div className="max-w-7xl mx-auto py-5 px-6 font-sans relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-700 rounded-2xl shadow-lg shadow-red-500/40 mb-4">
            <FaLocationDot className="w-8 h-8 text-white" />
          </div>
          <p className="text-3xl font-bold mb-4 text-red-700 font-mono">
            Location Highlights
          </p>
          <p className="text-gray-800 max-w-3xl mx-auto">
            Strategically positioned for ultimate convenience with easy access
            to major landmarks, business hubs, and entertainment destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Landmarks Section */}
          <div className="lg:col-span-2 order-2 lg:order-1 relative z-10">
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-red-100 flex flex-col">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaLandmarkDome className="w-5 h-5 text-red-700" />
                Nearby Landmarks
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {nearbyPlaces.map((place, index) => {
                  const Icon = place.icon;
                  return (
                    <li
                      key={`${place.name}-${index}`}
                      className="flex items-center gap-2 p-3 bg-gradient-to-r from-red-50 to-white rounded-xl hover:shadow-md transition-all duration-300 group cursor-pointer"
                    >
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 text-red-700" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800 text-sm">
                          {place.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {place.distance}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-1 order-1 lg:order-2 relative z-10">
            <div
              className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white cursor-pointer group 
                 h-[300px] sm:h-[300px] md:h-[350px] lg:h-[560px]"
              onClick={handleMapClick}
              role="button"
              tabIndex={0}
              onKeyDown={handleMapKeyDown}
              aria-label="Explore interactive map by opening in a new tab"
            >
              <iframe
                title="Location Map"
                className="w-full h-full pointer-events-none"
                src={mapUrl}
                allowFullScreen
                loading="lazy"
                style={{ border: 0 }}
              ></iframe>

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center">
                <span className="bg-white/80 px-4 py-2 rounded-lg shadow text-red-600 font-medium opacity-0 group-hover:opacity-100 transition">
                  Explore Interactive Map
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
