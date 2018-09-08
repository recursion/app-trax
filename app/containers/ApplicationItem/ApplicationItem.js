import React from 'react';
import PropTypes from 'prop-types';
import ApplicationItemDetails from 'components/ApplicationItemDetails';
import './style.scss';

const getColor = (status) => {
  switch (status) {
    case 'Considering':
      return 'has-text-warning';
    case 'Rejected':
    case 'Offer Declined':
    case 'No Reply':
      return 'has-text-danger';
    default:
      return 'has-text-success';
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
    const { company, state } = this.props.app;
    const { status } = state[0];
    return (
      <li className="application-item has-text-white has-background-dark">
        <div className="application-item__status-bar">
          <button
            className="application-item__expand-button is-size-5"
            onClick={this.toggleExpand}
          >
            {(this.state.expanded) ?
              <span className="icon is-size-6">
                <i className="fas fa-minus"></i>
              </span> :
              <span className="icon is-size-6">
                <i className="fas fa-expand-arrows-alt"></i>
              </span>
            }
          </button>
          <span className="application-item__name subtitle has-text-white">
            {company}
            {(this.state.expanded) ?
              <span className="application-item__controls">
                <button onClick={() => this.props.edit(this.props.app)}>
                  <span className="icon is-size-6">
                    <i className="fas fa-edit"></i>
                  </span>
                </button>
                <button>
                  <span className="icon is-size-6">
                    <i className="fas fa-history"></i>
                  </span>
                </button>
              </span> : ''}
          </span>
          <button
            className={'application-item__status is-pulled-right is-size-7'}
            onClick={() => this.props.update(this.props.app)}
          >
            <span className={` ${getColor(status)}`}>
              {status}
              <span className="application-item__status-update-icon icon is-small">
                <i className="fas fa-sync-alt"></i>
              </span>
            </span>
          </button>
        </div>
        {(this.state.expanded) ? <ApplicationItemDetails {...this.props.app} /> : ''}
      </li>
    );
  }
}

ApplicationItem.propTypes = {
  app: PropTypes.object,
  update: PropTypes.func,
  edit: PropTypes.func
};
