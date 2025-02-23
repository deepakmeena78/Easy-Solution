import React, { useEffect, useState } from "react";
import axios from "axios";

const Test = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3200/help/get-help")
            .then((response) => {
                console.log("API Response:", response.data); // Debugging ke liye
                setData(response.data.result || []); // Sirf result array store karna
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
                setData([]); // Error case me empty array
            });
    }, []);

    return (
        <div className="container mx-auto p-6">
            {data.length > 0 ? (
                data.map((help, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-5 mb-6 flex flex-col md:flex-row">
                        {/* Image Gallery */}
                        <div className="md:w-1/4 flex justify-center">
                            {help.gallery && help.gallery.length > 0 ? (
                                <img
                                    src={`http://localhost:3200/${help.gallery[0].replace("\\", "/")}`} // First image show karna
                                    alt={help.title}
                                    className="rounded-lg object-cover w-full"
                                />
                            ) : (
                                <p>No Image Available</p>
                            )}
                        </div>

                        {/* Help Details */}
                        <div className="md:w-1/2 p-4">
                            <h5 className="text-lg font-semibold">{help.title}</h5>
                            <p className="text-gray-600 mt-2">{help.description}</p>
                            <p className="text-gray-500 mt-2">Location: {help.location}</p>
                            <p className="text-gray-500">Pincode: {help.pincode}</p>
                            <p className="text-gray-500">Status: {help.status}</p>
                            <p className="text-gray-500">Help Date: {help.help_date}</p>
                        </div>

                        {/* Actions */}
                        <div className="md:w-1/4 flex flex-col justify-center items-center border-l border-gray-200 p-4">
                            <span className="text-sm text-green-600">Free Assistance</span>


                            <button style={{ backgroundColor: "#016593", color: "white" }} class=" border border-green-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                                <span class="bg-green-400 shadow-green-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                View Details
                            </button>

                            <button class="w-[150px] md:w-[180px] lg:w-[200px] bg-[#55D79F] text-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-[#276147] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 hover:text-white">
                                Button
                            </button>


                        </div>
                    </div>
                ))
            ) : (
                <h2 className="text-center text-gray-600">No Help Requests Available</h2>
            )}
        </div>
    );
};

export default Test;
