import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Help = () => {
    const { id } = useParams();
    const [help, setHelp] = useState(null);
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        axios
            .get(`http://localhost:3200/help/get-help/${id}`)
            .then((response) => {
                setHelp(response.data.result);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
                setHelp(null);
            });
    }, [id]);

    const handlePrev = () => {
        setCurrentImage((prev) => (prev === 0 ? help.gallery.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentImage((prev) => (prev === help.gallery.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="container mx-auto p-6 flex justify-center">
            {help ? (
                <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-2xl border border-gray-300 flex items-center shadow-lg shadow-black/35">
                    {/* Image Section */}
                    <div className="relative w-1/2 h-64 overflow-hidden rounded-lg shadow-md shadow-black/30">
                        {help.gallery && help.gallery.length > 0 ? (
                            <>
                                <img
                                    src={`http://localhost:3200/${help.gallery[currentImage].replace("\\", "/")}`}
                                    alt={help.title}
                                    className="rounded-lg w-full h-64 object-contain"
                                />
                                <button onClick={handlePrev} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded-full">❮</button>
                                <button onClick={handleNext} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-2 py-1 rounded-full">❯</button>
                            </>
                        ) : (
                            <p className="text-center text-gray-500">No Image Available</p>
                        )}
                    </div>

                    {/* Help Details */}
                    <div className="p-4 w-1/2 text-left">
                        <h5 className="text-lg font-bold text-gray-800">{help.title}</h5>
                        <p className="text-gray-600 mt-2 text-sm">{help.description}</p>
                        <div className="mt-3">
                            <p className="text-gray-500 font-medium">📍 {help.location}</p>
                            <p className="text-gray-500 font-medium">📌 {help.pincode}</p>
                            <p className="text-gray-500 font-medium">🔖 {help.status}</p>
                            <p className="text-gray-500 font-medium">📅 {help.help_date}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <h2 className="text-center text-gray-600 w-full">Help Request Not Found</h2>
            )}
        </div>
    );
};

export default Help;