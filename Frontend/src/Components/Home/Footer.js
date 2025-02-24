import React from "react";
import "../../App.css"
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: "var(--dark-blue)" }} className="relative bg-blueGray-200 pt-8 pb-6 text-white">
            <div className="w-full mx-auto px-4 p-12 overflow-hidden">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <img className="h-20 w-auto" src="/Images/LOGO_1.png" />
                        <h4 className="text-3xl font-semibold text-blueGray-700">
                            Easy Solution
                        </h4>
                        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                            Whenever someone needs help,
                            Our platform is always with you, my friends!
                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6 flex space-x-2">
                            <button
                                className="group hover:bg-[var(--light-blue)] hover:text-white transition duration-300 bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full"
                                type="button"
                            >
                                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter text-blue-500 text-2xl group-hover:text-[#1B3539]"></i>
                                </a>
                            </button>

                            <button
                                className="group hover:bg-[var(--light-blue)] hover:text-white transition duration-300 bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full"
                                type="button"
                            >
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-square text-blue-600 text-2xl group-hover:text-[#1B3539]"></i>
                                </a>
                            </button>

                            <button
                                className="group hover:bg-[var(--light-blue)] hover:text-white transition duration-300 bg-white text-pink-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full"
                                type="button"
                            >
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram text-pink-600 text-2xl group-hover:text-[#1B3539]"></i>
                                </a>
                            </button>

                            <button
                                className="group hover:bg-[var(--light-blue)] hover:text-white transition duration-300 bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full"
                                type="button"
                            >
                                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github text-gray-800 text-2xl group-hover:text-[#1B3539]"></i>
                                </a>
                            </button>

                        </div>
                    </div>

                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                                    Quick Links
                                </span>
                                <ul className="list-none">
                                    <li>
                                        <a
                                            className=" hover:text-[var(--mid-blue)] text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="/"
                                        >
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="hover:text-[var(--mid-blue)] text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#"
                                        >
                                            Cantact
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="hover:text-[var(--mid-blue)] text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="/help"
                                        >
                                            Category
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-blueGray-600 hover:text-[var(--mid-blue)] hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="/"
                                        >
                                            Home
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                                    Contact Us
                                </span>
                                <ul className="list-none">
                                    <li>

                                    </li>
                                    <li>
                                        <a
                                            className="hover:text-[var(--mid-blue)] text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#"
                                        >
                                            Terms & Conditions
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="hover:text-[var(--mid-blue)] text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#"
                                        >
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li className="flex items-center justify-center">
                                        <p className="p-1">Contact : </p>
                                        <p className="text-black">6260576040</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-blueGray-300" />

                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                            Copyright © {new Date().getFullYear()}{" "}
                            <a
                                href="https://www.creative-tim.com/product/notus-js"
                                className="text-blueGray-500 hover:text-gray-800"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Notus JS
                            </a>{" "}
                            by{" "}
                            <a
                                href="https://www.creative-tim.com"
                                className="text-blueGray-500 hover:text-blueGray-800"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Creative Tim
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
