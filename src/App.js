import React, { Component } from 'react'

import { Provider } from 'react-redux'
import store from './redux'

import Routes from './Routes'

import initFirebase from './initFirebase'

class App extends Component {
  componentWillMount () {
    initFirebase()
  }

  render () {
    return <Provider store={store}>
      {Routes}
    </Provider>
  }
}

export default App
