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

  const guideData = {
    title: 'Guide Name',
    value: tripDetail.guide.name,
  };

  const priceData = {
    title: 'Amount',
    value: tripDetail.price,
  };

  const listingData = {
    title: 'Listing Name',
    value: tripDetail.listingName,
  };
  return (
    <div className="flex flex-row m-5 p-10 ">
      <TripPropertyColum columnData={guideData} />
      <TripPropertyColum columnData={priceData} />
      <TripPropertyColum columnData={listingData} />
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
