import React from 'react';
import PropTypes from 'prop-types';

const ContactInput = (props) => (
  <div className="mb-4">
    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="contact">Contact</label>
    <input
      id="contact"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      value={props.contact}
      placeholder="e.g. Mark Jacobs <mark@apple.com>"
      onChange={(e) => props.handleChangeField('contact', e.target.value)}
    />
  </div>
);

ContactInput.propTypes = {
  contact: PropTypes.string.isRequired,
  handleChangeField: PropTypes.func.isRequired
};

export default ContactInput;
