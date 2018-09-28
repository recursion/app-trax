import React from 'react';
import PropTypes from 'prop-types';

const NotesInput = (props) => (
  <div className="mb-4">
    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="notes">Notes</label>
    <textarea
      id="notes"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
      value={props.notes}
      placeholder="e.g. Applied online at.... Application included technical questions and resume attachment."
      onChange={(e) => props.handleChangeField('notes', e.target.value)}
    />
  </div>

);

NotesInput.propTypes = {
  notes: PropTypes.string,
  handleChangeField: PropTypes.func
};

export default NotesInput;
