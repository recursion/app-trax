import React from 'react';
import PropTypes from 'prop-types';

export default class NewApplicationForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // mode: props.mode || 'create',
      company: props.company || '',
      contact: props.contact || '',
      notes: props.notes || '',
      status: props.status || 'Considering'
    };
    this.handleChangeField = this.handleChangeField.bind(this);
  }

  handleChangeField(key, value) {
    this.setState(() => ({
      [key]: value
    }));
  }

  render() {
    return (
      <div className="new-app-form section">
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label" htmlFor="company">Company</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input
                  id="company"
                  className="input"
                  type="text"
                  value={this.state.company}
                  placeholder="e.g. Apple inc"
                  onChange={(e) => this.handleChangeField('company', e.target.value)}
                />
              </div>
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
                    value={this.state.status}
                    onChange={(e) => this.handleChangeField('status', e.target.value)}
                  >
                    <option>Applied</option>
                    <option>Considering</option>
                    <option>No Reply</option>
                    <option>Interviewing</option>
                    <option>Take Home Project</option>
                    <option>Rejected</option>
                    <option>Offer Made</option>
                    <option>Offer Accepted</option>
                    <option>Negotiating Offer</option>
                    <option>Offer Declined</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button
              className="button is-primary"
              onClick={() => {
                this.props.onSubmit({
                  company: this.state.company,
                  contact: this.state.contact,
                  notes: this.state.notes,
                  status: this.state.status
                });
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
    );
  }
}

NewApplicationForm.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  company: PropTypes.string,
  contact: PropTypes.string,
  notes: PropTypes.string,
  status: PropTypes.string
};
