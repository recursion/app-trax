import React from 'react';
import PropTypes from 'prop-types';
import ApplicationForm from 'containers/ApplicationForm';
import ApplicationsList from 'components/ApplicationsList';
import ApplicationUpdate from 'components/ApplicationUpdate';
import * as statusUtils from '../../status.utils';
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
    return (
      <article className="application-manager">
        <div className="application-manager__header">
          <h1 className="title is-inline is-size-4">App-Trax</h1>
          <button
            className="application-manager__button-create-new button is-info is-small is-inline is-pulled-right"
            onClick={this.toggleShowApplicationForm}
          >
            {(this.state.showApplicationForm) ?
              <span className="icon">
                <i className="fas fa-minus"></i>
              </span> :
              <span className="icon">
                <i className="fas fa-plus"></i>
              </span>
            }
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
