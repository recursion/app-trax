import React from 'react';
import PropTypes from 'prop-types';
import { getCurrent } from '../../status.utils';
import './style.scss';

const ApplicationItemDetails = (props) => (
  <div className="application-details container is-clearfix">
    <div className="">
      <p>{getCurrent(props.state).notes}</p>
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
  contact: PropTypes.string,
  state: PropTypes.array,
  children: PropTypes.element
};
export default ApplicationItemDetails;
