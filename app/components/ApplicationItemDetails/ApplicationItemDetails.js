import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ApplicationItemDetails = (props) => (
  <div className="application-details container is-clearfix">
    <div className="">
      <p>{props.notes}</p>
    </div>
    {(props.contact) ?
      <div className="is-pulled-left">
        <label className="is-size-7">Contact:</label>
        <span className="is-size-6">{props.contact}</span>
      </div> :
      ''
    }
  </div>
);
ApplicationItemDetails.propTypes = {
  contact: PropTypes.string,
  notes: PropTypes.string
};
export default ApplicationItemDetails;
