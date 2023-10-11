import React, { useState } from 'react';
import Search from './Search';

function RemoveBuildingModal({ data, removeBuilding, closeModal }) {
  const [filteredData, setFilteredData] = useState(data);
  const [selectedBuildingId, setSelectedBuildingId] = useState('');

  const handleFilterUpdate = (filterText) => {
    const filtered = data.filter(
      (building) =>
        building.name.toLowerCase().includes(filterText.toLowerCase()) ||
        building.code.toLowerCase().includes(filterText.toLowerCase())
    );
    setFilteredData(filtered);

    if (filtered.length > 0) {
      setSelectedBuildingId(filtered[0].id);
    } else {
      setSelectedBuildingId('');
    }
  };

  const handleRemoval = () => {
    // console.log('Attempting to remove building with ID:', selectedBuildingId);
    if (selectedBuildingId) {
      removeBuilding(selectedBuildingId);
      closeModal();
    } else {
      console.error('No building ID selected.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96">
        <h2 className="text-xl font-bold mb-4">Remove Building</h2>
        <Search filterUpdate={handleFilterUpdate} />

        <select
          className="w-full mt-4 p-2 border rounded-md"
          value={selectedBuildingId}
          onChange={(e) => setSelectedBuildingId(parseInt(e.target.value))}
        >
          <option value="">Please select a building...</option>
          {filteredData.map((building) => (
            <option key={building.id} value={building.id}>
              {building.name} ({building.code})
            </option>
          ))}
        </select>

        <div className="flex justify-between mt-6">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
            onClick={() => handleRemoval(selectedBuildingId)}
          >
            Confirm Removal
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

export default RemoveBuildingModal;
