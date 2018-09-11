import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <div className="container">
          <h1 className="title is-inline is-size-4 has-text-white">App-Trax</h1>
          {(this.props.location.pathname === '/') ?
            <Link className="create-new-button router-link is-pulled-right button is-small is-info" to="/applications/create">
              <span className="icon">
                <i className="fas fa-plus"></i>
              </span>
            </Link> : ''
          }
          {(this.props.location.pathname === '/applications/create' ||
          this.props.location.pathname.includes('/applications/edit')
          ) ?
            <Link
              className="router-link is-pulled-right button is-small is-danger"
              to="/"
            >
              <span className="icon">
                <i className="fas fa-times"></i>
              </span>
            </Link> : ''
          }
          {(this.props.location.pathname.includes('/applications/history')) ?
            <Link
              className="router-link is-pulled-right button is-small is-info"
              to="/"
            >
              <span className="icon">
                <i className="fas fa-backspace"></i>
              </span>
            </Link> : ''
          }
        </div>
      </div>
    );
  }
}
Header.propTypes = {
  location: PropTypes.object,
};
/*
<Link className="router-link" to="/">
  Home
</Link>
<Link className="router-link" to="/features">
  Features
</Link>
*/
export default Header;

