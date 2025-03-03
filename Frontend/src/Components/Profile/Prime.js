import { useEffect, useState } from "react";

// Custom Card component
function Card({ children, className }) {
    return (
        <div className={`p-6 rounded-2xl shadow-lg text-center border border-gray-200 transition transform hover:scale-105 ${className}`}>
            {children}
        </div>
    );
}

// Custom CardContent component
function CardContent({ children }) {
    return <div className="mt-2">{children}</div>;
}

// Custom Button component
function Button({ children, className }) {
    return <button className={`bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium ${className}`}>
        {children}
    </button>;
}


function Prime() {
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        fetch("https://api.example.com/pricing")
            .then((response) => response.json())
            .then((data) => setPlans(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (

        <div className="flex">
            <SliderProfile />
            <div className="flex-1 p-5">
                <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        AirDroid Personal Pricing Plan
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {plans.map((plan, index) => (
                            <Card
                                key={index}
                                className={plan.highlighted ? "bg-blue-900 text-white" : "bg-white text-gray-900"}
                            >
                                {plan.highlighted && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-b-lg">
                                        Best Value
                                    </div>
                                )}
                                <CardContent>
                                    <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                                    <p className="text-2xl font-bold mb-2">{plan.price}</p>
                                    {plan.billed && <p className="text-sm opacity-80 mb-4">{plan.billed}</p>}
                                    <Button>Buy Now</Button>
                                    <ul className="text-sm mt-4 space-y-1">
                                        <li className="flex items-center justify-center gap-2">✅ {plan.description}</li>
                                        <li className="flex items-center justify-center gap-2">✅ {plan.additional}</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="flex justify-center items-center gap-6 mt-6 text-gray-600 text-sm">
                        <p>💰 Money Back Guarantee</p>
                        <p>🔒 Secure Online Payment</p>
                        <p>💲 VAT Included in All Prices</p>
                        <p>🛠 Free Professional Support</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Prime;