import React, { useState, useRef } from "react";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom"; // React Router Link import
import { LogOut } from "./AuthButton";

const sideBarData = [
  {
    url: "/acount/dashboard",
    label: "Dashboard",
  },
  {
    url: "/account/profile",
    label: "Profile",
  },
  {   
    url: "/account/listing",
    label: "Listing",
  },
  {
    url: "/account/purchases",
    label: "Purchases",
  },
  {
    url: "/account/chat",
    label: "Messages",
  },
  {
    url: "/account/history",
    label: "Order History",
  },
  {
    url: "/account/notification",
    label: "Notification",
  },
  {
    url: "/account/support",
    label: "Support",
  },
];

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleMouseEnter = (event) => {
    if (!dropdownRef.current?.contains(event.relatedTarget)) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = (event) => {
    if (!dropdownRef.current?.contains(event.relatedTarget)) {
      setIsOpen(false);
    }
  };

  return (
    <div
      ref={dropdownRef}
      className="relative z-[100]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        onClick={toggleDropdown}
        src={""}
        alt="Profile"
        className="w-10 h-10 rounded-full border border-darkColor cursor-pointer hover:shadow-lg transition-shadow"
      />

      <div
        className={`absolute right-0 w-56 bg-white rounded-lg shadow-lg py-2 
                      transform transition-all duration-200 origin-top-right
                      ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
      >
        <div className="px-4 py-3 border-b">
          <p className="text-sm font-medium text-gray-900">{"Deepak"}</p>
          <p className="text-xs text-gray-500">{"deepakmeenaa78@gmail.com"}</p>
        </div>

        <div className="py-1">
          {sideBarData.map((item, index) => (
            <Link
              key={index}
              to={item.url} // "href" ko "to" me change kiya
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-lightColor"
            >
              <span className="ml-2">{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="border-t py-1">
          <div className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 cursor-pointer">
            <BiLogOut className="w-4 h-4 mr-3" />
            <LogOut />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
