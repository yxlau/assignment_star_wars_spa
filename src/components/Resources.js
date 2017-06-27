import React from 'react'
import { Link } from 'react-router-dom'
import { removeRoot } from '../helpers/helpers'

const Resources = (props) => {
  const { title, results, location, match, isFetching, resultsMeta } = props
  let items = []
  let list
  if (results) {
    items = results.map((result) => {
      let name = result.name || result.title
      let url = result.url
      return <li key={url}><Link to={removeRoot(result.url)}>{name}</Link></li>
    })
    list = (<ul key={match.url}>{items}</ul>)
    if (resultsMeta && resultsMeta.count === 0) {
      list = <p>Sorry, no matches found for "{title}".</p>
    }
  }



  return (
    <section id="listing">
    <h3>{ title ? (`Results for "${title}"`) : ''}</h3>
  {isFetching ? <p>Loading...</p> : list}
    </section>)

}

export default Resources
