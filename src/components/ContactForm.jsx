import React, { useState } from "react";
import { MessageSquare } from "lucide-react";

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

    // For demonstration, we reset the form after a slight delay.
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
    <div className="relative min-h-screen bg-white flex items-center justify-center p-5 sm:p-5 overflow-hidden">
      <img
        src="/img.png"
        alt="Architectural sketch of a modern house"
        className="absolute bottom-0 right-[-100px] w-[350px] h-auto opacity-30 
                   md:right-0 md:w-full md:max-w-[900px] md:opacity-70 
                   transition-all duration-300 pointer-events-none z-0"
      />

      {/* Main Content Wrapper - ensures the form is always on top (z-10) */}
      <div className="relative z-10 w-full max-w-6xl flex justify-start">
        {/* <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-700 to-red-700 rounded-2xl shadow-lg shadow-emerald-500/30 mb-4">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-red-700">
            Let's Connect
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? Drop us a message and
            we'll get back to you soon.
          </p>
        </div> */}
        {/* Left Side - Form and Text. Added shadow to make it pop over the subtle image. */}
        <div className="w-full md:w-1/2 max-w-md bg-white p-6 sm:p-10 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-bold font-mono mb-4 text-red-700">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Have a question or want to work together? Drop us a message and
            we'll get back to you soon.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-150"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-150"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-150"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none transition duration-150"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
