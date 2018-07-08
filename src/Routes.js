import React from 'react'

import { Router, Route, IndexRoute, Switch, browserHistory } from 'react-router'

import Dashboard from './components/Dashboard'
import Auth from './components/Dashboard/Auth'
import SignUp from './components/Dashboard/Auth/SignUp'
import SignIn from './components/Dashboard/Auth/SignIn'
import Projects from './components/Dashboard/Projects'
import Project from './components/Dashboard/Project'

export default <Router history={browserHistory}>
  <Route path='/' component={Dashboard}>
    <IndexRoute component={Projects} />
    <Route path='/sign' component={Auth}>
      <Route path='/sign/up' component={SignUp} />
      <Route path='/sign/in' component={SignIn} />
    </Route>
    <Route path='/project/:_id' component={Project} />
  </Route>
</Router>
