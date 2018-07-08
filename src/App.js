import firebase from 'firebase'
import React, { Component } from 'react'

import { Provider } from 'react-redux'
import store from './redux'

import Routes from './Routes'

class App extends Component {
  componentWillMount () {
    // Initialize Firebase
    var config = {
      apiKey: 'AIzaSyC1H97dDoIVurLdgHOGgfRRubrTmb3YkTo',
      authDomain: 'tree-of-life-ee870.firebaseapp.com',
      databaseURL: 'https://tree-of-life-ee870.firebaseio.com',
      projectId: 'tree-of-life-ee870',
      storageBucket: 'tree-of-life-ee870.appspot.com',
      messagingSenderId: '861153906067'
    }
    firebase.initializeApp(config)
  }

  render () {
    return <Provider store={store}>
      {Routes}
    </Provider>
  }
}

export default App
