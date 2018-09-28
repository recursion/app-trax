import React from 'react';
import PropTypes from 'prop-types';

const FormControlButtons = (props) => (
  <div className="form-control-buttons">
    <div className="flex items-center justify-between">
      <button
        className="application-form__submit-button bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={props.onSubmit}
      >
        Submit
      </button>
      <button
        className="application-form__cancel-button"
        onClick={props.onCancel}
      >
        Cancel
      </button>
    </div>
    {(props.showDelete) ?
      <div className="flex items-center justify-center">
        <button
          className="application-form__delete-button mt-4 bg-red hover:bg-red-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={props.onDelete}
        >
          Delete
        </button>
      </div> : ''
    }
  </div>
);

FormControlButtons.propTypes = {
  onSubmit: PropTypes.func,
  onDelete: PropTypes.func,
  onCancel: PropTypes.func,
  showDelete: PropTypes.bool
};

export default FormControlButtons;
