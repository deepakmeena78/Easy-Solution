import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

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
        <div className="container mx-auto p-6 text-center">
            <h2 className="text-2xl font-bold text-[#2C585E]">BROWSE CATEGORIES</h2>
            <div className="border-b-2 w-16 mx-auto mt-2 mb-6 border-[#2C585E]"></div>

            {/* Swiper Slider */}
            <Swiper
                spaceBetween={20}
                slidesPerView={2} // Show 2 categories per slide
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {categories.length > 0 ? (
                    categories.map((category) => (
                        <SwiperSlide key={category._id}>
                            <div className="bg-white shadow-lg rounded-lg p-4 text-center border border-gray-300">
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
                        </SwiperSlide>
                    ))
                ) : (
                    <p className="text-gray-500">No Categories Available</p>
                )}
            </Swiper>

            <button className="mt-6 px-6 py-2 bg-[#2C585E] text-white rounded-lg hover:bg-[#23474C]">
                VIEW ALL CATEGORIES
            </button>
        </div>
    );
};

export default Categories;
