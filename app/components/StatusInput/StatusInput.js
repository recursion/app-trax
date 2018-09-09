import React from 'react';
import PropTypes from 'prop-types';
import statusOptions from '../../statusOptions';

const StatusInput = (props) => (
  <div className="field is-horizontal">
    <div className="field-label is-normal">
      <label className="label" htmlFor="status">Status</label>
    </div>
    <div className="field-body">
      <div className="field">
        <div className="control">
          <div className="select is-fullwidth">
            <select
              id="status"
              value={props.status}
              onChange={(e) => props.handleChangeField('status', e.target.value)}
            >
              {statusOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
);

StatusInput.propTypes = {
  status: PropTypes.string,
  handleChangeField: PropTypes.func
};

export default StatusInput;
