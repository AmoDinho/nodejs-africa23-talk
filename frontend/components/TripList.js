const ErrorComponent = (payload) => {
  if (!payload) return <p className="text-red-300">Unable to render payload</p>;
};

const TripPropertyColum = ({ columnData }) => {
  return (
    <>
      <ErrorComponent payload={columnData} />
      <div className="flex flex-col">
        <p>{columnData.title}</p>
        <p>{columnData.value}</p>
      </div>
    </>
  );
};

const TripListItem = ({ tripDetail }) => {
  if (!tripDetail) return <p>Unable to render trip detail</p>;
  return (
    <div className="flex flex-row">
      <TripPropertyColum title="Guide Name" value={tripDetail.guide.name} />

      <p>{tripDetail.price}</p>
      <p>{tripDetail.listingName}</p>
    </div>
  );
};

const TripList = ({ tripPayload }) => {
  console.log('pp', tripPayload);
  if (!tripPayload) return <p>Unabale to render payload</p>;
  return (
    <div className="flex flex-col">
      {tripPayload.map((trip) => (
        <TripListItem tripDetail={trip} />
      ))}
    </div>
  );
};

export default TripList;
