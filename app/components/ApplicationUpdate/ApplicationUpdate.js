import React from 'react';
import PropTypes from 'prop-types';
import statusOptions from '../../statusOptions';

export default class ApplicationUpdate extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      notes: '',
      status: this.props.item.state[0].status
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
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="update-app-form box">
            <h1 className="subtitle has-text-centered">Update {this.props.item.company}</h1>

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
                        {statusOptions.map((o) => <option key={o}>{o}</option>)}
                      </select>
                    </div>
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

            <div className="field is-grouped is-grouped-centered">
              <div className="control">
                <button
                  className="button is-primary"
                  onClick={() => {
                    this.props.item.state.unshift({
                      notes: this.state.notes,
                      status: this.state.status,
                      updated: Date.now()
                    });
                    this.props.update(Object.assign({}, this.props.item, {
                      state: this.props.item.state
                    }));
                  }}
                >
                  Update
                </button>
              </div>
              <div className="control">
                <button
                  className="button is-text"
                  onClick={this.props.update}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={this.props.update}
          className="modal-close is-large"
          aria-label="close"
        >
        </button>
      </div>
    );
  }
}

ApplicationUpdate.propTypes = {
  item: PropTypes.object,
  update: PropTypes.func
};
