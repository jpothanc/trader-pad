import { Ref, forwardRef, useImperativeHandle, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
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

  return (
    <>
      <div>
        <Modal show={formState.show} onHide={handleClose} size="sm">
          <Modal.Header closeButton>
            <Modal.Title
              style={{
                fontSize: "10px",
              }}
            >
              {formState.title}
              Order Entry
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <OrderEntry />
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" size="sm" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
});

export default OrderEntryDlg;
