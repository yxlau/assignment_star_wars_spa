import Search from '../components/Search'
import { connect } from 'react-redux'
import serialize from 'form-serialize'
import { search, setTitle } from '../actions'

const mapStateToProps = (state) => {
  return {}
}


const mapDispatchToProps = (dispatch) => {
  return {
    search: (e) => {
      e.preventDefault()
      const form = e.target
      const data = serialize(form, { hash: true })
      dispatch(search(data))
      dispatch(setTitle(data.term))
      form.reset()
    }
  }
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)


export default SearchContainer
