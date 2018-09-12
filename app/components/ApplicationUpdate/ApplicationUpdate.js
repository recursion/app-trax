import React from 'react';
import PropTypes from 'prop-types';
import NotesInput from 'components/NotesInput';
import StatusInput from 'components/StatusInput';
import FormControlButtons from 'components/FormControlButtons';
import DateInput from 'components/DateInput';

export default class ApplicationUpdate extends React.PureComponent {
  static propTypes = {
    item: PropTypes.object,
    update: PropTypes.func
  }

  state = {
    notes: '',
    status: this.props.item.state[0].status,
    createdAt: this.props.item.createdAt
  }

  handleChangeField = (key, value) => {
    this.setState(() => ({
      [key]: value
    }));
  }

  render() {
    return (
      <div className="application-update-form modal is-active">
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="update-app-form box">
            <h1 className="subtitle has-text-centered">Update {this.props.item.company}</h1>

            <NotesInput
              handleChangeField={this.handleChangeField}
              notes={this.state.notes}
            />

            <StatusInput
              handleChangeField={this.handleChangeField}
              status={this.state.status}
            />

            <DateInput
              handleChangeField={this.handleChangeField}
              date={this.state.createdAt}
            />

            <FormControlButtons
              onSubmit={() => {
                this.props.item.state.unshift({
                  notes: this.state.notes,
                  status: this.state.status,
                  updated: Date.now()
                });
                this.props.update(Object.assign({}, this.props.item, {
                  state: this.props.item.state
                }));
              }}
              onCancel={() => this.props.update()}
              showDelete={false}
            />
          </div>
        </div>
      </div>
    );
  }
}
