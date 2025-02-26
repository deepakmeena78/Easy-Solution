import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../App.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Categories = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=5")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data.results);
            })
            .catch((error) => console.error("Error fetching users:", error));
    }, []);

    return (
        <div className="w-full mx-auto p-6 text-center overflow-hidden bg-white">
            <h2 className="text-2xl font-bold text-[var(--dark-blue)]">
                BROWSE CATEGORIES
            </h2>
            <div className="border-b-2 w-16 mx-auto mt-2 mb-6 border-[var(--dark-blue)]"></div>

            {/* ✅ Mobile View - Swiper */}
            <div className="block md:hidden">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={2}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {users.length > 0 ? (
                        users.map((user, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white shadow-lg rounded-lg p-4 text-center border border-gray-300 transition-all duration-300 hover:border-[var(--dark-blue)] hover:scale-105 hover:shadow-[0px_3px_8px_rgba(0,0,0,0.24)]">
                                    <img
                                        src={user.picture.large}
                                        alt={`${user.name.first} ${user.name.last}`}
                                        className="w-24 h-24 object-contain mx-auto rounded-md"
                                    />
                                    <h3 className="mt-2 text-lg font-semibold">
                                        {user.name.first} {user.name.last}
                                    </h3>
                                    <button className="mt-2 px-4 py-1 text-[var(--dark-blue)] border border-[var(--dark-blue)] rounded-full hover:bg-[var(--dark-blue)] hover:text-white">
                                        Search
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))
                    ) : (
                        <p className="text-gray-500">Loading users...</p>
                    )}
                </Swiper>
            </div>

            {/* ✅ Desktop View - Grid */}
            <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-12">
                {users.length > 0 ? (
                    users.map((user, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-4 text-center border border-gray-300 transition-all duration-300 hover:border-blue-500 hover:scale-105 hover:shadow-[0px_3px_8px_rgba(0,0,0,0.24)]"
                        >
                            <img
                                src={user.picture.large}
                                alt={`${user.name.first} ${user.name.last}`}
                                className="w-24 h-24 object-contain mx-auto rounded-md"
                            />
                            <h3 className="mt-2 text-lg font-semibold">
                                {user.name.first} {user.name.last}
                            </h3>
                            <button className="mt-2 px-4 py-1 text-[#2C585E] border border-[#2C585E] rounded-full hover:bg-[#2C585E] hover:text-white">
                                Search
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">Loading users...</p>
                )}
            </div>

            <button className="mt-6 px-6 py-2 bg-[var(--dark-blue)] text-white rounded-lg hover:bg-[#23474C] m-6">
                VIEW ALL CATEGORIES
            </button>
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
        </div>
    );
};

export default Categories;
