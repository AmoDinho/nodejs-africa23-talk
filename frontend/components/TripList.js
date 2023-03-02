import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GENERATE_INVOICE_MUTATION } from '../graphql';
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

const TripListItem = ({ tripDetail, onClick, setSelectedTrip }) => {
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

  const handleOnChange = () => {
    onClick();
    setSelectedTrip(tripDetail);
  };
  return (
    <div
      className="flex flex-row m-5 p-10 cursor-pointer"
      onClick={handleOnChange}
    >
      <TripPropertyColum columnData={guideData} />
      <TripPropertyColum columnData={priceData} />
      <TripPropertyColum columnData={listingData} />
    </div>
  );
};

const TripList = ({ tripPayload }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [seletedTrip, setSelectedTrip] = useState({
    guide: { name: '' },
    price: '',
    listingName: '',
  });
  const [mutateInvoice, { data, error, loading }] = useMutation(
    GENERATE_INVOICE_MUTATION,
    {
      variables: {
        CustomerInput: {
          name: 'Tami Jetty',
          guide: seletedTrip.guide.name,
          price: seletedTrip.price,
          tripName: seletedTrip.listingName,
        },
      },
    }
  );
  const confirmPayload = (payload) => setSelectedTrip(payload);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);
  const showModal = () => setIsModalOpen(true);
  console.log('pp', isModalOpen, error, seletedTrip);
  if (!tripPayload) return <p>Unabale to render payload</p>;
  return (
    <div className="flex flex-col">
      <InvoiceModal
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        handleOk={mutateInvoice}
        loading={loading}
        returnedURL={data}
      />

      {tripPayload.map((trip) => (
        <TripListItem
          tripDetail={trip}
          onClick={showModal}
          setSelectedTrip={() => confirmPayload(trip)}
        />
      ))}
    </div>
  );
};

export default TripList;
