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
      item: null
    };
    this.toggleShowApplicationForm = this.toggleShowApplicationForm.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.updateItemComplete = this.updateItemComplete.bind(this);
  }

  toggleShowApplicationForm() {
    this.setState((state) => ({ showApplicationForm: !state.showApplicationForm }));
  }

  updateItem(item) {
    this.setState(() => ({ showUpdateForm: true, item }));
  }

  updateItemComplete(item = null) {
    // if an item was returned, we need to update it's data
    if (item) this.props.updateApplication(item);
    this.setState(() => ({ showUpdateForm: false, item }));
  }

  render() {
    return (
      <article className="application-manager">
        <h1 className="title is-inline is-size-4">App-Trax</h1>
        <button
          className="btn-new button is-info is-small is-inline is-pulled-right"
          onClick={this.toggleShowApplicationForm}
        >
          {(this.state.showApplicationForm) ? 'x' : '+'}
        </button>
        {(this.state.showApplicationForm) ?
          <ApplicationForm
            onSubmit={this.props.addApplication}
            onCancel={this.toggleShowApplicationForm}
            item={this.state.item}
          /> :
          ''
        }
        {(this.state.showUpdateForm) ?
          <ApplicationUpdate
            cancelUpdate={this.updateItemComplete}
            update={this.updateItemComplete}
            item={this.state.item}
          /> :
          ''
        }
        {(!this.state.showApplicationForm && this.props.applications && this.props.applications.length > 0) ?
          <ApplicationsList
            apps={this.props.applications}
            updateItem={this.updateItem}
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
