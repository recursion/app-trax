import React from 'react';
import PropTypes from 'prop-types';

const showHelp = (show) => ((show) ? 'border-red' : '');

const CompanyInput = (props) => (
  <div className="mb-4">
    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="company">Company</label>
    <input
      id="company"
      className={`shadow appearance-none border ${showHelp(props.companyHelpMsg)} rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline ${(props.companyHelpMsg) ? 'text-red' : ''}`}
      type="text"
      value={props.company}
      placeholder="e.g. Apple inc"
      onChange={(e) => props.handleChangeField('company', e.target.value)}
    />
    {(props.companyHelpMsg) &&
      <p className="application-form__company-help-msg help text-red text-xs italic">
        Must not be empty
      </p>
    }
  </div>
);

CompanyInput.propTypes = {
  company: PropTypes.string.isRequired,
  companyHelpMsg: PropTypes.bool,
  handleChangeField: PropTypes.func.isRequired
};

export default CompanyInput;
