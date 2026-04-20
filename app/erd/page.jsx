"use client";

import { motion } from "framer-motion";

export default function Erd() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 pt-20 px-4">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text pb-3 text-transparent">
          ERD Diagram
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Explore your database structure in a clean, visual format
        </p>
      </motion.div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.4 }}
        className="max-w-6xl mx-auto bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl p-6 md:p-10 border border-gray-200"
      >

        {/* PDF Preview Area */}
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-inner bg-gray-50">

          {/* Embedded PDF (responsive) */}
          <div className="w-full h-[400px] md:h-[600px]">
            <iframe
              src="/Project_ERD.pdf"
              title="ERD PDF"
              className="w-full h-full"
            />
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">

          {/* View Button */}
          <motion.a
            href="/Project_ERD.pdf"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg hover:shadow-purple-400/40 text-center"
          >
            Open Full Screen
          </motion.a>

          {/* Download Button */}
          <motion.a
            href="/Project_ERD.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full font-medium border border-gray-300 text-gray-700 hover:bg-gray-100 text-center"
          >
            Download PDF
          </motion.a>

        </div>

      </motion.div>

      {/* Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-4xl mx-auto mt-12 text-center"
      >
        <p className="text-gray-600 leading-relaxed">
          This ERD provides a structured overview of your system, showing how
          entities like employees, departments, and regions are connected.
          Understanding these relationships helps in designing efficient and
          scalable databases.
        </p>
      </motion.div>

    </div>
  );
};