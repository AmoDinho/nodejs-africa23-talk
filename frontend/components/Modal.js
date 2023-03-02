import { Modal } from 'antd';

const Modal = ({ isModalOpen, handleOk, handleCancel, trip }) => {
  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <h1> Generate your invoice?</h1>
    </Modal>
  );
};

export default Modal;
