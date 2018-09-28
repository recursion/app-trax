import React from 'react';
import PropTypes from 'prop-types';
import { getCurrent } from '../../status.utils';
import './style.scss';

const ApplicationItemDetails = (props) => (
  <div className="application-details clearfix">
    <div className="">
      <p>{getCurrent(props.state).notes}</p>
    </div>
    {(props.contact) &&
      <div className="application-details__contact float-left">
        <label className="application-details__contact-label is-size-7">Contact:</label>
        <span className="application-details__contact-value is-size-7">{props.contact}</span>
      </div>
    }
    <span className="float-right">{props.children}</span>
  </div>
);
ApplicationItemDetails.propTypes = {
  contact: PropTypes.string,
  state: PropTypes.array.isRequired,
  children: PropTypes.element
};
export default ApplicationItemDetails;
