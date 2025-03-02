import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./../App.css";

const CategoryPage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=10")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data.results);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="w-full mx-auto p-6 text-center overflow-hidden bg-white">
            <h2 className="text-2xl font-bold text-[var(--dark-blue)]">
                 CATEGORIES
            </h2>
            <div className="border-b-2 w-16 mx-auto mt-2 mb-6 border-[var(--dark-blue)]"></div>

            <div className="block md:hidden">
                {loading ? (
                    <p className="text-gray-500">Loading users...</p>
                ) : (
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={10}
                        slidesPerView={2}
                        navigation
                        pagination={{ clickable: true }}
                    >
                        {users.map((user, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white shadow-lg rounded-lg p-4 text-center border border-gray-300 transition-all duration-300 hover:border-[var(--dark-blue)] hover:scale-105 hover:shadow-lg">
                                    <img
                                        src={user.picture.large}
                                        alt={`${user.name.first} ${user.name.last}`}
                                        className="w-24 h-24 object-contain mx-auto rounded-md"
                                    />
                                    <h3 className="mt-2 text-lg font-semibold">
                                        {user.name.first} {user.name.last}
                                    </h3>
                                    <button className="mt-2 px-4 py-1 text-[var(--dark-blue)] border border-[var(--dark-blue)] rounded-full transition-all duration-200 hover:bg-[var(--dark-blue)] hover:text-white">
                                        Search
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>

            {/* ✅ Desktop View - Grid */}
            <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-12">
                {loading ? (
                    <p className="text-gray-500">Loading users...</p>
                ) : (
                    users.map((user, index) => (
                        <div key={index}
                            className="bg-white shadow-lg rounded-lg p-4 text-center border border-gray-300 transition-all duration-300 hover:border-[var(--dark-blue)] hover:scale-105 hover:shadow-lg"
                        >
                            <img
                                src={user.picture.large}
                                alt={`${user.name.first} ${user.name.last}`}
                                className="w-24 h-24 object-contain mx-auto rounded-md"
                            />
                            <h3 className="mt-2 text-lg font-semibold">
                                {user.name.first} {user.name.last}
                            </h3>
                            <button className="mt-2 px-4 py-1 text-[var(--dark-blue)] border border-[var(--dark-blue)] rounded-full transition-all duration-200 hover:bg-[var(--dark-blue)] hover:text-white">
                                Search
                            </button>
                        </div>
                    ))
                )}
            </div>

        </div>
    );
};

export default CategoryPage;
