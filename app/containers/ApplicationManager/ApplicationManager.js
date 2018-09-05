import React from 'react';
import PropTypes from 'prop-types';
import NewApplicationForm from 'components/NewApplicationForm';
import ApplicationsList from 'components/ApplicationsList';
import './style.scss';

export default class ApplicationManager extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { showNewApplicationForm: false };
    this.toggleShowNewApplicationInput = this.toggleShowNewApplicationInput.bind(this);
  }

  toggleShowNewApplicationInput() {
    this.setState((state) => ({ showNewApplicationForm: !state.showNewApplicationForm }));
  }

  render() {
    return (
      <article className="application-manager">
        <div className="container is-fluid">
          <h1 className="title is-inline is-size-4">Applications</h1>
          <button
            className="btn-new button is-info is-small is-inline is-pulled-right"
            onClick={this.toggleShowNewApplicationInput}
          >
            {(this.state.showNewApplicationForm) ? 'x' : '+'}
          </button>
          <hr />
          {(this.state.showNewApplicationForm) ?
            <NewApplicationForm
              onSubmit={this.props.addApplication}
              onCancel={this.toggleShowNewApplicationInput}
            /> :
            ''
          }
          {(!this.state.showNewApplicationForm && this.props.applications && this.props.applications.length > 0) ?
            <ApplicationsList apps={this.props.applications} /> : ''
          }
        </div>
      </article>
    );
  }
}

ApplicationManager.propTypes = {
  applications: PropTypes.array,
  addApplication: PropTypes.func
};
