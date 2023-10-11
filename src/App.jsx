import React, { useState } from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import RemoveBuilding from './components/RemoveBuilding';
import AddBuilding from './components/AddBuilding';
import Modal from './components/Modal';
import { v4 as uuidv4 } from 'uuid';

function App({ data: initialData }) {
  // TODO: Update the following two variables to use the useState() hook
  const [data, setData] = useState(initialData);
  const [filterText, setFilterText] = useState('');
  const [selectedBuilding, setSelectedBuilding] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  function filterUpdate(value) {
    // TODO: Set the state of the filter text to the value being passed in
    setFilterText(value);
  }

  function selectedUpdate(id) {
    // TODO: Set the state of the selected building to the id being passed in
    setSelectedBuilding(id);
  }

  function addBuilding(newBuilding) {
    const newId = uuidv4();
    setData([...data, { ...newBuilding, id: newId }]);
  }

  function removeBuilding(id) {
    // console.log('Inside removeBuilding with ID:', id);
    setData(data.filter((building) => building.id !== id));
  }

  function openAddBuildingModal() {
    setModalContent({
      title: 'Add Building',
      content: (
        <AddBuilding
          addBuilding={addBuilding}
          closeModal={() => setIsOpen(false)}
        />
      ),
    });
    setIsOpen(true);
  }

  function openRemoveBuildingModal() {
    setModalContent({
      title: 'Remove Building',
      content: (
        <RemoveBuilding
          data={data}
          removeBuilding={removeBuilding}
          closeModal={() => setIsOpen(false)}
        />
      ),
    });
    setIsOpen(true);
  }

  return (
    <div className="container mx-auto p-4">
      {/* ============= Main Header ============= */}
      <div className="p-4 mb-4 text-center">
        <h1 className="text-4xl font-bold">UF Directory App</h1>
      </div>
      {/* ============== ****** END OF Main Header ****** ==================== */}
      {/* ============= Search Component ============= */}
      <div className="mb-4">
        <Search filterUpdate={filterUpdate} />
      </div>
      {/* ============= ****** END OF Search Component ****** ========================== */}
      {/* ============= Main Content ============= */}
      <main>
        <div className="flex space-x-6">
          {/* ============= Column 1 for Building List ============= */}
          <div className="flex-1">
            {/* Code building title */}
            <h2 className="text-xl font-bold mb-4">Code Building</h2>

            {/* Building List */}
            <div className="shadow-md p-4 bg-white rounded">
              <div className="max-h-80 overflow-y-auto scroll-smooth">
                <BuildingList
                  data={data}
                  filterText={filterText}
                  selectedUpdate={selectedUpdate}
                />
              </div>
            </div>
          </div>

          {/* ============= Column 2: for View Building Details and Add/Remove Actions ============= */}
          <div className="flex-1 space-y-4">
            <ViewBuilding data={data} selectedBuilding={selectedBuilding} />

            <div className="flex space-x-2 items-center justify-evenly">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
                onClick={openAddBuildingModal}
              >
                Add Building
              </button>

              <button
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none"
                onClick={openRemoveBuildingModal}
              >
                Remove Building
              </button>
            </div>

            {isOpen && (
              <Modal
                setIsOpen={setIsOpen}
                title={modalContent.title}
                content={modalContent.content}
              />
            )}
          </div>
        </div>
      </main>
      {/* ============= Credit Component ============= */}

      <div className=" mt-4 rounded-md shadow-md bg-white">
        <Credit />
      </div>
      {/* ============= ****** END OF Credit Component ****** ============= */}

      {/* ======================================= */}
    </div>
  );
}

export default App;
