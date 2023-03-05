import { Modal, Spin } from 'antd';

const InvoiceModal = ({
  isModalOpen,
  handleOk,
  handleCancel,
  loading,
  returnedURL,
  children,
}) => {
  if (loading) return <Spin />;
  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <h1> Generate your invoice?</h1>
      {returnedURL && (
        <a
          href={returnedURL.generateInvoice}
          rel="noreferrer"
          target="_blank"
          className="text-blue-500"
        >
          {' '}
          Here is your invoice
        </a>
      )}
      {children}
    </Modal>
  );
};

export default InvoiceModal;
