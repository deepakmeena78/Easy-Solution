import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaExclamationTriangle } from "react-icons/fa";
import SliderProfile from "./SliderProfile";

function HelpList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=5")
            .then((res) => res.json())
            .then((data) => {
                const scrapProducts = data.results.map((user, index) => ({
                    id: index,
                    name: "Car Issue",
                    location: `${user.location.city}, ${user.location.state}`,
                    date: "Jan 28, 2025",
                    status: "completed",
                    image: user.picture.thumbnail,
                }));
                setProducts(scrapProducts);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (

        <div className="flex">
            <SliderProfile />
            <div className="flex-1 p-5">
                <div className="p-6 border rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Your Helps</h2>

                    {/* Category Tabs */}
                    <div className="flex gap-3 mb-4">
                        <button className="bg-green-500 text-white px-4 py-2 rounded-md">Complete</button>
                        <button className="border border-gray-400 text-gray-600 px-4 py-2 rounded-md">Pending</button>
                    </div>

                    {/* Scrap Products Section */}

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-4">
                        {products.map((product) => (
                            <div key={product.id} className="flex items-center border rounded-lg p-4 shadow-md">
                                {/* Product Image */}
                                <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-400">
                                    <img src={product.image} alt="Product" className="w-full h-full object-cover" />
                                </div>

                                {/* Product Details */}
                                <div className="ml-4 flex-1">
                                    <h4 className="font-semibold text-lg">{product.name}</h4>
                                    <p className="flex items-center text-sm text-gray-500 mt-1">
                                        <FaMapMarkerAlt className="mr-1" />
                                        {product.location}
                                    </p>
                                    <p className="text-sm text-gray-400">{product.date}</p>
                                </div>

                                {/* Status */}
                                <span className="text-blue-600 text-xs border border-blue-400 px-2 py-1 rounded-md">
                                    {product.status}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Add Product Button */}
                    <div className="mt-6">
                        <button className="border border-green-500 text-green-600 px-4 py-2 rounded-lg hover:bg-green-100 flex items-center">
                            Add Help <FaExclamationTriangle className="ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default HelpList
