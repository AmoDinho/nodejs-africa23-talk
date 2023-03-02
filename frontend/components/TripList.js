const TripListItem = ({ tripDetail }) => {
  if (!tripDetail) return <p>Unable to render trip detail</p>;
  return (
    <div className="flex flex-row">
      <p>{tripDetail.guide}</p>
      <p>{tripDetail.price}</p>
      <p>{tripDetail.tripName}</p>
    </div>
  );
};

const TripList = ({ tripPayload }) => {
  if (!tripPayload) return <p>Unabale to render payload</p>;
  return (
    <div className="flex flex-col">
      {tripPayload.map((trip) => (
        <TripList tripDetail={trip} />
      ))}
    </div>
  );
};

export default TripList;
