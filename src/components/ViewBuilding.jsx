function ViewBuilding({ data, selectedBuilding }) {
  // TODO: Find the corresponding data based off the selected building's id and display its data
  // find the details of the selected building using its ID
  const buildingDetails = data.find(
    (directory) => directory.id === selectedBuilding
  );

  if (!buildingDetails) {
    return (
      <div className="p-4 bg-rich-black border border-charcoal rounded shadow-lg">
        <p className="italic text-lavender-web">
          Click on a name to view more information
        </p>
      </div>
    );
  }
  return (
    <div className="p-4 bg-rich-black border border-charcoal rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-3 text-lavender-web">
        {buildingDetails.name} ({buildingDetails.code})
      </h2>
      {buildingDetails.address && (
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-lavender-web">Address</h3>
          <p className="ml-4 text-lavender-web">{buildingDetails.address}</p>
        </div>
      )}
      {buildingDetails.coordinates && (
        <div>
          <h3 className="text-lg font-semibold text-lavender-web">
            Coordinates
          </h3>
          <p className="ml-4 lavender-web text-lavender-web">
            <span className="font-bold">Latitude:</span>{' '}
            {buildingDetails.coordinates.latitude},{' '}
            <span className="font-bold">Longitude: </span>
            {buildingDetails.coordinates.longitude}
          </p>
        </div>
      )}
    </div>
  );
}

export default ViewBuilding;
