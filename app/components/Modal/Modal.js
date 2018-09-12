import React from 'react';
import PropTypes from 'prop-types';

const Modal = (props) => (
  <div className="application-update-form modal is-active">
    <div className="modal-background" onClick={props.close} role="presentation" ></div>
    <div className="modal-content">
      {props.children}
    </div>
    {(props.showCloseButton) &&
      <button onClick={props.close} className="modal-close is-large" aria-label="close"></button>
    }
  </div>
);

export default Modal;

Modal.propTypes = {
  showCloseButton: PropTypes.bool,
  close: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
