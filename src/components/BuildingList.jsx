function BuildingList({ data, filterText, selectedUpdate }) {
  // filter the buildings based on the filterText
  const filteredBuildings = data.filter(
    (directory) =>
      directory.name.toLowerCase().includes(filterText.toLowerCase()) ||
      directory.code.toLowerCase().includes(filterText.toLowerCase())
  );

  // TODO: Apply names filter on buildingList
  // map over the filtered buildings to create the list
  const buildingList = filteredBuildings.map((directory) => {
    return (
      <tr
        key={directory.id}
        onClick={() => selectedUpdate(directory.id)}
        className="cursor-pointer hover:bg-gray-200"
      >
        <td className="py-2 px-4">{directory.code}</td>
        <td className="py-2 px-4">{directory.name}</td>
      </tr>
    );
  });

  return (
    <div className="max-h-80 overflow-y-auto scroll-smooth">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 font-semibold">Code</th>
            <th className="py-2 px-4 font-semibold">Name</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">{buildingList}</tbody>
      </table>
    </div>
  );
}

export default BuildingList;
