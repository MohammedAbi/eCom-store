import React from "react";
import manCategory from "../assets/Images/man.png";
import womenCategory from "../assets/Images/women.png";
import KidCategory from "../assets/Images/kid.png";

const categories = [
  {
    title: "Men",
    imageUrl: manCategory,
  },
  {
    title: "Women",
    imageUrl: womenCategory,
  },
  {
    title: "Kids",
    imageUrl: KidCategory,
  },
];

function CategorySection() {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative h-64 tranform transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <img
            src={category.imageUrl}
            alt={`${category.title} category`}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div className="absolute top-20 left-12">
            <p className="text-xl font-bold">{category.title}</p>
            <p className="text-gray-600">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategorySection;
