import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick = {props.onHideCart} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

// Get div id from index html file where to portal backdrop and modaloverlay
const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop onHideCart = {props.onHideCart} />,portalElement )}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement )}
    </Fragment>
  );
};

export default Modal;
