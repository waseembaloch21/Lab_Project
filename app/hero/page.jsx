"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 pt-20">

      {/* HERO SECTION */}
      <section className="text-center px-4 py-20 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Manage Your Workforce Smarter
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
        >
          A modern HR system to manage employees, regions, and data with clarity and efficiency.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/employees"
            className="px-8 py-3 rounded-full text-white font-medium bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg hover:scale-105 transition"
          >
            View Employees
          </Link>

          <Link
            href="/region"
            className="px-8 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            Explore Regions
          </Link>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Employee Management",
            desc: "Easily track, manage, and update employee records.",
          },
          {
            title: "Region Insights",
            desc: "Organize and monitor regions with clarity.",
          },
          {
            title: "ERD Visualization",
            desc: "Understand database relationships visually.",
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600 mt-3">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* ERD PREVIEW */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-gray-800"
        >
          Visualize Your Data
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-10 bg-white/70 backdrop-blur-xl rounded-3xl p-4 shadow-2xl border border-gray-200"
        >
          <img
            src="/erd.png"
            alt="ERD Preview"
            className="rounded-xl shadow-md"
          />
        </motion.div>

        <Link
          href="/erd"
          className="inline-block mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:scale-105 transition"
        >
          View Full ERD
        </Link>
      </section>

      {/* FINAL CTA */}
      <section className="text-center py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Ready to Get Started?
          </h2>

          <p className="text-gray-600 mt-4">
            Explore your HR system with powerful tools and clean design.
          </p>

          <Link
            href="/employees"
            className="inline-block mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:scale-105 transition"
          >
            Start Now
          </Link>
        </motion.div>
      </section>

    </div>
  );
}