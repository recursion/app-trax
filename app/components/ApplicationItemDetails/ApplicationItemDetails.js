import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ApplicationItemDetails = (props) => (
  <div className="application-details container is-clearfix">
    <div className="is-pulled-left">
      {props.contact}
      <p>{props.notes}</p>
    </div>
    <div className="application-details__controls">
      <button className="button is-text is-small has-text-danger">+</button>
      <button className="button is-text is-small has-text-danger">!!</button>
      <button className="button is-text is-small has-text-danger">?</button>
      <button className="button is-text is-small has-text-danger">X</button>
    </div>
  </div>
);
ApplicationItemDetails.propTypes = {
  contact: PropTypes.string,
  notes: PropTypes.string
};
export default ApplicationItemDetails;
