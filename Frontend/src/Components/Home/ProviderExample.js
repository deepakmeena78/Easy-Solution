import React, { useEffect, useState } from "react";
import "../../App.css";

const ProviderExample = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        setUser(data.results[0]); // API response se pehla user set karenge
      })
      .catch((error) => console.error("Error fetching user:", error));
  }, []);

  return (
    <>
      <div className="flex justify-center p-12">
        <div className="w-64 max-w-sm border shadow-lg border-gray-200 rounded-lg p-6 bg-white shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.25)]">
          <div className="flex justify-end px-4 pt-4"></div>

          <div className="flex flex-col items-center pb-10">
            {user ? (
              <>
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={user.picture.large}
                  alt={user.name.first}
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-black">
                  {user.name.first} {user.name.last}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {user.email}
                </span>
              </>
            ) : (
              <p>Loading...</p>
            )}

            <div className="flex mt-4 md:mt-6">
              <button className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 shadow-lg shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.25)]">
                Rating
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProviderExample;
