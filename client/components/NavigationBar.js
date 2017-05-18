import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import PropTypes from 'prop-types';

class NavigationBar extends React.Component {
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <ul>
        <li>
          <a href="/" onClick={this.logout.bind(this)}>Logout</a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul>
        <li>
          <NavLink to="/signup" activeClassName="selected">Sign up</NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="selected">Login</NavLink>
        </li>
      </ul>
    );

    return (
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="selected">Home</NavLink>
          </li>
        </ul>
        { isAuthenticated ? userLinks : guestLinks }
      </nav>
    );
  }
}

NavigationBar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout })(NavigationBar);
