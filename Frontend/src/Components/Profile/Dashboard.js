import React from "react";
import { FaShoppingCart, FaBoxOpen, FaDollarSign, FaChartLine, FaBoxes, FaTag } from "react-icons/fa";
import ProfileSlider from "./SliderProfile";

const dashboardData = [
    { title: "Total Sales", value: "$45,678", growth: "+12.5% growth", icon: <FaDollarSign />, bg: "bg-green-100" },
    { title: "Items Sold", value: "1,234", growth: "↑ Trending Up", icon: <FaShoppingCart />, bg: "bg-green-600 text-white" },
    { title: "Purchased Products", value: "2,456", growth: "+15% this month", icon: <FaBoxOpen />, bg: "bg-gray-800 text-white" },
    { title: "Orders", value: "856", growth: "Active Orders", icon: <FaTag />, bg: "bg-green-600 text-white" },
    { title: "Stock Level", value: "156", growth: "Items Available", icon: <FaBoxes />, bg: "bg-green-100" },
    { title: "Growth Rate", value: "23.4%", growth: "Year over Year", icon: <FaChartLine />, bg: "bg-gray-100" },
];

const Dashboard = () => {
    return (

        <div className="flex">
            <ProfileSlider />
            <div className="flex-1 p-5">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-5">
                    {dashboardData.map((card, index) => (
                        <div key={index} className={`p-4 rounded-lg shadow ${card.bg}`}>
                            <div className="flex items-center gap-3">
                                <div className="text-2xl">{card.icon}</div>
                                <div>
                                    <p className="text-sm font-semibold">{card.title}</p>
                                    <h2 className="text-xl font-bold">{card.value}</h2>
                                    <p className="text-xs">{card.growth}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
