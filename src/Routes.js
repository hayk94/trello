import React from 'react'

import { Router, Route, IndexRoute, Switch, browserHistory } from 'react-router'

import Dashboard from './components/Dashboard'
import Auth from './components/Dashboard/Auth'
import Projects from './components/Dashboard/Projects'
import Project from './components/Dashboard/Project'

// export these for route checking
export const signUpPath = '/sign-up'
export const signInPath = '/sign-in'

export default <Router history={browserHistory}>
  <Route path='/' component={Dashboard}>
    <IndexRoute component={Projects} />
    <Route path={signUpPath} component={Auth} />
    <Route path={signInPath} component={Auth} />
    <Route path='/project/:_id' component={Project} />
  </Route>
</Router>
