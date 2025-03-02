import React from "react";
import { Link } from "react-router-dom";
import { FaThLarge, FaUserCircle, FaHandsHelping, FaCrown, FaHistory, FaBell, FaHeadset, FaUserTie } from "react-icons/fa";
import "../../App.css";

const SliderProfile = () => {
    return (
        <div className="w-64 h-screen bg-[var(--light-blue)] text-black p-5">
            <div className="flex flex-col items-center mb-5">
                <img
                    src="https://via.placeholder.com/80"
                    alt="Profile"
                    className="w-20 h-20 rounded-full border-2 border-white"
                />
                <h2 className="mt-2 text-lg font-semibold">Meena Ji</h2>
            </div>

            <nav className="space-y-3">
                <Link to="/acount/dashboard" className="flex items-center gap-2 p-2 border rounded transition-all duration-200 hover:bg-[var(--dark-blue)] hover:text-white">
                    <FaThLarge className="transition-all duration-200" /> Dashboard
                </Link>
                <Link to="/account/profile" className="flex items-center gap-2 p-2 border rounded transition-all duration-200 hover:bg-[var(--dark-blue)] hover:text-white">
                    <FaUserCircle className="transition-all duration-200" /> Profile
                </Link>
                <Link to="/your-help" className="flex items-center gap-2 p-2 border rounded transition-all duration-200 hover:bg-[var(--dark-blue)] hover:text-white">
                    <FaHandsHelping className="transition-all duration-200" /> Your Help
                </Link>
                <Link to="/prime" className="flex items-center gap-2 p-2 border rounded transition-all duration-200 hover:bg-[var(--dark-blue)] hover:text-white">
                    <FaCrown className="transition-all duration-200" /> Prime
                </Link>
                <Link to="/history" className="flex items-center gap-2 p-2 border rounded transition-all duration-200 hover:bg-[var(--dark-blue)] hover:text-white">
                    <FaHistory className="transition-all duration-200" /> Help History
                </Link>
                <Link to="/notifications" className="flex items-center gap-2 p-2 border rounded transition-all duration-200 hover:bg-[var(--dark-blue)] hover:text-white">
                    <FaBell className="transition-all duration-200" /> Notification
                </Link>
                <Link to="/support" className="flex items-center gap-2 p-2 border rounded transition-all duration-200 hover:bg-[var(--dark-blue)] hover:text-white">
                    <FaHeadset className="transition-all duration-200" /> Support
                </Link>
            </nav>
        </div>
    );
};

export default SliderProfile;
