import { Modal } from 'antd';

const InvoiceModal = ({ isModalOpen, handleOk, handleCancel, children }) => {
  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <h1> Generate your invoice?</h1>
      {children}
    </Modal>
  );
};

export default InvoiceModal;
