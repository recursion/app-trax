import React from 'react';
import PropTypes from 'prop-types';

const NotesInput = (props) => (
  <div className="field is-horizontal">
    <div className="field-label is-normal">
      <label className="label" htmlFor="notes">Notes</label>
    </div>
    <div className="field-body">
      <div className="field">
        <div className="control">
          <textarea
            id="notes"
            className="textarea"
            value={props.notes}
            placeholder="e.g. Applied online at.... Application included technical questions and resume attachment."
            onChange={(e) => props.handleChangeField('notes', e.target.value)}
          />
        </div>
      </div>
    </div>
  </div>

);

NotesInput.propTypes = {
  notes: PropTypes.string,
  handleChangeField: PropTypes.func
};

export default NotesInput;
