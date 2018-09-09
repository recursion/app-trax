import React from 'react';
import PropTypes from 'prop-types';
import ApplicationForm from 'containers/ApplicationForm';
import ApplicationsList from 'components/ApplicationsList';
import ApplicationUpdate from 'components/ApplicationUpdate';
import CreateApplicationButton from 'components/CreateApplicationButton/CreateApplicationButton';
import ApplicationHistory from 'containers/ApplicationHistory';
import * as statusUtils from '../../status.utils';
import './style.scss';

export default class ApplicationManager extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showApplicationForm: false,
      showUpdateForm: false,
      viewHistory: false,
      editing: false,
      item: null
    };
    this.toggleShowApplicationForm = this.toggleShowApplicationForm.bind(this);
    this.startUpdateItem = this.startUpdateItem.bind(this);
    this.finishUpdateItem = this.finishUpdateItem.bind(this);
    this.viewHistory = this.viewHistory.bind(this);
    this.closeViewHistory = this.closeViewHistory.bind(this);
    this.startEditItem = this.startEditItem.bind(this);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
  }

  viewHistory(item) {
    this.setState(() => ({ item, viewHistory: true }));
  }

  closeViewHistory() {
    this.setState(() => ({ item: null, viewHistory: false }));
  }

  toggleShowApplicationForm() {
    this.setState((state) => ({ showApplicationForm: !state.showApplicationForm, item: null }));
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
    const nextItemState = statusUtils.updateCurrent(currentItemState, item.state);
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
    this.setState(() => ({ item: null, showApplicationForm: false, editing: false }));
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
        notes: statusUtils.getCurrent(this.state.item.state).notes,
        status: statusUtils.getCurrent(this.state.item.state).status
      };
    }
    const showApplications = () => {
      if (
        !this.state.showApplicationForm &&
        this.props.applications &&
        this.props.applications.length > 0
      ) return true;
      return false;
    };

    if (this.state.viewHistory) {
      return (<ApplicationHistory
        close={this.closeViewHistory}
        application={this.state.item}
      />);
    }

    return (
      <article className="application-manager">
        <div className="application-manager__header">
          <h1 className="title is-inline is-size-4">App-Trax</h1>
          <CreateApplicationButton
            toggleShowApplicationForm={this.toggleShowApplicationForm}
            showApplicationForm={this.state.showApplicationForm}
          />
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
        {(showApplications()) ?
          <ApplicationsList
            apps={this.props.applications}
            update={this.startUpdateItem}
            edit={this.startEditItem}
            viewHistory={this.viewHistory}
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
