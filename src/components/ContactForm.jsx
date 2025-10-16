import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);

    // Reset form
    setTimeout(() => {
      setFormData({
        fullname: "",
        email: "",
        phone: "",
        message: "",
      });
      console.log("Form reset successfully.");
    }, 500);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 🎬 Background Video */}
      <video
        src="/istockphoto-1369679478-640_adpp_is.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* 🔲 Optional: subtle overlay to improve readability */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* 🧾 Transparent Contact Form */}
      <div className="relative z-10 w-full max-w-md p-6 sm:p-8 rounded-2xl border border-white/50 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Contact Us
        </h2>
        <p className="text-center text-gray-200 mb-6 text-sm sm:text-base">
          Have a question or want to work together? Drop us a message and we'll
          get back to you soon.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            value={formData.fullname}
            onChange={handleChange}
            className="bg-transparent border border-white/50 rounded-lg p-3 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-transparent border border-white/50 rounded-lg p-3 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="bg-transparent border border-white/50 rounded-lg p-3 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="bg-transparent border border-white/50 rounded-lg p-3 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-red-600/80 hover:bg-red-700/90 text-white py-3 rounded-lg font-semibold transition duration-200 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
