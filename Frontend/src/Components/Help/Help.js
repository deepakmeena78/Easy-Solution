import React, { useEffect, useState } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const Help = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3200/help/get-help")
      .then((response) => {
        setData(response.data.result || []);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setData([]);
      });
  }, []);

  return (
    <div className="container mx-auto p-6 flex flex-col gap-6">
      {data.length > 0 ? (
        data.map((help, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-5 flex w-full h-[200px] items-center"
          >
            {/* Single Image */}
            <div className="w-1/4 h-full overflow-hidden">
              {help.gallery && help.gallery.length > 0 ? (
                <img
                  src={`http://localhost:3200/${help.gallery[0].replace("\\", "/")}`}
                  alt={help.title}
                  className="rounded-lg object-cover w-full h-full"
                />
              ) : (
                <p className="text-center">No Image Available</p>
              )}
            </div>

            {/* Help Details */}
            <div className="w-2/4 p-4">
              <h5 className="text-lg font-semibold">{help.title}</h5>
              <p className="text-gray-600 mt-2">{help.description}</p>
            </div>

            {/* Actions */}
            <div className="w-1/4 flex justify-center">
              <button 
                onClick={() => navigate(`/help-details/${help._id}`)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                View Details
              </button>
            </div>
          </div>
        ))
      ) : (
        <h2 className="text-center text-gray-600 w-full">No Help Requests Available</h2>
      )}
    </div>
  );
};

export default Help;
