import React, { Component } from 'react'
import Resource from '../components/Resource'
import { connect } from 'react-redux'
import { getSingleResource, setIsFetching } from '../actions'

const mapStateToProps = (state, props) => {
  return {
    path: props.location.pathname,
    url: props.location.url,
    results: state.singleResult,
    isFetching: state.isFetching,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSingleResource: (url) => {
      dispatch(getSingleResource(url))
    },
    setIsFetching: (state) => {
      dispatch(setIsFetching(state))
    }
  }
}

class ResourceContainer extends Component {
  componentDidMount() {
    this.props.getSingleResource(this.props.path)
  }
  componentDidUpdate(prevProps) {
    if (prevProps.path !== this.props.path) {
      this.props.getSingleResource(this.props.path)
    }
  }

  render() {
    const { results } = this.props

    return <Resource results={results} />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(ResourceContainer)
