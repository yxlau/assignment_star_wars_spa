import React, { Component } from 'react'
import { connect } from 'react-redux'
import Resources from '../components/Resources'
import { getResources, setName } from '../actions'

// check the current location
// if component did mount, use the location to get resources

const mapStateToProps = (state, props) => {
  return {
    path: props.location.pathname + props.location.search,
    results: state.results.results || [],
    title: state.title,
    single: state.name,
    isFetching: state.isFetching,
    resultsMeta: state.resultsMeta
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getResources: (path) => {
      dispatch(getResources(path))
    }
  }
}


class ResourcesContainer extends Component {
  componentDidMount() {
    this.props.getResources(this.props.path)
  }
  componentDidUpdate(prevProps) {
    if (prevProps.path !== this.props.path) {
      this.props.getResources(this.props.path)

    }
  }


  render() {
    return (
      <Resources {...this.props} />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResourcesContainer)
