import React from 'react';
import PropTypes from 'prop-types';

const CreateApplicationButton = (props) => (
  <button
    className="application-manager__button-create-new button is-info is-small is-inline is-pulled-right"
    onClick={props.toggleShowApplicationForm}
  >
    {(props.showApplicationForm) ?
      <span className="icon">
        <i className="fas fa-minus"></i>
      </span> :
      <span className="icon">
        <i className="fas fa-plus"></i>
      </span>
    }
  </button>
);

CreateApplicationButton.propTypes = {
  toggleShowApplicationForm: PropTypes.func,
  showApplicationForm: PropTypes.bool
};

export default CreateApplicationButton;
