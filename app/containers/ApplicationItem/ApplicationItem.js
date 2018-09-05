import React from 'react';
import PropTypes from 'prop-types';

const ApplicationItem = (props) => (
  <li>{props.company}</li>
);
ApplicationItem.propTypes = {
  company: PropTypes.string,
};
export default ApplicationItem;
