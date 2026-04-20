"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home Page", path: "/hero" },
    { name: "Region List", path: "/region" },
    { name: "Employees", path: "/employees" },
    { name: "ERD Diagram", path: "/erd" },
  ];

  return (
    <nav className="fixed w-full z-50 backdrop-blur-lg bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            H_R
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.1 }}>
                <Link
                  href={item.path}
                  className="relative text-gray-700 font-medium group"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-purple-400/40 transition"
            >
              Dashboard
            </motion.button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <div className="space-y-1">
                <span className={`block h-0.5 w-6 bg-gray-800 transition ${isOpen && "rotate-45 translate-y-1.5"}`}></span>
                <span className={`block h-0.5 w-6 bg-gray-800 transition ${isOpen && "opacity-0"}`}></span>
                <span className={`block h-0.5 w-6 bg-gray-800 transition ${isOpen && "-rotate-45 -translate-y-1.5"}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/90 backdrop-blur-lg px-6 pb-6"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-gray-700 text-lg border-b border-gray-200"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="mt-4 w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white"
            >
              Dashboard
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};