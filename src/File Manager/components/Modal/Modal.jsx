import { MdClose } from "react-icons/md";
import { useEffect, useRef } from "react";
import "./Modal.scss";

const Modal = ({
  children,
  show,
  setShow,
  heading,
  dialogClassName,
  contentClassName = "",
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (show) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [show]);

  return (
    <dialog ref={modalRef} className={`fm-modal ${dialogClassName} dialog`}>
      <div className="fm-modal-header">
        <span className="fm-modal-heading">{heading}</span>
        <MdClose
          size={18}
          onClick={() => setShow(false)}
          className="close-icon"
          title="Close"
        />
      </div>
      {children}
    </dialog>
  );
};

export default Modal;
