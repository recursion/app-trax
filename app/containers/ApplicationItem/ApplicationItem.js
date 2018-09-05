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
    return (
      <li className="application-item">
        <div>
          <button onClick={this.toggleExpand}>
            <span className="subtitle">{this.props.company}</span>
          </button>
          <span className={`application-item__status is-pulled-right is-size-7 ${getColor(this.props.status)}`}>{this.props.status}</span>
        </div>
        <div className="application-item_controls container">
          {(this.state.expanded) ? <ApplicationItemDetails {...this.props} /> : ''}
        </div>
      </li>
    );
  }
}

ApplicationItem.propTypes = {
  company: PropTypes.string,
  status: PropTypes.string,
};
