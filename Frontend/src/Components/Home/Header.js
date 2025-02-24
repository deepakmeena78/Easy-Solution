import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    return (
        <>
            <div className="bg-green-100 flex justify-between items-center px-6 py-2">
                <div className="flex items-center">
                    <img
                        src="/Images/LOGO_1.png"
                        alt="Project Logo"
                        className="h-10 ml-3"
                    />
                </div>

                <div className="flex items-center">
                    <input
                        className="w-72 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                        type="text"
                        placeholder="Search..."
                    />
                    <i className="bi bi-search ml-2"></i>
                </div>

                <button
                    className="px-6 py-2 border border-green-500 text-green-500 rounded-full hover:bg-green-500 hover:text-white transition"
                    onClick={() => navigate("/sign-up")}
                >
                    Login
                </button>
            </div>

            <nav className="bg-gray-900">
                <div className="container mx-auto">
                    <button
                        className="text-white focus:outline-none block lg:hidden p-2"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="hidden lg:flex">
                        <ul className="flex space-x-6 text-white font-bold py-4">
                            <li><Link className="hover:text-green-400 transition" to="/">Home</Link></li>
                            <li><Link className="hover:text-green-400 transition" to="/category">Category</Link></li>
                            <li><Link className="hover:text-green-400 transition" to="/help">Helps</Link></li>
                            <li><Link className="hover:text-green-400 transition" to="/about">About us</Link></li>
                            <li><Link className="hover:text-green-400 transition" to="/contact">Contact us</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
