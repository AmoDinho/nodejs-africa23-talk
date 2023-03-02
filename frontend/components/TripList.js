const TripListItem = ({ tripDetail }) => {
  if (!tripDetail) return <p>Unable to render trip detail</p>;
  return (
    <div className="flex flex-row">
      <p>{tripDetail.guide.name}</p>
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
