import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GENERATE_INVOICE_MUTATION } from './graphql';
import InvoiceModal from '../components/Modal';

const ErrorComponent = (payload) => {
  if (!payload) return <p className="text-red-300">Unable to render payload</p>;
};

const TripPropertyColum = ({ columnData }) => {
  return (
    <>
      <ErrorComponent payload={columnData} />
      <div className="flex flex-col mr-3 p-3">
        <p>{columnData.title}</p>
        <p>{columnData.value}</p>
      </div>
    </>
  );
};

const TripListItem = ({ tripDetail, onClick }) => {
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
    <div className="flex flex-row m-5 p-10 cursor-pointer" onClick={onClick}>
      <TripPropertyColum columnData={guideData} />
      <TripPropertyColum columnData={priceData} />
      <TripPropertyColum columnData={listingData} />
    </div>
  );
};

const TripList = ({ tripPayload }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);
  const showModal = () => setIsModalOpen(true);
  console.log('pp', isModalOpen);
  if (!tripPayload) return <p>Unabale to render payload</p>;
  return (
    <div className="flex flex-col">
      <InvoiceModal
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        handleOk={handleOk}
      />

      {tripPayload.map((trip) => (
        <TripListItem tripDetail={trip} onClick={showModal} />
      ))}
    </div>
  );
};

export default TripList;
