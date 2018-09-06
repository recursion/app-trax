import React from 'react';
import PropTypes from 'prop-types';
import ApplicationItem from 'containers/ApplicationItem';
import './style.scss';

const ApplicationsList = (props) => (
  <ul className="applications-list">
    {props.apps.map((app) => (<ApplicationItem
      key={app.createdAt}
      update={props.updateItem}
      app={app}
    />))}
  </ul>
);

ApplicationsList.propTypes = {
  apps: PropTypes.array,
  updateItem: PropTypes.func
};

export default ApplicationsList;
