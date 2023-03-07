import { Modal, Spin, Button } from 'antd';

const InvoiceModal = ({
  isModalOpen,
  handleOk,
  handleCancel,
  loading,
  returnedURL,
  children,
}) => {
  return (
    <Modal
      title="Generate your invoice"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={
        <>
          <Button type="dashed" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="secondary" loading={loading} onClick={handleOk}>
            Ok
          </Button>
        </>
      }
    >
      {loading && <Spin />}
      {!loading && !returnedURL && <h1> Generate your invoice?</h1>}

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
