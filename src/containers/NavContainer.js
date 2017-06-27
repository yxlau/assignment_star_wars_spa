import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getResources, setTitle } from '../actions'
import Nav from '../components/Nav'

const mapStateToProps = (state, props) => {
  return { location: props.location }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getResource: (e) => {
      e.preventDefault()
      let text = e.target.text
      dispatch(setTitle(text))
      dispatch(getResources(text.toLowerCase()))
    }
  }
}


const NavContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(Nav))

export default NavContainer
