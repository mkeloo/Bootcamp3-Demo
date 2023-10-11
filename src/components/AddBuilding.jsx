import React, { useState } from 'react';

function AddBuildingModal({ addBuilding, closeModal }) {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [address, setAddress] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleAddition = () => {
    const newBuilding = {
      name,
      code,
      address,
      coordinates: {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
      },
    };
    addBuilding(newBuilding);
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96">
        <h2 className="text-xl font-bold mb-4">Add Building</h2>

        <input
          className="w-full mt-2 p-2 border rounded-md"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full mt-2 p-2 border rounded-md"
          type="text"
          placeholder="Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <input
          className="w-full mt-2 p-2 border rounded-md"
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          className="w-full mt-2 p-2 border rounded-md"
          type="text"
          placeholder="Latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
        <input
          className="w-full mt-2 mb-4 p-2 border rounded-md"
          type="text"
          placeholder="Longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />

        <div className="flex justify-between">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
            onClick={handleAddition}
          >
            Add Building
          </button>
          <button
            className="px-4 py-2 rounded hover:bg-gray-200 focus:outline-none"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddBuildingModal;
