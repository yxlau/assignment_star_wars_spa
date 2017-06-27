import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import ResourcesContainer from '../containers/ResourcesContainer'
import ResourceContainer from '../containers/ResourceContainer'
import NavContainer from '../containers/NavContainer'
import SearchContainer from '../containers/SearchContainer'
import ScrollToTop from './ScrollToTop'
import PaginationContainer from '../containers/PaginationContainer'

const App = () => {
  return (
    <Router>
    <ScrollToTop>
    <div className="container">
    <h1>Star Wars Encyclopedia</h1>
    <NavContainer />
    <SearchContainer />
    <hr />
    <Switch>
  <Route exact path="/" render={() => <p>Hi! Start browsing by using the search bar or clicking one of the links above</p>} />
  <Route exact path="/:resources/:id" component={ResourceContainer} />
  <Route exact path="/:resources" component={ResourcesContainer} />


  <Route render={() => <p>Page not found</p>} />
  </Switch>
  <PaginationContainer />
  </div>
  </ScrollToTop>

  </Router>)
}
export default App;
