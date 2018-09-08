import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import statusOptions from '../../statusOptions';

export default class ApplicationForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // mode: props.mode || 'create',
      company: props.company || '',
      contact: props.contact || '',
      notes: props.notes || '',
      status: props.status || 'Considering',
      companyHelpMsg: false
    };
    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeField(key, value) {
    // reset help message when updating company with non-blank value
    if (key === 'company' && this.state.companyHelpMsg && value !== '') {
      this.setState(() => ({
        companyHelpMsg: ''
      }));
    }

    this.setState(() => ({
      [key]: value
    }));
  }

  handleSubmit() {
    if (this.state.company === '') {
      this.setState(() => ({ companyHelpMsg: true }));
    } else {
      this.props.onSubmit({
        company: this.state.company,
        contact: this.state.contact,
        state: [
          {
            notes: this.state.notes,
            status: this.state.status,
            updated: Date.now()
          }
        ]
      });
      this.props.onCancel();
    }
  }

  render() {
    return (
      <section className="application-form section">
        <div className="container">
          <h1 className="subtitle has-text-centered">Create New</h1>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label" htmlFor="company">Company</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input
                    id="company"
                    className={`input ${(this.state.companyHelpMsg) ? 'is-danger' : ''}`}
                    type="text"
                    value={this.state.company}
                    placeholder="e.g. Apple inc"
                    onChange={(e) => this.handleChangeField('company', e.target.value)}
                  />
                </div>
                {(this.state.companyHelpMsg) ?
                  <p className="application-form__company-help-msg help is-danger">
                    Must not be empty
                  </p> : ''
                }
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label" htmlFor="contact">Contact</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input
                    id="contact"
                    className="input"
                    type="text"
                    value={this.state.contact}
                    placeholder="e.g. Mark Jacobs <mark@apple.com>"
                    onChange={(e) => this.handleChangeField('contact', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

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
                    value={this.state.notes}
                    placeholder="e.g. Applied online at.... Application included technical questions and resume attachment."
                    onChange={(e) => this.handleChangeField('notes', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

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
                      value={this.state.status}
                      onChange={(e) => this.handleChangeField('status', e.target.value)}
                    >
                      {statusOptions.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="field is-grouped is-grouped-centered">
            <div className="control">
              <button
                className="application-form__submit-button button is-primary"
                onClick={this.handleSubmit}
              >
                {(!this.props.company) ? 'Create' : 'Edit'}
              </button>
            </div>
            <div className="control">
              <button
                className="application-form__cancel-button button is-text"
                onClick={this.props.onCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

ApplicationForm.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  company: PropTypes.string,
  contact: PropTypes.string,
  notes: PropTypes.string,
  status: PropTypes.string
};
