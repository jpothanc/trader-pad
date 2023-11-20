import { Ref, forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import OrderEntry from "./OrderEntry";
import { ModalRef } from "../../utils/dialogUtils";

interface Props {
  title1: string;
}
type FormState = {
  title: string;
  content: string;
  show: boolean;
};

const OrderEntryDlg = forwardRef(({}: Props, ref: Ref<ModalRef>) => {
  const [formState, setFormState] = useState<FormState>({
    title: "",
    content: "",
    show: false,
  });

  const handleDetails = (arg0: string, arg1: string) => {
    setFormState({
      ...formState,
      title: arg0,
      content: arg1,
    });
  };

  const handleClose = () => {
    setFormState((prev) => ({
      ...prev,
      show: false,
    }));
  };
  const handleShow = () => {
    setFormState((prev) => ({
      ...prev,
      show: true,
    }));
    console.log(formState.content);
  };

  // Expose functions via the ref for external use
  useImperativeHandle(ref, () => ({
    open: handleShow,
    close: handleClose,
    setDetails: handleDetails,
  }));
  const childFormRef = useRef<HTMLFormElement>(null);

  const handleSubmit = () => {
    if (childFormRef.current) {
      childFormRef.current.dispatchEvent(
        new Event("submit", { cancelable: true })
      );
    }
  };

  return (
    <>
      <div>
        <Modal show={formState.show} onHide={handleClose} size="sm">
          <Modal.Header closeButton>
            <Modal.Title
              style={{
                fontSize: "14px",
              }}
            >
              {formState.title}
              Order Entry
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <OrderEntry ref={childFormRef} />
            </Container>
          </Modal.Body>
         
        </Modal>
      </div>
    </>
  );
});

export default OrderEntryDlg;
