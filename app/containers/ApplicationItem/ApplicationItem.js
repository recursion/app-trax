import React from 'react';
import PropTypes from 'prop-types';
import ApplicationItemDetails from 'components/ApplicationItemDetails';
import ApplicationExpansionControl from 'components/ApplicationExpansionControl';
import ApplicationItemControls from 'components/ApplicationItemControls';
import ApplicationStatus from 'components/ApplicationStatus';
import { getCurrent } from '../../status.utils';
import './style.scss';

export default class ApplicationItem extends React.PureComponent {
  static propTypes = {
    app: PropTypes.object,
    update: PropTypes.func,
    viewHistory: PropTypes.func,
    edit: PropTypes.func
  }

  state = { expanded: false };

  toggleExpand = () => {
    this.setState((state) => ({
      expanded: !state.expanded
    }));
  }

  render = () => {
    const { company, state } = this.props.app;
    const { status } = getCurrent(state);

    const trimCompanyName = (str) => {
      if (!window.matchMedia) return str;
      if (window.matchMedia('(max-width: 320px)').matches && status.length > 8) {
        return (str.length < 10) ? str : `${str.slice(0, 10)}...`;
      }

      if (window.matchMedia('(max-width: 414px)').matches && status.length > 8) {
        return (str.length < 14) ? str : `${str.slice(0, 14)}...`;
      }
      return str;
    };

    return (
      <li className="application-item border border-black border-collapse clearfix">
        <div className="application-item__status-bar p-1">
          <ApplicationExpansionControl
            expanded={this.state.expanded}
            toggleExpand={this.toggleExpand}
          />
          <span className="application-item__name ml-1">
            {trimCompanyName(company)}
          </span>
          <ApplicationStatus
            update={this.props.update}
            status={status}
            app={this.props.app}
          />
        </div>
        {(this.state.expanded) &&
          <ApplicationItemDetails
            {...this.props.app}
          >
            <ApplicationItemControls
              app={this.props.app}
              edit={this.props.edit}
              itemState={state}
              viewHistory={this.props.viewHistory}
            />
          </ApplicationItemDetails>
        }
      </li>
    );
  }
}
