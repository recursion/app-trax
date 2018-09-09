import React from 'react';
import PropTypes from 'prop-types';
import ApplicationItemDetails from 'components/ApplicationItemDetails';
import ApplicationExpansionControl from 'components/ApplicationExpansionControl';
import ApplicationItemControls from 'components/ApplicationItemControls';
import ApplicationStatus from 'components/ApplicationStatus';
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
    const { status } = state[0];

    return (
      <li className="application-item has-text-white has-background-dark">
        <div className="application-item__status-bar">
          <ApplicationExpansionControl
            expanded={this.state.expanded}
            toggleExpand={this.toggleExpand}
          />
          <span className="application-item__name subtitle has-text-white">
            {company}
            {(this.state.expanded) ?
              <ApplicationItemControls
                app={this.props.app}
                edit={this.edit}
                itemState={state}
              /> : ''
            }
          </span>
          <ApplicationStatus
            update={this.props.update}
            status={status}
            app={this.props.app}
          />
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
