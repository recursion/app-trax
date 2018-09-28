import React from 'react';
import PropTypes from 'prop-types';
import statusOptions from '../../statusOptions';

const StatusInput = (props) => (
  <div className="mb-4">
    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="status">Status</label>
    <div className="relative">
      <select
        id="status"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
        value={props.status}
        onChange={(e) => props.handleChangeField('status', e.target.value)}
      >
        {statusOptions.map((o) => <option key={o}>{o}</option>)}
      </select>
      <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
      </div>
    </div>
  </div>
);

StatusInput.propTypes = {
  status: PropTypes.string,
  handleChangeField: PropTypes.func
};

export default StatusInput;
