import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

function Shop() {
  const products = useSelector((state) => state.product.products); // Access the products array
  const [visibleProducts, setVisibleProducts] = useState(10); // Initial number of products to display

  const loadMoreProducts = () => {
    setVisibleProducts((prevCount) => prevCount + 10); // Increment the number of visible products
  };

  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
        {products.slice(0, visibleProducts).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {visibleProducts < products.length && ( // Show button only if there are more products
        <div className="text-center mt-6">
          <button
            onClick={loadMoreProducts}
            className="bg-red-600 px-6 py-2 text-white font-semibold rounded hover:bg-red-700 transition"
          >
            + More
          </button>
        </div>
      )}
    </div>
  );
}

export default Shop;
