import React from 'react';
import PropTypes from 'prop-types';

const FormControlButtons = (props) => (
  <div className="form-control-buttons">
    <div className="field is-grouped is-grouped-centered">
      <div className="control">
        <button
          className="application-form__submit-button button is-primary"
          onClick={props.onSubmit}
        >
          Submit
        </button>
      </div>
      <div className="control">
        <button
          className="application-form__cancel-button button is-text"
          onClick={props.onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
    {(props.showDelete) ?
      <div className="field is-grouped is-grouped-centered">
        <div className="control">
          <button
            className="application-form__delete-button button is-danger"
            onClick={props.onDelete}
          >
            Delete
          </button>
        </div>
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
