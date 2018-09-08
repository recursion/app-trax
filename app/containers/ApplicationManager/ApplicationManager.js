import React from 'react';
import PropTypes from 'prop-types';
import ApplicationForm from 'components/ApplicationForm';
import ApplicationsList from 'components/ApplicationsList';
import ApplicationUpdate from 'components/ApplicationUpdate';
import './style.scss';

export default class ApplicationManager extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showApplicationForm: false,
      showUpdateForm: false,
      editing: false,
      item: null
    };
    this.toggleShowApplicationForm = this.toggleShowApplicationForm.bind(this);
    this.startUpdateItem = this.startUpdateItem.bind(this);
    this.finishUpdateItem = this.finishUpdateItem.bind(this);
    this.startEditItem = this.startEditItem.bind(this);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
  }

  toggleShowApplicationForm() {
    this.setState((state) => ({ showApplicationForm: !state.showApplicationForm }));
  }

  startEditItem(item) {
    this.setState(() => ({ showApplicationForm: true, item, editing: true }));
  }

  startUpdateItem(item) {
    this.setState(() => ({ showUpdateForm: true, item }));
  }

  edit(item) {
    // replace current state head with new item state
    const currentItemState = this.state.item.state;
    const nextItemState = currentItemState.map((state, i) => ((i === 0) ? item.state[0] : state));
    const nextItem = Object.assign({}, this.state.item, {
      company: item.company,
      contact: item.contact,
      state: nextItemState
    });
    this.props.updateApplication(nextItem);
    this.setState(() => ({ editing: false, item: null }));
  }

  delete() {
    this.props.deleteApplication(this.state.item);
    this.setState(() => ({ item: null, showApplicationForm: false }));
  }

  finishUpdateItem(item = null) {
    // if an item was returned, we need to update it's data
    if (item) this.props.updateApplication(item);
    this.setState(() => ({ showUpdateForm: false, item: null }));
  }

  render() {
    let item;
    if (this.state.item) {
      item = {
        company: this.state.item.company,
        contact: this.state.item.contact,
        notes: this.state.item.state[0].notes,
        status: this.state.item.state[0].status
      };
    }
    return (
      <article className="application-manager">
        <div className="application-manager__header">
          <h1 className="title is-inline is-size-4">App-Trax</h1>
          <button
            className="application-manager__button-create-new button is-info is-small is-inline is-pulled-right"
            onClick={this.toggleShowApplicationForm}
          >
            {(this.state.showApplicationForm) ? 'x' : '+'}
          </button>
        </div>
        {(this.state.showApplicationForm) ?
          <ApplicationForm
            onSubmit={(this.state.editing) ? this.edit : this.props.addApplication}
            onCancel={this.toggleShowApplicationForm}
            onDelete={this.delete}
            {...item}
          /> :
          ''
        }
        {(this.state.showUpdateForm) ?
          <ApplicationUpdate
            update={this.finishUpdateItem}
            item={this.state.item}
          /> :
          ''
        }
        {(!this.state.showApplicationForm && this.props.applications && this.props.applications.length > 0) ?
          <ApplicationsList
            apps={this.props.applications}
            update={this.startUpdateItem}
            edit={this.startEditItem}
          /> :
          ''
        }
      </article>
    );
  }
}

ApplicationManager.propTypes = {
  applications: PropTypes.array,
  addApplication: PropTypes.func,
  updateApplication: PropTypes.func
};
