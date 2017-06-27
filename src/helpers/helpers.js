import React from 'react'
import { Link } from 'react-router-dom'

export function removeRoot(url) {
  let path = url.replace('http://swapi.co/api/', '/')
  return path
}

export function makeList(items, key) {
  if (items.length < 1) {
    return items
  }
  let li = items.map((item) => {
    return <li key={item}>{linkify(item)}</li>
  })
  return (<ul key={key}>{li}</ul>)
}

export function linkify(link) {
  // make sure we don't try to use indexOf on a number
  if (typeof link !== 'string') {
    return link
  }
  if (link.indexOf('http://') > -1) {
    return <Link to={removeRoot(link)}>{removeRoot(link)}</Link>
  }
  return link

}
