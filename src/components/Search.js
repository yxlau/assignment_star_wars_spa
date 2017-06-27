import React from 'react'
import { withRouter } from 'react-router-dom'

const Search = withRouter(({ search, history }) => {

  return (
    <form className="form-inline mt-2" onSubmit={search}>
    <input type="text" name="term" className="form-control mr-1" />
    <select className="custom-select mr-1" defaultValue="people" name="type">
    <option value="people">People</option>
    <option value="films">Films</option>
    <option value="starships">Starships</option>
    <option value="vehicles">Vehicles</option>
    <option value="species">Species</option>
    <option value="planets">Planets</option>
    </select>
    <button type="submit" className="btn btn-primary" onClick={() => {history.push('/results')}}>Search</button>
    </form>)
})

export default Search
