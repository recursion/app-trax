import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ApplicationItemDetails = (props) => (
  <div className="application-details container is-clearfix">
    <div className="">
      <p>{props.state[0].notes}</p>
    </div>
    {(props.contact) ?
      <div className="application-details-contact is-pulled-left">
        <label className="application-details-contact-label is-size-7">Contact:</label>
        <span className="application-details-contact-value is-size-7">{props.contact}</span>
      </div> :
      ''
    }
    <span className="is-pulled-right">{props.children}</span>
  </div>
);
ApplicationItemDetails.propTypes = {
  notes: PropTypes.string,
  contact: PropTypes.string,
  state: PropTypes.array,
  children: PropTypes.element
};
export default ApplicationItemDetails;
