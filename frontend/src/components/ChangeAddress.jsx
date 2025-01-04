import React, { useState } from "react";

function ChangeAddress({ setIsModalOpen, setAddress }) {
  const [newAddress, setNewAddress] = useState("");

  const onClose = () => {
    setAddress(newAddress);  
    setIsModalOpen(false); 
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter new address"
        className="border p-4 w-full mb-4 mt-8"
        value={newAddress} // Controlled input
        onChange={(e) => setNewAddress(e.target.value)}
      />
      <div className="flex justify-end">
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </button>
        <button className="bg-blue-500 text-white py-2 px-4" onClick={onClose}>
          Save Address
        </button>
      </div>
    </div>
  );
}

export default ChangeAddress;
