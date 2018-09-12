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

export default class ApplicationHistory extends React.PureComponent {
  static propTypes = {
    close: PropTypes.func,
    application: PropTypes.object
  }

  constructor(props) {
    super(props);
    const { id } = props.match.params;
    const app = props.applications.filter((a) => (a.createdAt === parseInt(id, 10)))[0];
    this.item = app;
    this.state = {};
  }

  render = () => (
    <div className="application-history">
      <h1
        className="application-history__title has-text-weight-bold subtitle has-text-centered"
      >
        {this.item.company} History
      </h1>
      <div className="application-history__contact is-size-7 has-text-white has-text-centered has-background-dark">
        Contact: {this.item.contact}
      </div>
      <div className="application-history__list">
        {this.item.state.map((state) => (<ApplicationStateNode
          key={state.updated}
          {...state}
        />))}
      </div>
    </div>
  )
}

