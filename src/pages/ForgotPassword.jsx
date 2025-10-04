import React, { useState } from "react";
import { FaEnvelope, FaUnlock } from "react-icons/fa";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nOTP: ${otp}`);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1599058917211-19dbf62c6d0f?auto=format&fit=crop&w=1350&q=80')",
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">
          🔑 Reset Password
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div className="flex items-center border border-gray-300 rounded-md p-2 focus-within:border-purple-500 hover:shadow-md transition duration-300">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none p-2 bg-transparent"
              required
            />
          </div>

          {/* OTP */}
          <div className="flex items-center border border-gray-300 rounded-md p-2 focus-within:border-purple-500 hover:shadow-md transition duration-300">
            <FaUnlock className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full outline-none p-2 bg-transparent"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold rounded-md hover:from-purple-600 hover:to-purple-800 shadow-md transition duration-300"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
