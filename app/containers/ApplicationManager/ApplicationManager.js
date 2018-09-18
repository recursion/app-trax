import React from 'react';
import PropTypes from 'prop-types';
import ApplicationsList from 'components/ApplicationsList';
import ApplicationUpdate from 'components/ApplicationUpdate';
import Modal from 'components/Modal';
import ApplicationHistory from 'containers/ApplicationHistory';
import './style.scss';

export default class ApplicationManager extends React.PureComponent {
  static propTypes = {
    applications: PropTypes.array.isRequired,
    updateApplication: PropTypes.func.isRequired
  }

  state = {
    showUpdateForm: false,
    viewHistory: false,
    item: null
  }

  toggleViewHistory = (item) => {
    if (item) {
      this.setState(() => ({
        viewHistory: true,
        item
      }));
    } else {
      this.setState(() => ({
        viewHistory: false,
        item: null
      }));
    }
  }

  startUpdateItem = (item) => {
    this.setState(() => ({ showUpdateForm: true, item }));
  }

  finishUpdateItem = (item = null) => {
    // if an item was returned, we need to update it's data
    if (item) this.props.updateApplication(item);
    this.setState(() => ({ showUpdateForm: false, item: null }));
  }

  render() {
    return (
      <article className="application-manager">
        {(this.state.showUpdateForm) &&
          <ApplicationUpdate
            update={this.finishUpdateItem}
            item={this.state.item}
          />
        }
        {(this.state.viewHistory) &&
          <Modal close={this.toggleViewHistory} showCloseButton={false} >
            <ApplicationHistory
              id={this.state.item.id}
              close={this.toggleViewHistory}
            />
          </Modal>
        }
        {(this.props.applications && this.props.applications.length > 0) &&
          <ApplicationsList
            apps={this.props.applications}
            update={this.startUpdateItem}
            viewHistory={this.toggleViewHistory}
          />
        }
      </article>
    );
  }
}
