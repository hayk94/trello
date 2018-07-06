import React from 'react'

import { Router, Route, IndexRoute, Switch, browserHistory } from 'react-router'

import Dashboard from './components/Dashboard'

export default <Router history={browserHistory}>
  <Route path='/' component={Dashboard} />
</Router>
