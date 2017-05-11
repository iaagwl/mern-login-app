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
          <NavLink to="/about" activeClassName="selected">About</NavLink>
        </li>
      </ul>
    </nav>
  )
}
