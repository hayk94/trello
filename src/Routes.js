import React from 'react'

import { Router, Route, IndexRoute, Switch, browserHistory } from 'react-router'

import Dashboard from './components/Dashboard'
import Auth from './components/Dashboard/Auth'
import SignUp from './components/Dashboard/Auth/SignUp'
import SignIn from './components/Dashboard/Auth/SignIn'
import ForgotPassword from './components/Dashboard/Auth/ForgotPassword'
import ForgotPasswordSuccess from './components/Dashboard/Auth/ForgotPasswordSuccess'
import Projects from './components/Dashboard/Projects'
import Project from './components/Dashboard/Project'

export default <Router history={browserHistory}>
  <Route path='/' component={Dashboard}>
    <IndexRoute component={Projects} />
    <Route path='/auth' component={Auth}>
      <Route path='/auth/signup' component={SignUp} />
      <Route path='/auth/signin' component={SignIn} />
      <Route path='/auth/forgot-password' component={ForgotPassword} />
      <Route path='/auth/forgot-password-success' component={ForgotPasswordSuccess} />
    </Route>
    <Route path='/project/:_id' component={Project} />
  </Route>
</Router>
