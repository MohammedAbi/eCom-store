import React from "react";
import {
  FaShippingFast,
  FaRegCreditCard,
  FaUndo,
  FaLock,
  FaHeadset,
} from "react-icons/fa";

function InfoSection() {
  const infoItems = [
    {
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      Title: "Free Shipping",
      description: "Get your orders delivered with no extra cost",
    },
    {
      icon: <FaRegCreditCard className="text-3xl text-blue-600" />,
      Title: "Secure Payment",
      description: "We ensure secure payment methods for your safety",
    },
    {
      icon: <FaUndo className="text-3xl text-green-600" />,
      Title: "Easy Returns",
      description: "Enjoy a hassle-free return process on eligible items",
    },
    {
      icon: <FaLock className="text-3xl text-purple-600" />,
      Title: "Privacy Protection",
      description: "Your data is safe with our advanced security systems",
    },
    {
      icon: <FaHeadset className="text-3xl text-orange-600" />,
      Title: "24/7 Support",
      description: "Get assistance anytime with our dedicated support team",
    },
  ];

  return (
    <div className="bg-white pb-8 pt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {infoItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            {item.icon}
            <h3 className="mt-4 text-xl font-semibold">{item.Title}</h3>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoSection;
