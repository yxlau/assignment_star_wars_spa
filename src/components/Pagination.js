import React from 'react'
import { Link } from 'react-router-dom'
import { removeRoot } from '../helpers/helpers'

const Pagination = ({ next, prev }) => {

  if (!next && !prev) {
    return null
  }

  next = next ? <Link to={removeRoot(next)} className="page-link">Next</Link> : <a className="page-link disabled">Next</a>
  prev = prev ? <Link to={removeRoot(prev)} className="page-link">Prev</Link> : <a className="page-link disabled">Prev</a>



  return (
    <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item">{prev}</li>
    <li className="page-item">{next}</li>
  </ul>
</nav>
  )
}

export default Pagination
