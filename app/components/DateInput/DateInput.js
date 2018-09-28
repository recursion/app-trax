import React from 'react';
import PropTypes from 'prop-types';

const formatDate = (d) => new Date(d).toISOString().split('T')[0];

const DateInput = (props) => (
  <div className="mb-4">
    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="notes">Date</label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
      id="date-input"
      type="date"
      min="2010-01-01"
      max={formatDate(new Date(Date.now()))}
      value={formatDate(props.date)}
      onChange={(e) => props.handleChangeField(props.fieldName, Date.parse(e.target.value))}
    />
  </div>
);

DateInput.propTypes = {
  handleChangeField: PropTypes.func.isRequired,
  date: PropTypes.number.isRequired,
  fieldName: PropTypes.string.isRequired
};

export default DateInput;
