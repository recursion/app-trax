import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const formatDate = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString();
};

const ApplicationStateNode = (state) => (
  <div className="application-history__node">
    <div className="has-text-centered has-text-weight-bold">
      {formatDate(state.updated)}: {state.status}
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

  render = () => {
    const createId = (k, i) => `${k}:${i}`;
    return (
      <div className="application-history section">
        <h1
          className="application-history__title has-text-weight-bold subtitle has-text-centered"
        >
          {this.item.company} History
        </h1>
        {(this.item.contact) &&
          <div className="application-history__contact is-size-7 has-text-white has-text-centered has-background-dark">
            Contact: {this.item.contact}
          </div>
        }
        <div className="application-history__list">
          {this.item.state.map((state, i) => (<ApplicationStateNode
            key={createId(state.updated, i)}
            {...state}
          />))}
        </div>
      </div>
    );
  }
}

