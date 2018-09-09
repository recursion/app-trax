import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const printDate = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString();
};

const ApplicationStateNode = (state) => (
  <div className="application-history__node">
    <div className="has-text-centered has-text-weight-bold">
      {printDate(state.updated)}: {state.status}
    </div>
    {state.notes}
  </div>
);

const ApplicationHistory = (props) => (
  <div className="application-history">
    <div className="application-history__header">
      <button
        className="is-inline is-inverted is-small"
        onClick={props.close}
      >
        <span className="icon">
          <i className="fas fa-backspace"></i>
        </span>
      </button>
      <h1
        className="application-history__title subtitle is-inline"
      >
        {props.application.company} History
      </h1>
      <div className="application-history__contact is-size-7 has-text-white has-text-centered has-background-dark">
        Contact: {props.application.contact}
      </div>
    </div>
    <div className="application-history__list">
      {props.application.state.map((state) => (<ApplicationStateNode
        key={state.updated}
        {...state}
      />))}
    </div>
  </div>
);

ApplicationHistory.propTypes = {
  close: PropTypes.func,
  application: PropTypes.object
};

export default ApplicationHistory;
