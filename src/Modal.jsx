import React, { PureComponent } from 'react';
import './Modal.css';

export default class Modal extends PureComponent {
  render() {
    const { header, callBack, callBack2, callBackClose, buttonText, button2Text,  } = this.props;
    return (
      <div className="modal">
          <div className="modal__container">
              <button className="button-modal-close" onClick={callBackClose} />
              <div className="modal__content">
                  <h2>{header}</h2>
                  <button className="button-red" onClick={callBack}>{buttonText}</button>
                  <button className="button-red" onClick={callBack2}>{button2Text}</button>
              </div>
          </div>
      </div>
    )
  }
}


Modal.defaultProps = {
  header: "",
  body: "",
  errorMessage: "",
  buttonText: "Да",
  button2Text: "Нет",
  callBack: null,
  callBack2: null,
  callBackClose: null
}

function ErrorMessage({ children }) {
  return (
      children ? (
          <div className="alert">
              <span><strong>{children}</strong></span>
          </div>) : null
  )
}