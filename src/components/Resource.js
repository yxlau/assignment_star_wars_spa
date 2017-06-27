import React from 'react'
import { makeList, linkify } from '../helpers/helpers'

const Resource = ({ results, path, url, isFetching }) => {
  let title, details = ''
  if (results) {
    title = results.name || results.title
    details = []
    for (let key in results) {
      if (results.hasOwnProperty(key)) {
        if (Array.isArray(results[key]) && results[key].length > 0) {
          let items = makeList(results[key], key)
          details.push(
            <dl className="row" key={results[key]}><dt className="col-sm-3">{key}</dt><dd className="col-sm-9" key={key}>{items}</dd></dl>
          )
        } else {
          details.push(<dl className="row" key={key}><dt className="col-sm-3">{key}</dt><dd className="col-sm-9">{linkify(results[key])}</dd></dl>)
        }
      }
    }
  }
  return (
    <section id="result">
    <h3>{title}</h3>
    {isFetching ? <p>Loading...</p> : details}
    </section>
  )
}

export default Resource
