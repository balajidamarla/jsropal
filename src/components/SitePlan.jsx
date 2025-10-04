import {
  FaHome, // Residential Blocks
  FaTree, // Green Spaces, Avenue Plantation
  FaCar, // Parking Slots
  FaMapMarkedAlt, // DTCP Approved layouts
  FaLightbulb, // Power/Street Lights
  FaTools, // State of the art facilities
  FaWater, // Water/Drainage
  FaShieldAlt, // Security, Legally Verified
  FaRoad, // Black top wide Roads
  FaGripLines, // Used for Fence/Gate
  FaClock,
  FaMap,
  FaPaperPlane,
} from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { GiFootprint, GiCompass, GiGrassMushroom } from "react-icons/gi";
import { LuTrees } from "react-icons/lu";
import { MdOutlineWorkspacePremium } from "react-icons/md";

// Note: ZoomIn, ZoomOut, Maximize2, useState, and related functions/state have been removed.

const SitePlan = () => {
  // Removed state for isZoomed and isFullscreen

  const features = [
    { icon: FaHome, label: "Residential Blocks", count: "12 Towers" },
    { icon: LuTrees, label: "Green Spaces", count: "60% Area" },
    { icon: FaCar, label: "Parking Slots", count: "500+ Spaces" },
    { icon: FaMap, label: "Total Area", count: "15 Acres" },
  ];

  // Restructured amenities array to include an icon and a more descriptive label if needed
  const amenities = [
    {
      icon: FaMapMarkedAlt,
      label: "DTCP Approved layouts with Clear Title",
    },
    { icon: FaCircleCheck, label: "Spot Registration" },
    { icon: FaShieldAlt, label: "Legally Verified" },
    { icon: FaTools, label: "State of the art facilities" },
    { icon: GiCompass, label: "The Layout Designed as per 100% Vaasthu" },
    {
      icon: FaClock,
      label: "Over head water tank & 24x7 Water Supply",
    },
    { icon: FaLightbulb, label: "Power Suply with Street Lights" },
    { icon: FaWater, label: "Well planned Underground Drainage" },
    { icon: FaWater, label: "Water Sewerage System" },
    { icon: FaTree, label: "Avenue Plantation" },
    {
      icon: FaRoad,
      label: "Formation of 40' & 33' feet Black top wide Roads",
    },
    { icon: GiGrassMushroom, label: "Fully Landscaped Parks" },
    { icon: GiFootprint, label: "Childrens Play Area" },
    {
      icon: FaGripLines, // Using a simple linear icon for the boundary/gate
      label: "Compound Wall with Entrance Arch & Gates",
    },
    { icon: FaShieldAlt, label: "24x7 Security" },
  ];

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      {/* Header Section */}

      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-600 to-red-600 rounded-2xl shadow-lg shadow-red-500/30 mb-4">
          <FaPaperPlane className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold mb-4 text-red-700">
          Master Plan & Amenities
        </h2>
        <p className="text-gray-600 text-base max-w-3xl mx-auto">
          Explore our thoughtfully designed layout featuring modern
          architecture, abundant green spaces, and world-class amenities.
        </p>
      </div>

      {/* Key Features Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="bg-red-50 rounded-2xl p-2 text-center hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-red-100 transform shadow-md"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-xl shadow-lg mb-3">
                <Icon className="w-5 h-5 text-red-600" />
              </div>
              <p className="text-xl font-bold text-gray-800">{feature.count}</p>
              <p className="text-sm text-gray-600 mt-1">{feature.label}</p>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid: Image (1 column) | Amenities (2 columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Site Plan Image Section - Takes up 1 column */}
        <div className="lg:col-span-1">
          {/* Image Container (Static) */}
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-200 h-full">
            {/* Title Badge (Top Left) */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-xl z-20 border border-gray-100">
              <p className="text-sm font-bold text-red-500">
                Comprehensive Master Plan
              </p>
            </div>

            {/* Static Image Display */}
            <div className="relative group h-full flex items-center justify-center">
              <img
                src="/opal Layout.jpg"
                alt="Site Plan"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/opal Layout.jpg"; // Fallback image
                }}
                // Simplified class structure, no click handler
                className="w-full object-contain p-4 h-full"
              />
            </div>
          </div>
        </div>

        {/* Amenities Sidebar - Takes up 2 columns */}
        <div className="lg:col-span-2 space-y-6">
          {/* Amenities List */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 h-full">
            <h3 className="text-2xl font-bold text-red-700 mb-6 flex items-center gap-3 border-b pb-3">
              <MdOutlineWorkspacePremium className="w-6 h-6 text-red-700" />{" "}
              Premium Amenities
            </h3>

            {/* Content flows naturally, no fixed height or scroll */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {amenities.map((amenity, index) => {
                const AmenityIcon = amenity.icon; // Get the icon component
                return (
                  <div
                    key={index}
                    className="flex items-start gap-2 p-3 bg-gradient-to-r from-red-100 to-white rounded-xl hover:shadow-md transition-all duration-300 group cursor-pointer"
                  >
                    <AmenityIcon className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />{" "}
                    {/* Display the icon */}
                    <p className="text-gray-700 font-medium text-sm leading-snug">
                      {amenity.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitePlan;
