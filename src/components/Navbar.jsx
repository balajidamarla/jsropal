import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = ["home", "about", "location", "siteplan", "gallery", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full backdrop-blur-md shadow-sm z-50 transition-colors duration-500 ${
        scrolled ? "bg-white" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo with gradient */}
        <div className="flex items-center gap-2">
          <span className="inline-block">
            <img src="/opal.jpg" alt="Opal" className="h-15 w-auto" />
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          {links.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              offset={-70}
              duration={500}
              className={`relative px-4 py-2 font-medium cursor-pointer transition-all duration-300 group ${
                scrolled ? "text-red-700" : "text-red-700"
              } hover:text-red-800-600`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-300 to-red-700 transition-all duration-400 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-red-50 transition-colors duration-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="w-6 h-6 text-red-700" />
          ) : (
            <Menu className="w-6 h-6 text-red-700" />
          )}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
              opacity: { duration: 0.4, ease: "easeInOut" },
            }}
            className="md:hidden overflow-hidden"
          >
            <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 px-6 py-4 space-y-1 shadow-lg">
              {links.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    key={item}
                    to={item}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 hover:text-red-900 transition-all duration-200 cursor-pointer"
                    onClick={() => setOpen(false)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
