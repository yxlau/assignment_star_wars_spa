import { connect } from 'react-redux'
import Pagination from '../components/Pagination'

const mapStateToProps = (state) => {
  return {
    next: state.resultsMeta ? state.resultsMeta.next : null,
    prev: state.resultsMeta ? state.resultsMeta.prev : null
  }

}

const PaginationContainer = connect(
  mapStateToProps,
  null
)(Pagination)

export default PaginationContainer
