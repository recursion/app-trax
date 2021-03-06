import React from 'react';
import PropTypes from 'prop-types';

const formatDate = (d) => new Date(d).toISOString().split('T')[0];

const DateInput = (props) => (
  <div className="field is-horizontal">
    <div className="field-label is-normal">
      <label className="label" htmlFor="notes">Date</label>
    </div>
    <div className="field-body">
      <div className="field">
        <div className="control">
          <input
            className="input"
            id="date-input"
            type="date"
            min="2010-01-01"
            max={formatDate(new Date(Date.now()))}
            value={formatDate(props.date)}
            onChange={(e) => props.handleChangeField(props.fieldName, Date.parse(e.target.value))}
          />
        </div>
      </div>
    </div>
  </div>
);

DateInput.propTypes = {
  handleChangeField: PropTypes.func.isRequired,
  date: PropTypes.number.isRequired,
  fieldName: PropTypes.string.isRequired
};

export default DateInput;
