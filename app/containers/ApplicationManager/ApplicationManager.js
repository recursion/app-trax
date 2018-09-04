import React from 'react';
import PropTypes from 'prop-types';
import NewApplicationForm from 'components/NewApplicationForm';
import './style.scss';

const renderApplications = (apps) => (
  <ul>
    {apps.map((app) => (<li key={app.company}>{app.company}</li>))}
  </ul>
);

const ApplicationManager = (props) => (
  <article className="application-manager">
    <div className="container is-fluid">
      <h1 className="title is-inline is-size-4">Open Applications</h1>
      <button
        className="btn-new button is-info is-small is-inline is-pulled-right"
        onClick={props.toggleShowNewApplicationInput}
      >
        {(props.showNewApplicationInput) ? 'x' : '+'}
      </button>
      <hr />
      {(props.showNewApplicationInput) ?
        <NewApplicationForm
          onSubmit={props.addApplication}
          onCancel={props.toggleShowNewApplicationInput}
        /> :
        ''
      }
      {(props.applications && props.applications.length > 0) ?
        renderApplications(props.applications) : ''
      }
    </div>
  </article>
);

ApplicationManager.propTypes = {
  applications: PropTypes.array,
  showNewApplicationInput: PropTypes.bool,
  toggleShowNewApplicationInput: PropTypes.func,
  addApplication: PropTypes.func
};

export default ApplicationManager;
