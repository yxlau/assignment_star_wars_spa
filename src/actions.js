export const GET_RESOURCE_REQUEST = 'GET_RESOURCE_REQUEST'
export const GET_RESOURCE_SUCCESS = 'GET_RESOURCE_SUCCESS'
export const GET_RESOURCE_FAILURE = 'GET_RESOURCE_FAILURE'
export const SET_TITLE = 'SET_TITLE'
export const SET_NAME = 'SET_NAME'
export const GET_SINGLE_SUCCESS = 'GET_SINGLE_SUCCESS'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
export const SEARCH_REQUEST = 'SEARCH_REQUEST'
export const SEARCH_FAILURE = 'SEARCH_FAILURE'
export const SET_RESULTS_META = 'SET_RESULTS_META'
export const SET_IS_FETCHING = 'SET_IS_FETCHING'

export function getResourceRequest(data) {
  return {
    type: GET_RESOURCE_REQUEST,
    data: data
  }
}

export function getResourceSuccess(data) {
  return {
    type: GET_RESOURCE_SUCCESS,
    data: data
  }
}

export function getResourceFailure(data) {
  return {
    type: GET_RESOURCE_FAILURE,
    data: data
  }
}

export function setTitle(data) {
  console.log('setTitle', data)
  return {
    type: SET_TITLE,
    data: data
  }
}

export function setName(data) {
  return {
    type: SET_NAME,
    data: data
  }
}

export function getSingleSuccess(data) {
  return {
    type: GET_SINGLE_SUCCESS,
    data: data
  }
}

export function searchSuccess(data) {
  return {
    type: SEARCH_SUCCESS,
    data: data
  }
}
export function searchFailure(error) {
  return {
    type: SEARCH_FAILURE,
    data: error
  }
}
export function searchRequest(term) {
  return {
    type: SEARCH_REQUEST,
    data: term
  }
}

export function setResultsMeta(data) {
  return {
    type: SET_RESULTS_META,
    data: data
  }
}

export function setIsFetching(data) {
  return {
    type: SET_IS_FETCHING,
    data: data
  }
}

export function getResources(name) {
  return (dispatch) => {
    dispatch(getResourceRequest())
    name = name[0] !== '/' ? '/' + name : name
    fetch(`http://swapi.co/api${name}`).
    then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`)
        }
        return response.json()
      })
      .then((results) => {
        dispatch(getResourceSuccess(results))
        dispatch(setResultsMeta({
          count: results.count,
          next: results.next,
          prev: results.previous
        }))
      })
      .catch(error => {
        dispatch(getResourceFailure(error))
      })
  }
}

export function getSingleResource(url) {
  return (dispatch) => {
    dispatch(getResourceRequest())
    fetch(`http://swapi.co/api${url}`).
    then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`)
        }
        return response.json()
      })
      .then((results) => {
        dispatch(getSingleSuccess(results))
        dispatch(setResultsMeta({
          count: results.count,
          next: results.next,
          prev: results.previous
        }))
      })
      .catch(error => {
        dispatch(getResourceFailure(error))
      })
  }
}

export function search(query) {
  const term = query.term
  const type = query.type

  return (dispatch) => {
    dispatch(searchRequest())

    fetch(`http://swapi.co/api/${type}/?search=${term}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`)
        }
        return response.json()
      })
      .then(results => {
        dispatch(searchSuccess(results))
        dispatch(setResultsMeta({
          count: results.count,
          next: results.next,
          prev: results.previous
        }))
      })
      .catch(error => {
        dispatch(searchFailure(error))
      })
  }


}
