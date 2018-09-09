import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CreateApplicationButton = (props) => (
  <Link className="router-link is-pulled-right button is-small is-info" to="/applications/create">
    <span className="icon">
      <i className="fas fa-plus"></i>
    </span>
  </Link>
);

/*
  <button
    className="application-manager__button-create-new button is-info is-small is-inline is-pulled-right"
    onClick={props.toggleShowApplicationForm}
  >
    {(props.showApplicationForm) ?
      <span className="icon">
        <i className="fas fa-minus"></i>
      </span> :
    }
  </button>
*/

CreateApplicationButton.propTypes = {
  toggleShowApplicationForm: PropTypes.func,
  showApplicationForm: PropTypes.bool
};

export default CreateApplicationButton;
