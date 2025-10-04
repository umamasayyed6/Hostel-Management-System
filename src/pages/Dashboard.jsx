import React from "react";
import { FaBars, FaBell, FaSignOutAlt, FaHome, FaClipboardList, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ onLogout }) => (
  <aside className="w-60 bg-white shadow-lg h-screen sticky top-0 px-4 py-6">
    <div className="mb-8">
      <h1 className="text-2xl font-bold">Hostel Portal</h1>
    </div>
    <nav className="space-y-4">
      <a href="#" className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 transition">
        <FaHome /> My Room
      </a>
      <a href="#" className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 transition">
        <FaClipboardList /> Requests
      </a>
      <a href="#" className="flex items-center gap-3 p-2 rounded hover:bg-blue-50 transition">
        <FaUser /> Profile
      </a>
      <button
        onClick={onLogout}
        className="mt-8 w-full text-left p-2 rounded bg-red-100 text-red-600 hover:bg-red-200"
      >
        <FaSignOutAlt className="inline mr-2" /> Logout
      </button>
    </nav>
  </aside>
);

export default function Dashboard() {
  const navigate = useNavigate();
  const raw = localStorage.getItem("hst_user");
  const user = raw ? JSON.parse(raw) : { username: "Guest", role: "student" };

  const logout = () => {
    localStorage.removeItem("hst_user");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar onLogout={logout} />
      <div className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold">Welcome, {user.username}</h2>
          <div className="flex items-center gap-4">
            <FaBell className="text-gray-600 text-lg" />
            <span className="text-gray-500">ROLE: {user.role}</span>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-sm text-gray-500">Room Number</div>
            <div className="text-2xl font-bold">A-101</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-sm text-gray-500">Pending Requests</div>
            <div className="text-2xl font-bold">3</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-sm text-gray-500">Dues</div>
            <div className="text-2xl font-bold">₹ 1500</div>
          </div>
        </div>

        <section className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <FaClipboardList className="text-green-500 mt-1" />
              <div>
                <div className="font-medium">Complaint: Broken window</div>
                <div className="text-sm text-gray-500">1 day ago</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FaHome className="text-blue-500 mt-1" />
              <div>
                <div className="font-medium">Room cleaned</div>
                <div className="text-sm text-gray-500">3 days ago</div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
