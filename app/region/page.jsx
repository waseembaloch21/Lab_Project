"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function Region() {
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/regions") // ✅ FIXED
      .then(res => setRegions(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 pt-20 px-4">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl pb-5 font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Regions
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Overview of all available regions
        </p>
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl mx-auto bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl p-4 md:p-6 border border-gray-200"
      >

        {loading ? (
          <div className="text-center py-10 text-gray-600">
            Loading regions...
          </div>
        ) : regions.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            No regions found
          </div>
        ) : (

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">

              <thead>
                <tr className="bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700">
                  <th className="px-4 py-3 font-semibold">ID</th>
                  <th className="px-4 py-3 font-semibold">Region Name</th>
                </tr>
              </thead>

              <tbody>
                {regions.map((region, index) => (
                  <motion.tr
                    key={region.region_id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-3 font-medium">
                      {region.region_id}
                    </td>

                    <td className="px-4 py-3">
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold shadow">
                        {region.region_name}
                      </span>
                    </td>

                  </motion.tr>
                ))}
              </tbody>

            </table>
          </div>
        )}
      </motion.div>
    </div>
  );
}