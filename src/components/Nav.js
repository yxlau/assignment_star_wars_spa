import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const Nav = ({ getResource, location }) => {

  return (
    <nav onClick={getResource}>
  <NavLink exact to="/people" activeClassName="disabled">People</NavLink>{' / '}
    <NavLink exact to="/films" activeClassName="disabled">Films</NavLink>{' / '}
    <NavLink exact to="/starships" activeClassName="disabled">Starships</NavLink>{' / '}
    <NavLink exact to="/vehicles" activeClassName="disabled">Vehicles</NavLink>{' / '}
    <NavLink exact to="/species" activeClassName="disabled">Species</NavLink>{' / '}
    <NavLink exact to="/planets" activeClassName="disabled">Planets</NavLink>
  </nav>
  )
}

export default withRouter(Nav)
