import { useRef } from "react";
import OrderEntryDlg from "../dialogs/orderentry/OrderEntryDlg";
import { ModalRef } from "../utils/dialogUtils";

const About = () => {
  const modalRef = useRef<ModalRef | null>(null);

  const handleOpenModal = () => {
    modalRef.current?.open();
  };

  const handleCloseModal = () => {
    modalRef.current?.close();
  };
  return (
    <>
      <button onClick={handleOpenModal} className="btn btn-primary">
        My Button
      </button>
      <button onClick={handleCloseModal} className="btn btn-primary">
        My Button
      </button>
      <OrderEntryDlg title1="Alert" ref={modalRef} />
      About
    </>
  );
};

export default About;
