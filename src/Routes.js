import React from 'react'

import { Router, Route, IndexRoute, Switch, browserHistory } from 'react-router'

import Dashboard from './components/Dashboard'
import Projects from './components/Dashboard/Projects'
import Project from './components/Dashboard/Project'

export default <Router history={browserHistory}>
  <Route path='/' component={Dashboard}>
    <IndexRoute component={Projects} />
    <Route path='/:_id' component={Project} />
  </Route>
</Router>
