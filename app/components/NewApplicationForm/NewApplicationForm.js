import React from 'react';
import PropTypes from 'prop-types';

export default class NewApplicationForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { company: '' };
    this.handleCompanyChange = this.handleCompanyChange.bind(this);
  }

  handleCompanyChange(company) {
    this.setState(() => ({
      company
    }));
  }

  render() {
    return (
      <div className="new-app-form field is-horizontal">
        <div className="field-label is-normal">
          <label className="label" htmlFor="new-app-input">Company</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input
                id="new-app-input"
                className="input"
                type="text"
                value={this.state.company}
                placeholder="e.g. Apple inc"
                onChange={(e) => this.handleCompanyChange(e.target.value)}
              />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button
                className="button is-primary"
                onClick={() => {
                  this.props.onSubmit({ company: this.state.company });
                  this.props.onCancel();
                }}
              >
                Submit
              </button>
            </div>
            <div className="control">
              <button className="button is-text" onClick={this.props.onCancel}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NewApplicationForm.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func
};
