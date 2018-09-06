import React from 'react';
import PropTypes from 'prop-types';
import ApplicationItemDetails from 'components/ApplicationItemDetails';
import './style.scss';

const getColor = (status) => {
  switch (status) {
    case 'Considering':
      return 'has-text-link';
    default:
      return 'has-text-danger';
  }
};

export default class ApplicationItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.toggleExpand = this.toggleExpand.bind(this);
  }

  toggleExpand() {
    this.setState((state) => ({
      expanded: !state.expanded
    }));
  }

  render() {
    const {
      company,
      state
    } = this.props.app;
    const { status } = state[0];
    return (
      <li className="application-item">
        <div>
          <button className="is-size-5" onClick={this.toggleExpand}>
            {(this.state.expanded) ? '-' : '+'}
          </button>
          <span className="subtitle">{company}</span>
          <button
            className={'application-item__status is-pulled-right is-size-7'}
            onClick={() => this.props.update(this.props.app)}
          >
            <span className={`${getColor(status)}`}>
              {status}
            </span>
          </button>
        </div>
        <div className="application-item_controls container">
          {(this.state.expanded) ? <ApplicationItemDetails {...this.props.app} /> : ''}
        </div>
      </li>
    );
  }
}

ApplicationItem.propTypes = {
  app: PropTypes.object,
  update: PropTypes.func
};
