import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const AllHelps = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => response.json())
      .then((value) => {
        setData(value.results);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <div className="container mx-auto p-6 flex flex-col gap-6">
      {data.length > 0 ? (
        data.map((help, index) => (
          <div style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
            key={index}
            className="bg-white shadow-lg rounded-lg p-5 flex w-full h-[200px] items-center"
          >
            {/* Single Image */}
            <div className="w-1/4 h-full overflow-hidden rounded-lg" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
              <img
                src={help.picture.large}
                alt={`${help.name.first} ${help.name.last}`}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>

            {/* Help Details */}
            <div className="w-2/4 p-4">
              <h5 className="text-lg font-semibold">{help.name.first} {help.name.last}</h5>
              <p className="text-gray-600 mt-2">{help.email}</p>
            </div>

            {/* Actions */}
            <div className="w-1/4 flex justify-center">
              <button style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
                onClick={() => navigate(`/help-details`)}
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

export default AllHelps;