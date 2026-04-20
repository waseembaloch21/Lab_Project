"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/employees")
      .then(res => setEmployees(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 pt-20 px-4">


      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl pb-5 font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Employees
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Manage and explore your workforce data
        </p>
      </motion.div>

     
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-7xl mx-auto bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl p-4 md:p-6 border border-gray-200"
      >

       
        {loading ? (
          <div className="text-center py-10 text-gray-600">
            Loading employees...
          </div>
        ) : employees.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            No employees found
          </div>
        ) : (

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">

             
              <thead>
                <tr className="bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700">
                  {[
                    "ID","First Name","Last Name","Email","Phone",
                    "Hire Date","Job","Salary","Manager","Department"
                  ].map((head) => (
                    <th key={head} className="px-4 py-3 font-semibold">
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>

             
              <tbody className="text-black">
                {employees.map((emp, index) => (
                  <motion.tr
                    key={emp.employee_id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.03 }}
                    whileHover={{ scale: 1.01 }}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-3 font-medium">{emp.employee_id}</td>
                    <td className="px-4 py-3">{emp.first_name}</td>
                    <td className="px-4 py-3">{emp.last_name}</td>
                    <td className="px-4 py-3 text-blue-600">{emp.email}</td>
                    <td className="px-4 py-3">{emp.phone_number}</td>
                    <td className="px-4 py-3">
                      {new Date(emp.hire_date).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3">{emp.job_id}</td>
                    <td className="px-4 py-3 font-semibold text-green-600">
                      ${emp.salary}
                    </td>
                    <td className="px-4 py-3">
                      {emp.manager_id || "—"}
                    </td>
                    <td className="px-4 py-3">{emp.department_id}</td>
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