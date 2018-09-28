import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

export default class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="flex items-center justify-between bg-black text-white p-1 mb-2">
        <h1 className="">App-Trax</h1>
        {(this.props.location.pathname === '/') &&
          <Link className="header-btn" to="/applications/create">
            <span className="icon">
              <i className="fas fa-plus"></i>
            </span>
          </Link>
        }
        {(this.props.location.pathname === '/applications/create' ||
          this.props.location.pathname.includes('/applications/edit')
        ) &&
          <Link
            className="header-btn"
            to="/"
          >
            <span className="icon">
              <i className="fas fa-times"></i>
            </span>
          </Link>
        }
      </div>
    );
  }
}
Header.propTypes = {
  location: PropTypes.object,
};

