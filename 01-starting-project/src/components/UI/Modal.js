import classes from "./Modal.module.css";
import { Fragment } from "react";
import { ReactDOM } from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.Backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalElemnt = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop />
      <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>
  );
};

export default Modal;

/* {ReactDOM.createPortal(<Backdrop />, portalElemnt)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElemnt
      )}*/
