import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal.jsx';

const modalRoot = document.getElementById('modal-root');

function createModal(modal) {
  const el = document.createElement('div');

  modalRoot.appendChild(el);

  ReactDOM.render(
    modal,
    el,
  );

  return el;
}


export function showAgeModal() {
  let modalRef = null;
  const closeFunc = () => modalRoot.removeChild(modalRef);

  const modal = (
  <Modal 
    header="У вас есть???" 
    callBackClose={closeFunc} 
    callBack={() => {
      closeFunc(); 
      showSuccessModal();
    }}
    callBack2={showAnotherModal}
  />);

  modalRef = createModal(modal);

}

export function showSuccessModal() {
  let modalRef = null;
  const closeFunc = () => modalRoot.removeChild(modalRef);

  const modal = (
  <Modal 
    header="о!" 
    callBackClose={closeFunc}
  />);

  modalRef = createModal(modal);
}

export function showAnotherModal() {
  let modalRef = null;
  const closeFunc = () => modalRoot.removeChild(modalRef);

  const modal = (
  <Modal 
    header="обидно(((" 
    callBackClose={closeFunc}
  />);

  modalRef = createModal(modal);
}
