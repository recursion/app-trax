import React from 'react';
import PropTypes from 'prop-types';
import ApplicationsList from 'components/ApplicationsList';
import ApplicationUpdate from 'components/ApplicationUpdate';
import './style.scss';

export default class ApplicationManager extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateForm: false,
      item: null
    };
    this.startUpdateItem = this.startUpdateItem.bind(this);
    this.finishUpdateItem = this.finishUpdateItem.bind(this);
  }

  startUpdateItem(item) {
    this.setState(() => ({ showUpdateForm: true, item }));
  }

  finishUpdateItem(item = null) {
    // if an item was returned, we need to update it's data
    if (item) this.props.updateApplication(item);
    this.setState(() => ({ showUpdateForm: false, item: null }));
  }

  render() {
    return (
      <article className="application-manager">
        {(this.state.showUpdateForm) ?
          <ApplicationUpdate
            update={this.finishUpdateItem}
            item={this.state.item}
          /> :
          ''
        }
        {(this.props.applications && this.props.applications.length > 0) ?
          <ApplicationsList
            apps={this.props.applications}
            update={this.startUpdateItem}
            edit={this.startEditItem}
            viewHistory={this.viewHistory}
          /> :
          ''
        }
      </article>
    );
  }
}

ApplicationManager.propTypes = {
  applications: PropTypes.array,
  updateApplication: PropTypes.func
};
