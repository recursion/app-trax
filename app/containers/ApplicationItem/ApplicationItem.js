import React from 'react';
import PropTypes from 'prop-types';
import ApplicationItemDetails from 'components/ApplicationItemDetails';
import ApplicationExpansionControl from 'components/ApplicationExpansionControl';
import ApplicationItemControls from 'components/ApplicationItemControls';
import ApplicationStatus from 'components/ApplicationStatus';
import { getCurrent } from '../../status.utils';
import './style.scss';

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
    const { status } = getCurrent(state);
    const showNameBasedOnSize = (str) => {
      if (window.matchMedia('(max-width: 320px)').matches) {
        return (str.length < 12) ? str : `${str.slice(0, 12)}...`;
      }

      if (window.matchMedia('(max-width: 414px)').matches) {
        return (str.length < 16) ? str : `${str.slice(0, 16)}...`;
      }
      return str;
    };

    return (
      <li className="application-item has-text-white has-background-dark">
        <div className="application-item__status-bar">
          <ApplicationExpansionControl
            expanded={this.state.expanded}
            toggleExpand={this.toggleExpand}
          />
          <span className="application-item__name subtitle has-text-white">
            {showNameBasedOnSize(company)}
          </span>
          <ApplicationStatus
            update={this.props.update}
            status={status}
            app={this.props.app}
          />
        </div>
        {(this.state.expanded) ?
          <ApplicationItemDetails
            {...this.props.app}
          >
            <ApplicationItemControls
              app={this.props.app}
              edit={this.props.edit}
              itemState={state}
              viewHistory={this.props.viewHistory}
            />
          </ApplicationItemDetails> :
          ''
        }
      </li>
    );
  }
}

ApplicationItem.propTypes = {
  app: PropTypes.object,
  update: PropTypes.func,
  viewHistory: PropTypes.func,
  edit: PropTypes.func
};
