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
      {returnedURL && <p> here is your invoice:{children}</p>}
      {children}
    </Modal>
  );
};

export default InvoiceModal;
