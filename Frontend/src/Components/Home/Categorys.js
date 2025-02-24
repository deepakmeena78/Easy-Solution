import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import '../../App.css';  // Try this in Footer.js
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3200/category/category-get")
            .then((response) => {
                setCategories(response.data.result);
            })
            .catch((err) => {
                console.error("Error fetching categories:", err);
            });
    }, []);

    return (
        <div className="w-full mx-auto w-full p-6 text-center overflow-hidden bg-white">
            <h2 className="text-2xl font-bold text-[var(--dark-blue)]">BROWSE CATEGORIES</h2>
            <div className="border-b-2 w-16 mx-auto mt-2 mb-6 border-[var(--dark-blue)]"></div>

            {/* ✅ Mobile ke liye Swiper */}
            <div className="block md:hidden">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={2}  // ✅ Ek time pe 2 items dikhaye mobile me
                    navigation
                    pagination={{ clickable: true }}
                >
                    {categories.length > 0 ? (
                        categories.map((category) => (
                            <SwiperSlide key={category._id}>
                                <div className="bg-white shadow-lg rounded-lg p-4 text-center border border-gray-300 transition-all duration-300 hover:border-[var(--dark-blue)] hover:scale-105 shadow-lg hover:shadow-[0px_3px_8px_rgba(0,0,0,0.24)]">
                                    <img
                                        src={`http://localhost:3200/${category.gallery.replace("\\", "/")}`}
                                        alt={category.category}
                                        className="w-24 h-24 object-contain mx-auto rounded-md"
                                    />
                                    <h3 className="mt-2 text-lg font-semibold">{category.category}</h3>
                                    <button className="mt-2 px-4 py-1 text-[var(--dark-blue)] border border-[var(--dark-blue)] rounded-full hover:bg-[var(--dark-blue)] hover:text-white">
                                        Search
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))
                    ) : (
                        <p className="text-gray-500">No Categories Available</p>
                    )}
                </Swiper>
            </div>

            {/* ✅ Desktop ke liye Normal Grid */}
            <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {categories.length > 0 ? (
                    categories.map((category) => (
                        <div key={category._id} className="bg-white shadow-lg rounded-lg p-4 text-center border border-gray-300 transition-all duration-300 hover:border-blue-500 hover:scale-105 shadow-lg hover:shadow-[0px_3px_8px_rgba(0,0,0,0.24)]">
                            <img
                                src={`http://localhost:3200/${category.gallery.replace("\\", "/")}`}
                                alt={category.category}
                                className="w-24 h-24 object-contain mx-auto rounded-md"
                            />
                            <h3 className="mt-2 text-lg font-semibold">{category.category}</h3>
                            <button className="mt-2 px-4 py-1 text-[#2C585E] border border-[#2C585E] rounded-full hover:bg-[#2C585E] hover:text-white">
                                Search
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No Categories Available</p>
                )}
            </div>

            <button className="mt-6 px-6 py-2 bg-[var(--dark-blue)] text-white rounded-lg hover:bg-[#23474C]">
                VIEW ALL CATEGORIES
            </button>
        </div>
    );
};

export default Categories;
