import React from 'react';
import PropTypes from 'prop-types';
import ApplicationItem from 'containers/ApplicationItem';
import './style.scss';

const ApplicationsList = (props) => (
  <ul className="applications-list">
    {props.apps.map((app) => (
      <ApplicationItem
        key={app.createdAt}
        update={props.update}
        viewHistory={props.viewHistory}
        edit={props.edit}
        app={app}
      />
    ))}
  </ul>
);

ApplicationsList.propTypes = {
  apps: PropTypes.array,
  update: PropTypes.func,
  viewHistory: PropTypes.func,
  edit: PropTypes.func
};

export default ApplicationsList;
