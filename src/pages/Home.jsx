import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUserGraduate,
  FaClipboardList,
  FaUtensils,
  FaTools,
  FaUsers,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#e6f9ff" }}>
      {/* ✅ Navbar */}
      <nav className="bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 shadow-md py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">🏠 Hostel Management</h1>
        <div className="space-x-6">
          <Link to="/" className="text-gray-800 hover:text-indigo-700 font-semibold">Home</Link>
          <Link to="/about" className="text-gray-800 hover:text-indigo-700 font-semibold">About</Link>
          <Link to="/login" className="text-gray-800 hover:text-indigo-700 font-semibold">Login</Link>
        </div>
      </nav>

      {/* ✅ Combined Top Section */}
      <section className="flex flex-col md:flex-row items-center justify-center px-8 py-16 md:space-x-12 text-center md:text-left">
        {/* Content + Image together */}
       <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full bg-white bg-opacity-70 rounded-3xl shadow-lg p-10 hover:shadow-2xl transition duration-300 h-[75vh]"  style={{ backgroundColor: "#e6f9ff" }}>
    
    {/* Text Section */}
    <div className="md:w-1/2" >
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-6">
        Welcome to Our Hostel Management System
      </h1>
      <p className="text-xl text-gray-700 mb-8">
        Simplify campus living with our smart Hostel Management System. Effortlessly manage room allocations, track student data, and monitor mess attendance in real-time — all from a single platform. Keep student records secure, optimize resources, and stay updated with instant notifications. Designed for efficiency, our system ensures a smooth and organized hostel experience for both students and administrators.
      </p>
      <Link
        to="/login"
        className="bg-blue-500 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-600 hover:scale-105 transition-transform duration-300"
      >
        Get Started
      </Link>
    </div>

    {/* Image Section */}
    <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center" style={{padding : 2,  height:500,} }> 
      <img
        src="Student.jpg"
        alt="Hostel Building"
        className="w-[480px] h-[320px] object-cover rounded-3xl border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300 padding :2px"
      />
    </div>
  </div>
      </section>

      {/* ✅ Features Section */}
      <section className="py-16 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Explore Hostel Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition">
            <FaHome className="text-blue-600 text-3xl mb-4" />
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Room Allocation</h3>
            <p>Assign rooms, set capacities, and check availability in real-time.</p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition">
            <FaUserGraduate className="text-purple-600 text-3xl mb-4" />
            <h3 className="text-lg font-semibold text-purple-600 mb-2">Student Records</h3>
            <p>Maintain student data, course details, and hostel stay history.</p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition">
            <FaClipboardList className="text-pink-600 text-3xl mb-4" />
            <h3 className="text-lg font-semibold text-pink-600 mb-2">Requests & Issues</h3>
            <p>Track repair requests, leave applications, and notices efficiently.</p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition">
            <FaUtensils className="text-green-600 text-3xl mb-4" />
            <h3 className="text-lg font-semibold text-green-600 mb-2">Mess Management</h3>
            <p>Manage daily meals, attendance, and billing with transparency.</p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition">
            <FaTools className="text-orange-500 text-3xl mb-4" />
            <h3 className="text-lg font-semibold text-orange-500 mb-2">Maintenance Tracker</h3>
            <p>Submit and monitor maintenance requests to ensure safety and comfort.</p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition">
            <FaUsers className="text-indigo-600 text-3xl mb-4" />
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">Visitor Management</h3>
            <p>Record visitor entries, maintain logs, and monitor access securely.</p>
          </div>
        </div>
      </section>

      {/* ✅ Footer */}
      <footer className="bg-gradient-to-r from-indigo-400 via-blue-400 to-blue-300 text-white text-center py-6 mt-auto">
        <p>© {new Date().getFullYear()} Hostel Management System</p>
      </footer>
    </div>
  );
}
