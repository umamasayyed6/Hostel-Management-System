import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaLock, FaUserGraduate } from "react-icons/fa";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock login success
    localStorage.setItem("hst_user", JSON.stringify({ username, role }));
    navigate("/dashboard");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1350&q=80')`,
      }}
    >
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>
      <div className="relative z-10 w-full max-w-md p-8 bg-white bg-opacity-90 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-300 bg-white transition-shadow hover:shadow-md">
            <FaUser className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Username"
              className="w-full outline-none bg-transparent"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-300 bg-white transition-shadow hover:shadow-md">
            <FaLock className="text-gray-400 mr-3" />
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none bg-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white transition-shadow hover:shadow-md">
            <FaUserGraduate className="text-gray-400 mr-3" />
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full outline-none bg-transparent"
            >
              <option value="student">Student</option>
              <option value="warden">Warden</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:scale-[1.02] transition"
          >
            Login
          </button>
        </form>

        <div className="mt-4 flex justify-between text-sm text-gray-700">
          <Link to="/forgot" className="hover:text-blue-600">Forgot Password?</Link>
          <Link to="/register" className="hover:text-blue-600">Register</Link>
        </div>
      </div>
    </div>
  );
}
