import React from 'react';
import PropTypes from 'prop-types';

const CompanyInput = (props) => (
  <div className="field is-horizontal">
    <div className="field-label is-normal">
      <label className="label" htmlFor="company">Company</label>
    </div>
    <div className="field-body">
      <div className="field">
        <div className="control">
          <input
            id="company"
            className={`input ${(props.companyHelpMsg) ? 'is-danger' : ''}`}
            type="text"
            value={props.company}
            placeholder="e.g. Apple inc"
            onChange={(e) => props.handleChangeField('company', e.target.value)}
          />
        </div>
        {(props.companyHelpMsg) &&
          <p className="application-form__company-help-msg help is-danger">
            Must not be empty
          </p>
        }
      </div>
    </div>
  </div>
);

CompanyInput.propTypes = {
  company: PropTypes.string.isRequired,
  companyHelpMsg: PropTypes.bool,
  handleChangeField: PropTypes.func.isRequired
};

export default CompanyInput;
