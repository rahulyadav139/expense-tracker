import styles from './Modal.module.css';
import { Fragment } from 'react';
import ReactDom from 'react-dom';
import React from 'react';

const Backdrop = props => {
  return <div onClick={props.onHide} className={styles.backdrop}></div>;
};

const ModalOverlay = props => {
  return (
    <div className={styles.modal}>
      <h2 className={styles.title}>Error</h2>
      <p className={styles.body}>{props.msg}</p>
      <div className={styles.btn}>
        <button onClick={props.onHide}>Ok</button>
      </div>
    </div>
  );
};

const overlays = document.getElementById('overlays');
const Modal = props => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop onHide={props.onHide} />, overlays)}
      {ReactDom.createPortal(
        <ModalOverlay onHide={props.onHide} msg={props.msg} />,
        overlays
      )}
    </Fragment>
  );
};

export default Modal;
