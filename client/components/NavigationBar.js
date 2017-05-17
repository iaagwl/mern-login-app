import React from 'react';
import { NavLink } from 'react-router-dom'

export default () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="selected">Home</NavLink>
        </li>
        <li>
          <NavLink to="/signup" activeClassName="selected">Sign up</NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="selected">Login</NavLink>
        </li>
      </ul>
    </nav>
  )
}
