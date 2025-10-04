import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaBook, FaHome, FaLock } from "react-icons/fa";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
    hostel: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // mock register
    localStorage.setItem("hst_user", JSON.stringify({ username: form.name, role: "student" }));
    navigate("/dashboard");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1576675784479-28a69c047f1a?auto=format&fit=crop&w=1350&q=80')`,
      }}
    >
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>
      <div className="relative z-10 w-full max-w-md p-8 bg-white bg-opacity-90 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
          Create Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-green-300 bg-white hover:shadow-md transition">
            <FaUser className="text-gray-400 mr-3" />
            <input
              name="name"
              placeholder="Full Name"
              className="w-full outline-none bg-transparent"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-green-300 bg-white hover:shadow-md transition">
            <FaEnvelope className="text-gray-400 mr-3" />
            <input
              name="email"
              placeholder="Email"
              className="w-full outline-none bg-transparent"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-green-300 bg-white hover:shadow-md transition">
            <FaBook className="text-gray-400 mr-3" />
            <input
              name="course"
              placeholder="Course"
              className="w-full outline-none bg-transparent"
              value={form.course}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-green-300 bg-white hover:shadow-md transition">
            <FaHome className="text-gray-400 mr-3" />
            <input
              name="hostel"
              placeholder="Hostel Preference"
              className="w-full outline-none bg-transparent"
              value={form.hostel}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-green-300 bg-white hover:shadow-md transition">
            <FaLock className="text-gray-400 mr-3" />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full outline-none bg-transparent"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-semibold hover:scale-[1.02] transition"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-700 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
