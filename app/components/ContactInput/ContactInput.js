import React from 'react';
import PropTypes from 'prop-types';

const ContactInput = (props) => (
  <div className="field is-horizontal">
    <div className="field-label is-normal">
      <label className="label" htmlFor="contact">Contact</label>
    </div>
    <div className="field-body">
      <div className="field">
        <div className="control">
          <input
            id="contact"
            className="input"
            type="text"
            value={props.contact}
            placeholder="e.g. Mark Jacobs <mark@apple.com>"
            onChange={(e) => props.handleChangeField('contact', e.target.value)}
          />
        </div>
      </div>
    </div>
  </div>
);

ContactInput.propTypes = {
  contact: PropTypes.string.isRequired,
  handleChangeField: PropTypes.func.isRequired
};

export default ContactInput;
