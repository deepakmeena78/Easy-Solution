import React from "react";
import ProfileSlider from "./SliderProfile";

const Profile = () => {
    return (
        <div className="flex">
            <ProfileSlider />
            <div className="flex-1 p-5">
                <div className="w-full mx-auto p-8 bg-white shadow-md rounded-lg">
                    <h2 className="text-3xl font-bold text-gray-700 mb-6">Profile Details</h2>

                    {/* Profile Image Upload Section */}
                    <div className="flex flex-col items-center mb-6">
                        <div className="w-40 h-40 rounded-full border border-gray-300 overflow-hidden">
                            <img src="https://via.placeholder.com/150" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <label className="mt-4 cursor-pointer bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition">
                            Upload New Image
                            <input type="file" accept="image/*" className="hidden" />
                        </label>
                    </div>

                    {/* Profile Form */}
                    <form>
                        {/* Name and Mobile */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div className="relative">
                                <input type="text" name="name" defaultValue="Ankit"
                                    className="peer w-full px-4 pt-6 pb-3 text-lg border-b border-gray-300 focus:outline-none focus:border-blue-500"
                                    placeholder=" " />
                                <label className="absolute left-4 top-0 text-gray-500 text-lg peer-placeholder-shown:top-5 peer-placeholder-shown:text-xl peer-focus:top-2 peer-focus:text-lg peer-focus:text-blue-500">
                                    Name
                                </label>
                            </div>

                            <div className="relative">
                                <input type="text" name="mobile" defaultValue="9111948802"
                                    className="peer w-full px-4 pt-6 pb-3 text-lg border-b border-gray-300 focus:outline-none focus:border-blue-500"
                                    placeholder=" " />
                                <label className="absolute left-4 top-0 text-gray-500 text-lg peer-placeholder-shown:top-5 peer-placeholder-shown:text-xl peer-focus:top-2 peer-focus:text-lg peer-focus:text-blue-500">
                                    Mobile
                                </label>
                            </div>
                        </div>

                        {/* Email and Gender */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div className="relative">
                                <input type="email" name="email" defaultValue="ankitmeena@gmail.com"
                                    className="peer w-full px-4 pt-6 pb-3 text-lg border-b border-gray-300 focus:outline-none focus:border-blue-500"
                                    placeholder=" " />
                                <label className="absolute left-4 top-0 text-gray-500 text-lg peer-placeholder-shown:top-5 peer-placeholder-shown:text-xl peer-focus:top-2 peer-focus:text-lg peer-focus:text-blue-500">
                                    Email
                                </label>
                            </div>

                            <div className="relative">
                                <select name="gender" defaultValue="Male"
                                    className="peer w-full px-4 pt-6 pb-3 text-lg border-b border-gray-300 focus:outline-none focus:border-blue-500">
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                                <label className="absolute left-4 top-0 text-gray-500 text-lg peer-placeholder-shown:top-5 peer-placeholder-shown:text-xl peer-focus:top-2 peer-focus:text-lg peer-focus:text-blue-500">
                                    Gender
                                </label>
                            </div>
                        </div>

                        {/* Location and Pincode */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div className="relative">
                                <input type="text" name="location" defaultValue="Indore"
                                    className="peer w-full px-4 pt-6 pb-3 text-lg border-b border-gray-300 focus:outline-none focus:border-blue-500"
                                    placeholder=" " />
                                <label className="absolute left-4 top-0 text-gray-500 text-lg peer-placeholder-shown:top-5 peer-placeholder-shown:text-xl peer-focus:top-2 peer-focus:text-lg peer-focus:text-blue-500">
                                    Location
                                </label>
                            </div>

                            <div className="relative">
                                <input type="text" name="pincode" defaultValue="455336"
                                    className="peer w-full px-4 pt-6 pb-3 text-lg border-b border-gray-300 focus:outline-none focus:border-blue-500"
                                    placeholder=" " />
                                <label className="absolute left-4 top-0 text-gray-500 text-lg peer-placeholder-shown:top-5 peer-placeholder-shown:text-xl peer-focus:top-2 peer-focus:text-lg peer-focus:text-blue-500">
                                    Pincode
                                </label>
                            </div>
                        </div>

                        {/* Update Button */}
                        <div className="text-center mt-8">
                            <button type="submit"
                                className="px-8 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition duration-200">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;
