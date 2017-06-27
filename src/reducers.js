import * as Actions from './actions'

const initialState = {
  results: {},
  search: {},
  isFetching: false,

}

export function starWars(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_RESOURCE_REQUEST:
    case Actions.SEARCH_REQUEST:
      return {
        ...state,
        isFetching: true,
        results: {}
      }
    case Actions.GET_RESOURCE_FAILURE:
    case Actions.SEARCH_FAILURE:
      return {
        ...state,
        isFetching: false
      }
    case Actions.GET_RESOURCE_SUCCESS:
    case Actions.SEARCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        results: action.data
      }
    case Actions.SET_TITLE:
      console.log('set title')
      return {
        ...state,
        title: action.data
      }
    case Actions.SET_NAME:
      return {
        ...state,
        name: action.data
      }
    case Actions.GET_SINGLE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        singleResult: action.data
      }
    case Actions.SET_RESULTS_META:
      return {
        ...state,
        resultsMeta: action.data
      }
    case Actions.SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.data
      }
    default:
      return state
  }
}
